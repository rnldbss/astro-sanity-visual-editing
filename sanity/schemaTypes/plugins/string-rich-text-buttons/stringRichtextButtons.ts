import { defineField, defineType, defineArrayMember } from "sanity";

export const stringRichtextButtonsType = defineType({
  name: "stringRichtextButtons",
  type: "object",
  title: "Text, block of text and buttons",
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
      title: "heading",
    },
  },
});
