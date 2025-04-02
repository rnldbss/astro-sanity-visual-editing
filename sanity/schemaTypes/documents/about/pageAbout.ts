import { defineField, defineType } from "sanity";

export const pageAboutType = defineType({
  name: "pageAbout",
  type: "document",
  title: "Page About",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Page title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "URL Path",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],
});
