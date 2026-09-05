# vite-cdn-probe

A deliberately tiny Vite app, used to verify that Roar's asset CDN works end to
end on real hardware.

It exists because nothing else on the platform is a Vite app, and the CDN's
asset-prefix support is Vite-only for now (Next.js needs a different mechanism —
see the roadmap).

## What it proves, and how to read it

Open the app. The page says where its own JavaScript was fetched from, read at
runtime from `import.meta.url` — the module's own address, so it reports what the
build actually baked in rather than what anyone intended.

- **`https://<app>-cdn.roarai.app`** — the asset prefix is applied.
- **`https://<app>.roarai.app`** — it is not; assets come from the box.

The pink border comes from a stylesheet fetched the same way. If the page is
unstyled while the line names a `-cdn` host, the assets are being refused rather
than served — check CORS and the asset path gate on the box.

`vite.config.js` deliberately states no `base`: that is the ordinary case, and
the one the platform's `--base` flag exists to handle without editing a
customer's config.
