// scrollIntoView/scrollTo's `behavior` option overrides the CSS
// scroll-behavior rule, so reduced-motion must also be checked in JS.
export function scrollBehavior() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth'
}
