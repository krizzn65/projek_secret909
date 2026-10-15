export function onResizeDebounced(fn: () => void, wait = 200) {
  let t: ReturnType<typeof setTimeout> | null = null;
  const handler = () => { if (t) clearTimeout(t); t = setTimeout(fn, wait); };
  window.addEventListener('resize', handler, { passive: true });
  return () => window.removeEventListener('resize', handler);
}
