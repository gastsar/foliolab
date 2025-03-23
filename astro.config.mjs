// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/consts";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [sitemap()],
  output: "server",
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
