import {
  isSeasonMode,
  seasonName,
  seasonStorageKey,
  type Season,
  type SeasonMode,
} from '../../data/seasons';
import { canonical } from './geometry';
import type {
  Navigation,
  SeasonFrame,
  Variable,
  Visual,
  seasonController,
} from './season-transition';

declare global {
  interface Window {
    getPortfolioAutomaticSeason: () => Season;
    portfolioSeasonInitial?: { mode: SeasonMode; season: Season };
  }
}

const layers = ['landscape', 'ground', 'foliage'] as const;
const seasons = Object.keys(seasonName) as Season[];
type Engine = ReturnType<typeof seasonController>;

interface State extends Navigation {
  mode: SeasonMode;
  calendar: Season;
}

function resting(season: Season): Navigation {
  return { phase: 'idle', confirmed: season, origin: season, destination: season, direction: 1 };
}

export function mountSeasonState() {
  const root = document.documentElement;
  const board = document.querySelector<HTMLElement>('[data-watercolor-stage]');
  const live = board?.querySelector('[data-watercolor-live]');
  const tree = board?.querySelector<HTMLImageElement>('[data-watercolor-tree]');
  const message = document.querySelector<HTMLElement>('[data-watercolor-status]');
  if (!board || !live || !tree || !message) return;

  function layer<T extends ParentNode>(host: T, id: Variable) {
    return host.querySelector<HTMLImageElement>('img[data-layer=' + id + ']')!;
  }
  const images = {
    landscape: layer(live, 'landscape'),
    ground: layer(live, 'ground'),
    foliage: layer(live, 'foliage'),
  };
  const frames = new Map<Season, SeasonFrame>();
  for (const template of board.querySelectorAll<HTMLTemplateElement>(
    'template[data-watercolor-season]',
  )) {
    const season = template.dataset.watercolorSeason as Season;
    const get = (id: Variable): Visual => {
      const image = layer(template.content, id);
      const src = image.getAttribute('src') ?? '';
      return {
        src: src ? new URL(src, document.baseURI).href : '',
        x: Number(image.dataset.x),
        y: Number(image.dataset.y),
        scale: Number(image.dataset.scale),
        opacity: 1,
        visible: !!src,
      };
    };
    frames.set(season, {
      season,
      sharedSrc: tree.src,
      layers: { landscape: get('landscape'), ground: get('ground'), foliage: get('foliage') },
    });
  }

  const calendar = () => window.getPortfolioAutomaticSeason();
  const resolve = (mode: SeasonMode) => (mode === 'auto' ? calendar() : mode);
  const initial = window.portfolioSeasonInitial ?? { mode: 'auto', season: calendar() };
  let state: State = { ...resting(initial.season), mode: initial.mode, calendar: calendar() };
  let confirmedMode = state.mode;
  let engine: Engine | undefined, loading: Promise<Engine | undefined> | undefined;
  let epoch = 0,
    selection = 0;
  let suspended = false;
  let stopWarm: (() => void) | undefined;
  const subscribers = new Set<() => void>();

  function applyLayer(id: Variable, visual: Visual) {
    const image = images[id];
    const x = visual.x / canonical.width;
    const y = visual.y / canonical.height;
    image.style.setProperty('--layer-x', x * 100 + '%');
    image.style.setProperty('--layer-y', y * 100 + '%');
    image.style.setProperty('--layer-right', (x + visual.scale) * 100 + '%');
    image.style.setProperty('--layer-bottom', (y + visual.scale) * 100 + '%');
    image.style.setProperty('--layer-scale', visual.scale * 100 + '%');
    if (visual.src && image.src !== visual.src) {
      image.src = visual.src;
      image.hidden = false;
    } else if (!visual.src) {
      image.hidden = true;
      image.removeAttribute('src');
    }
  }

  function apply(frame: SeasonFrame) {
    for (const id of layers) applyLayer(id, frame.layers[id]);
  }

  function renderStatus(text: string) {
    root.dataset.season = state.confirmed;
    root.dataset.seasonMode = state.mode;
    board!.dataset.seasonPhase = state.phase;
    message!.textContent = text;
    for (const notify of subscribers) notify();
  }

  function store(mode: SeasonMode) {
    try {
      localStorage.setItem(seasonStorageKey, mode);
    } catch {}
  }

  function status(navigation: Navigation, text: string) {
    state = { ...state, ...navigation, calendar: calendar() };
    if (state.phase === 'idle') {
      if (resolve(state.mode) !== state.confirmed) {
        state.mode = resolve(confirmedMode) === state.confirmed ? confirmedMode : state.confirmed;
        store(state.mode);
      }
      confirmedMode = state.mode;
    }
    renderStatus(text);
  }

  function getEngine() {
    if (engine) return Promise.resolve(engine);
    const generation = epoch;
    loading ??= import('./season-transition')
      .then(({ seasonController }) => {
        if (suspended || generation !== epoch) return;
        engine = seasonController({
          board: board!,
          images,
          initial: frames.get(state.confirmed)!,
          apply,
          applyLayer,
          status,
        });
        return engine;
      })
      .finally(() => {
        if (generation === epoch) loading = undefined;
      });
    return loading;
  }

  function canSelect(mode: SeasonMode) {
    const target = resolve(mode);
    return state.phase === 'idle' || target === state.destination || target === state.reverse;
  }

  function choose(mode: unknown) {
    if (suspended || !isSeasonMode(mode) || !canSelect(mode)) return false;
    const target = resolve(mode);
    state.mode = mode;
    state.calendar = calendar();
    store(mode);
    if (target === state.destination) {
      if (state.phase === 'idle') confirmedMode = mode;
      renderStatus(message!.textContent ?? '');
      return true;
    }

    const id = ++selection;
    const frame = frames.get(target)!;
    stopWarm?.();
    if (engine) {
      void engine.request(frame);
    } else if (target === state.confirmed) {
      status(resting(target), '');
    } else {
      status(
        {
          phase: 'preparing',
          confirmed: state.confirmed,
          origin: state.confirmed,
          destination: target,
          reverse: state.confirmed,
          direction: 1,
        },
        'Preparando ' + seasonName[target] + '…',
      );
      void getEngine()
        .then((controller) => {
          if (id === selection) void controller?.request(frame);
        })
        .catch(async () => {
          if (id !== selection) return;
          try {
            await Promise.all(
              Object.values(frame.layers)
                .filter((layer) => layer.src)
                .map(({ src }) => {
                  const image = new Image();
                  image.src = src;
                  return image.decode();
                }),
            );
          } catch {
            if (id === selection)
              status(resting(state.confirmed), 'No se pudo cargar la estación.');
            return;
          }
          if (id !== selection) return;
          apply(frame);
          status(resting(target), '');
        });
    }
    return true;
  }

  function warm() {
    if (!window.requestIdleCallback || matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    const start = state.confirmed;
    const next = frames.get(seasons[(seasons.indexOf(start) + 1) % seasons.length]!)!;
    let activity = performance.now(),
      idle = 0,
      retry = 0,
      warmed = 0;
    const scope = new AbortController();
    const { signal } = scope;
    const stop = () => {
      scope.abort();
      window.cancelIdleCallback(idle);
      window.clearTimeout(retry);
    };
    stopWarm = stop;
    for (const event of ['pointerdown', 'keydown', 'wheel'])
      window.addEventListener(
        event,
        () => {
          activity = performance.now();
        },
        { capture: true, passive: true, signal },
      );
    function schedule() {
      if (signal.aborted) return;
      idle = window.requestIdleCallback(async (deadline) => {
        if (state.confirmed !== start || state.phase !== 'idle') {
          stop();
          return;
        }
        const waitingForPaint =
          window.PerformanceObserver?.supportedEntryTypes?.includes('paint') &&
          !performance.getEntriesByName('first-contentful-paint').length;
        if (
          waitingForPaint ||
          deadline.timeRemaining() < 8 ||
          document.hidden ||
          performance.now() - activity < 300
        ) {
          retry = window.setTimeout(schedule, 300);
          return;
        }
        // Import in one idle slice; recheck the deadline and activity before decoding.
        if (!engine) {
          try {
            await getEngine();
          } catch {
            stop();
            return;
          }
          schedule();
          return;
        }
        if (!(await engine.warmNext(next)) || ++warmed >= 3) stop();
        else schedule();
      });
    }
    schedule();
  }

  function cancel() {
    if (state.phase === 'idle') return;
    ++selection;
    if (engine) engine.cancel();
    else status(resting(state.confirmed), 'Cambio de estación cancelado.');
  }

  let interactionScope: AbortController | undefined;
  function listen() {
    interactionScope = new AbortController();
    const { signal } = interactionScope;
    window.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'Escape') cancel();
      },
      { signal },
    );
    if (document.readyState === 'complete') warm();
    else window.addEventListener('load', warm, { once: true, signal });
  }
  window.addEventListener('pagehide', () => {
    suspended = true;
    ++epoch;
    ++selection;
    interactionScope?.abort();
    stopWarm?.();
    engine?.dispose();
    engine = undefined;
    loading = undefined;
    status(resting(state.confirmed), '');
  });
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted || !suspended) return;
    suspended = false;
    listen();
  });
  listen();
  renderStatus('');
  return {
    choose,
    canSelect,
    state: () => state as Readonly<State>,
    subscribe(notify: () => void) {
      subscribers.add(notify);
    },
  };
}
