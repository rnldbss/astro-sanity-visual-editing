import { defineType, defineField } from '@sanity/types';

export const blockTextBody = defineType({
  name: "blockTextBody",
  type: "object",
  title: "Heading and body",
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
  ],
  preview: {
    select: {
      title: "string",
    },
  },
});
