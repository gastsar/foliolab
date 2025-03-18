// @ts-check
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import path from "path";

import sitemap from "@astrojs/sitemap";

import { SITE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: SITE.website,

  integrations: [
    icon(),
    sanity({
      projectId: "zmv1ajh4",
      dataset: "production",
      useCdn: false,
      // Access the Studio on your.url/admin
      studioBasePath: "/admin",
    }),
    react(),
    sitemap(),
  ],
  output: "server",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
    logLevel: "error",
    define: {
      __DATE__: `'${new Date()}'`,
    },
    resolve: {
      alias: {
        "@": path.resolve("./src"), // Add this alias
      },
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
