// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";

const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_API_VERSION,
  PUBLIC_SANITY_USE_CDN,
} = env;

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      apiVersion: PUBLIC_SANITY_API_VERSION,
      useCdn: PUBLIC_SANITY_USE_CDN === "false",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],

  image: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [{ protocol: "https" }],
  },

   vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  adapter: netlify(),
});
