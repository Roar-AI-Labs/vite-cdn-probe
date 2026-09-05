/**
 * Reports where this module was fetched from.
 *
 * `import.meta.url` is the module's OWN address, so it says what the build
 * actually baked in — not what we hoped it would. On a plain build it is the
 * app's own hostname; with the CDN prefix applied it is the `-cdn` one.
 */
const el = document.getElementById('where');
const from = new URL(import.meta.url).origin;
el.textContent = `this script was loaded from ${from}`;
el.dataset.origin = from;
