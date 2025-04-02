import type { PresentationPluginOptions } from "sanity/presentation";
import { defineLocations } from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other project types
    project: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/`,
          },
        ],
      }),
    }),
  },
};
