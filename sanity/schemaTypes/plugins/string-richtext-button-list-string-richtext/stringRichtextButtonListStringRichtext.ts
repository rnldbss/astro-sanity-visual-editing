import { defineArrayMember, defineField, defineType } from "sanity";

export const stringRichtextButtonListStringRichtextType = defineType({
  name: "stringRichtextButtonListStringRichtext",
  type: "object",
  title: "Text, block of text, button and list of text and block of text",
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
    defineField({
      name: "stringRichtextList",
      type: "array",
      of: [defineArrayMember({ type: "stringRichtext" })],
    }),
  ],
  preview: {
    select: {
      string: "string",
    },
    prepare({ string }) {
      return {
        title: string || "Untitled Content Block",
      };
    },
  },
});
