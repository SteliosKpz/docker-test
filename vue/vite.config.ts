import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  base: "/vue/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: [
      "@angular/core",
      "@angular/common",
      "@angular/platform-browser",
      "@angular/elements",
      "zone.js",
    ],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      external: [], // Don't externalize Angular dependencies
      output: {
        manualChunks: {
          angular: [
            "@angular/core",
            "@angular/common",
            "@angular/platform-browser",
            "@angular/elements",
          ],
        },
      },
    },
  },
});
