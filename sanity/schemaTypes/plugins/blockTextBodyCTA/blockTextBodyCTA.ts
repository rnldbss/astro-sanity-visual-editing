import { defineField, defineType } from "sanity";

export const blockTextBodyCTA = defineType({
  name: "blockTextBodyCTA",
  type: "object",
  title: "Heading, body and button",
  fields: [
    defineField({
      title: "Heading",
      name: "string",
      type: "string",
    }),

    defineField({
      title: "Body",
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
