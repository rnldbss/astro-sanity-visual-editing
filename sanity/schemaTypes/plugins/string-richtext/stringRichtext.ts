import { defineField, defineType } from "sanity";

export const stringRichtextType = defineType({
  name: "stringRichtext",
  type: "object",
  title: "Text and block of text",
  fields: [
    defineField({
      name: "string",
      type: "string",
    }),

    defineField({
      name: "contentBlock",
      type: "richText",
    }),
  ],
  preview: {
    select: {
      title: "string",
    },
  },
});
