// Post-build step for static/PHP hosting (runs with `npm run build`).
//
// The hosting panel serves the site from the project's `public/` directory,
// but the build writes to `dist/client`. This script copies the finished
// site into `public/` so the panel finds `index.html` directly inside it.
//
// Skipped inside the Lovable sandbox: the preview dev server serves the
// project's public/ directory, and copying build output there would shadow
// the app's routes.
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";

if (process.env.LOVABLE_SANDBOX === "1") process.exit(0);

const root = process.cwd();
const clientDir = path.join(root, "dist", "client");
const publicDir = path.join(root, "public");

if (!existsSync(clientDir)) {
  console.warn("[postbuild] dist/client not found — nothing copied to public/.");
  process.exit(0);
}

// Routes that need their own index.html on plain static hosting. The
// prerenderer reliably emits only the root page; the shared shell is a valid
// entry for every route because all assets are referenced by absolute paths.
const routes = ["about", "expertise", "work", "process", "contact"];

// Replace hashed assets wholesale so old bundles don't pile up.
rmSync(path.join(publicDir, "assets"), { recursive: true, force: true });

// Copy the site: index.html, assets/, favicon.ico, robots.txt, prerendered
// route folders (when present).
cpSync(clientDir, publicDir, { recursive: true });

for (const route of routes) {
  const dir = path.join(publicDir, route);
  mkdirSync(dir, { recursive: true });
  if (!existsSync(path.join(dir, "index.html"))) {
    cpSync(path.join(publicDir, "index.html"), path.join(dir, "index.html"));
  }
}

console.log("[postbuild] Copied dist/client into public/ (index.html + assets + route folders).");
