<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Build & hosting decisions
- `npm run build` runs a postbuild step (`scripts/prepare-hosting.mjs`) that copies `dist/client` into `public/` and creates per-route `index.html` files, because Kyle's hosting panel (craftwithkyle.caleho.cloud) serves the site from `public/`. The step is skipped when `LOVABLE_SANDBOX=1` (Lovable preview/build) — never remove that guard, copying into `public/` inside the sandbox breaks the dev server.
- Vite 8 resolves `@/` imports natively via `resolve.tsconfigPaths: true`; `vite-tsconfig-paths` in dependencies is a no-op stub (`stubs/vite-tsconfig-paths`) that only satisfies `@lovable.dev/vite-tanstack-config`'s peer dependency and silences the duplicate-plugin warning. Don't swap it back for the real package unless the config wrapper drops its internal plugin.
