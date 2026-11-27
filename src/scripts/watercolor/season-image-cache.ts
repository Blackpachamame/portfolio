const targetSize = 7;

type Entry = { image: HTMLImageElement; task: Promise<HTMLImageElement>; ready: boolean };

export function seasonImageCache() {
  const entries = new Map<string, Entry>();
  let protectedUrls = new Set<string>();

  function trim() {
    for (const url of entries.keys()) {
      if (entries.size <= targetSize) break;
      if (protectedUrls.has(url)) continue;
      entries.delete(url);
    }
  }

  return {
    has: (url: string) => entries.has(url),
    protect(urls: Iterable<string>) {
      protectedUrls = new Set(urls);
      trim();
    },
    decode(url: string, idle = false) {
      const entry = entries.get(url);
      if (entry) {
        if (!idle && !entry.ready) entry.image.fetchPriority = 'auto';
        entries.delete(url);
        entries.set(url, entry);
        return entry.task;
      }
      const image = new Image();
      if (idle) image.fetchPriority = 'low';
      image.src = url;
      const created: Entry = {
        image,
        ready: false,
        task: image.decode().then(() => {
          created.ready = true;
          return image;
        }),
      };
      entries.set(url, created);
      void created.task.catch(() => {
        if (entries.get(url) === created) entries.delete(url);
      });
      trim();
      return created.task;
    },
    clear() {
      protectedUrls.clear();
      entries.clear();
    },
  };
}
