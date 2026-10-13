// @lovable.dev/vite-tanstack-config already includes the core plugins — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Vite 8 resolves the "@" alias from tsconfig.json natively — no plugin needed.
    resolve: { tsconfigPaths: true },
  },
  tanstackStart: {
    server: { entry: "server" },
    // Static export: writes real index.html files for every page into dist/client
    // so the site can be uploaded to plain static/PHP hosting.
    prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/expertise" },
      { path: "/work" },
      { path: "/process" },
      { path: "/contact" },
    ],
  },
});
