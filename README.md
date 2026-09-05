# vite-cdn-probe

A deliberately tiny Vite app that reports where its own assets were fetched from.

## Why it exists

To check, on a real deployment, whether a hosting platform's asset CDN is
actually being used — rather than trusting that a setting was applied.

## How to read it

Open the app. The page prints the origin of its own JavaScript, read at runtime
from `import.meta.url` — the module's own address, so it reports what the build
actually produced rather than what anyone intended.

- If it names a **CDN hostname**, the asset prefix is applied.
- If it names the **app's own hostname**, it is not.

The pink border comes from a stylesheet fetched the same way, so the page's
appearance is also a CORS check: styled means the cross-origin fetch succeeded;
unstyled while the line names a CDN host means it was refused.

`vite.config.js` deliberately states no `base`. That is the ordinary case, and
the one a build-time `--base` flag exists to handle without editing the config.
