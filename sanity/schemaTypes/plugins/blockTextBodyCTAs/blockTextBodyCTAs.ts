import { defineType, defineArrayMember, defineField } from '@sanity/types';

export const blockTextBodyCTAs = defineType({
  name: "blockTextBodyCTAs",
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
      title: "Buttons",
      name: "button",
      type: "array",
      of: [
        defineArrayMember({
          name: "button",
          type: "linkSelector",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "string",
    },
  },
});
