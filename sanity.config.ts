import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { schema } from "./sanity/index";
import { resolve } from "./lib/sanity/resolve-production-url";
import { visionTool } from "@sanity/vision";
import { structure } from "./sanity/deskStructure";

export default defineConfig({
  name: "astro-sanity-visual-editing",
  title: "Astro + Sanity with visual editing",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      resolve: resolve,
      previewUrl: location.origin,
    }),
    visionTool(),
  ],
  schema,

  api: {
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  },
});
