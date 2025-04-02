import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { schema } from "./sanity/index";
import { resolve } from "./lib/sanity/resolve-production-url";
export default defineConfig({
  name: "astro-sanity-visual-editing",
  title: "Astro + Sanity with visual editing",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool(),
    presentationTool({
      resolve: resolve,
      previewUrl: location.origin,
    }),
  ],
  schema,
});
