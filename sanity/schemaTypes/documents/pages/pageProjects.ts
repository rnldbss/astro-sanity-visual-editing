import { defineType } from "sanity";
import { defineField } from "@sanity/types";

export const pageProjectsType = defineType({
  name: "pageProjects",
  type: "document",
  title: "Projects",
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "Projects",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "URL Path",
      initialValue: { current: "projects" },
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "intro",
      type: "stringRichtextButton",
    }),
  ],
});
