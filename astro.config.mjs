// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    sanity({
      projectId: "zmv1ajh4",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
    react(),
  ],
});
