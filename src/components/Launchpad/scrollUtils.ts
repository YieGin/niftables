export const smoothScroll = (element: HTMLDivElement | null, direction: 'next' | 'prev', duration: number = 300): void => {
  if (!element) return;

  const children = element.children;
  if (!children.length) return;

  const itemWidth = children[0].getBoundingClientRect().width;
  const totalScrollDistance = itemWidth;

  const startLeft = element.scrollLeft;
  const endLeft = direction === 'next' ? startLeft + totalScrollDistance : startLeft - totalScrollDistance;

  const start = performance.now();

  const animateScroll = (time: number) => {
    const timeElapsed = time - start;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutQuad(progress);

    element.scrollLeft = startLeft + easeProgress * (endLeft - startLeft);

    if (timeElapsed < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
};

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
