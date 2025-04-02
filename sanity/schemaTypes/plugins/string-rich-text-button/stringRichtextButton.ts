import { defineField, defineType } from "sanity";

export const stringRichtextButtonType = defineType({
  name: "stringRichtextButton",
  type: "object",
  title: "Text, block of text and button",
  fields: [
    defineField({
      name: "string",
      type: "string",
    }),

    defineField({
      name: "contentBlock",
      type: "richText",
    }),
    defineField({
      name: "button",
      type: "linkSelector",
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
  },
});
