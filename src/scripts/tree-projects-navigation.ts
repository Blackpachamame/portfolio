import { treeMedia } from '../data/seasons';

const duration = {
  pulse: 150,
  expand: 550,
  uncover: 115,
  entrance: 240,
  returnCover: 180,
  contract: 460,
  restoreControls: 110,
};

type Direction = 'projects' | 'hero';

function initializeTreeProjectsNavigation() {
  const root = document.documentElement;
  const hero = document.getElementById('inicio');
  const projects = document.getElementById('proyectos');
  const projectsTitle = document.getElementById('proyectos-title');
  const scenes = hero?.querySelector<HTMLElement>('[data-tree-scenes]');
  const projectsLink = hero?.querySelector<SVGAElement>('.seasonal-tree__link[href="#proyectos"]');
  const point = projectsLink?.querySelector('.seasonal-tree__point');
  const returnLink = projects?.querySelector<HTMLAnchorElement>('[data-projects-tree-return]');
  if (!hero || !projects || !projectsTitle || !scenes || !projectsLink || !point || !returnLink) {
    return;
  }

  const desktop = matchMedia(treeMedia);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const hasTree = () => desktop.matches && root.hasAttribute('data-tree-layout');
  let active: AbortController | undefined;

  const navigate = (destination: HTMLElement) => {
    const hash = `#${destination.id}`;
    // Leave scroll restoration on auto so the source entry keeps its real scroll position.
    if (location.hash !== hash) {
      try {
        history.pushState(null, '', hash);
      } catch {
        location.hash = hash;
      }
    }
    destination.scrollIntoView({ block: 'start', behavior: 'instant' });
  };

  const start = async (event: MouseEvent, direction: Direction) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      !hasTree()
    ) {
      return;
    }
    event.preventDefault();
    if (active) return;

    const goingToProjects = direction === 'projects';
    const destination = goingToProjects ? projects : hero;
    const focus = () => {
      const target = goingToProjects
        ? projectsTitle
        : hasTree()
          ? projectsLink
          : hero.querySelector<HTMLAnchorElement>('.hero__actions a[href="#proyectos"]');
      target?.focus({ preventScroll: true });
    };

    const scene = scenes.firstElementChild;
    if (
      reducedMotion.matches ||
      typeof Element.prototype.animate !== 'function' ||
      scenes.childElementCount !== 1 ||
      !scene ||
      scene.getAttribute('data-tree-scene') !== root.dataset.season ||
      !CSS.supports('clip-path', 'circle(10px at 10px 10px)')
    ) {
      navigate(destination);
      focus();
      return;
    }

    const marker = point.getBoundingClientRect();
    const offsetY = goingToProjects ? 0 : hero.getBoundingClientRect().top;
    const x = marker.left + marker.width / 2;
    const y = marker.top + marker.height / 2 - offsetY;
    const width = root.clientWidth;
    const height = window.innerHeight;
    if (!marker.width || x < 0 || y < 0 || x > width || y > height) {
      navigate(destination);
      focus();
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;
    active = controller;
    let overlay: HTMLDivElement | undefined;
    let arrived = false;
    let expectedScroll = window.scrollY;
    const animations: Animation[] = [];

    const animate = (element: Element, frames: Keyframe[], ms: number, delay = 0) => {
      const animation = element.animate(frames, {
        duration: ms,
        delay,
        easing: 'ease-in-out',
        fill: 'both',
      });
      animations.push(animation);
      // A partially constructed sequence can also be canceled by cleanup.
      void animation.finished.catch(() => {});
      return animation;
    };

    const cleanup = () => {
      controller.abort();
      animations.forEach((animation) => animation.cancel());
      overlay?.remove();
      projectsLink.removeAttribute('data-tree-selected');
      projects.removeAttribute('data-projects-entering');
      if (active === controller) active = undefined;
    };

    const arrive = () => {
      navigate(destination);
      expectedScroll = window.scrollY;
      arrived = true;
    };

    const finish = (resized = false) => {
      cleanup();
      if (!arrived || resized) arrive();
      focus();
    };

    // External navigation wins. A resize or preference change completes the intended anchor.
    window.addEventListener('popstate', cleanup, { signal });
    window.addEventListener('hashchange', cleanup, { signal });
    window.addEventListener('pagehide', cleanup, { signal });
    window.addEventListener(
      'scroll',
      () => {
        if (Math.abs(window.scrollY - expectedScroll) > 1) cleanup();
      },
      { signal, passive: true },
    );
    window.addEventListener(
      'resize',
      () => {
        if (desktop.matches === root.hasAttribute('data-tree-layout')) finish(true);
      },
      { signal },
    );
    desktop.addEventListener('change', () => finish(true), { signal });
    reducedMotion.addEventListener('change', () => finish(), { signal });
    document
      .querySelector('[data-season-selector]')
      ?.addEventListener('change', () => finish(), { signal });
    const observer = new MutationObserver(() => finish());
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-season', 'data-tree-layout'],
    });
    observer.observe(scenes, { childList: true });
    signal.addEventListener('abort', () => observer.disconnect(), { once: true });

    try {
      const color = getComputedStyle(root).getPropertyValue('--color-canvas').trim();
      const accent = getComputedStyle(root).getPropertyValue('--color-accent-soft').trim();
      const radius = Math.hypot(Math.max(x, width - x), Math.max(y, height - y)) + 4;
      const circle = (size: number) => `circle(${size}px at ${x}px ${y}px)`;
      overlay = document.createElement('div');
      overlay.className = 'tree-projects-overlay';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.style.backgroundColor = color;

      const controls = document.querySelectorAll(
        '#inicio :is(.seasonal-tree__actions, .hero__inner), .site-header [data-season-control]',
      );
      const fade = (element: Element, from: number, to: number, ms: number, delay = 0) =>
        animate(element, [{ opacity: from }, { opacity: to }], ms, delay);

      if (goingToProjects) {
        const otherControls = document.querySelectorAll(
          '#inicio .seasonal-tree__link:not([href="#proyectos"]), #inicio .seasonal-tree__link[href="#proyectos"] :is(path, rect, text)',
        );
        const pulseRadius = (marker.width / 2) * 1.2;
        projectsLink.setAttribute('data-tree-selected', '');
        const fades = [...controls, ...otherControls].map((control) =>
          fade(control, 1, 0, duration.pulse),
        );
        const pulse = animate(
          point,
          [
            { transform: 'scale(1)' },
            { transform: 'scale(1.34)', offset: 0.48 },
            { transform: 'scale(1.2)' },
          ],
          duration.pulse,
        );
        await pulse.finished;
        if (signal.aborted) return;

        document.body.append(overlay);
        await animate(
          overlay,
          [
            {
              clipPath: circle(pulseRadius),
              backgroundColor: `color-mix(in srgb, ${color} 91%, ${accent})`,
            },
            { backgroundColor: color, offset: 0.55 },
            { clipPath: circle(radius), backgroundColor: color },
          ],
          duration.expand,
        ).finished;
        if (signal.aborted) return;

        projects.setAttribute('data-projects-entering', '');
        const branch = projects.querySelector('.projects-tree-return__art');
        const branchAnimation =
          branch &&
          animate(
            branch,
            [
              { clipPath: 'circle(0% at 0 0)', opacity: 0 },
              { clipPath: 'circle(145% at 0 0)', opacity: 0.55 },
            ],
            300,
          );
        const steps = [
          ['.projects-tree-return__link', 70],
          ['.projects-section__index', 100],
          ['#proyectos-title', 180],
          ['.projects-section__introduction', 280],
          ['.project-features, .projects-secondary', 380],
        ] as const;
        const entrance = steps.flatMap(([selector, delay]) =>
          Array.from(projects.querySelectorAll(selector), (element) =>
            animate(
              element,
              [
                { opacity: 0, transform: 'translateY(7px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              duration.entrance,
              delay,
            ),
          ),
        );
        arrive();
        fades.forEach((animation) => animation.cancel());
        await Promise.all([
          fade(overlay, 1, 0, duration.uncover).finished.then(() => overlay?.remove()),
          branchAnimation?.finished,
          ...entrance.map((animation) => animation.finished),
        ]);
      } else {
        document.body.append(overlay);
        await fade(overlay, 0, 1, duration.returnCover).finished;
        if (signal.aborted) return;

        const restoration = [...controls, ...hero.querySelectorAll('.seasonal-tree__stage')].map(
          (control) =>
            fade(
              control,
              0,
              1,
              duration.restoreControls,
              duration.contract - duration.restoreControls,
            ),
        );
        arrive();
        await Promise.all([
          animate(
            overlay,
            [{ clipPath: circle(radius) }, { clipPath: circle(0) }],
            duration.contract,
          ).finished,
          ...restoration.map((animation) => animation.finished),
        ]);
      }
    } catch {
      // A missing/failed visual falls back to the same real anchor and focus target.
    }
    if (!signal.aborted) finish();
  };

  projectsLink.addEventListener('click', (event) => void start(event, 'projects'));
  returnLink.addEventListener('click', (event) => void start(event, 'hero'));
}

initializeTreeProjectsNavigation();
