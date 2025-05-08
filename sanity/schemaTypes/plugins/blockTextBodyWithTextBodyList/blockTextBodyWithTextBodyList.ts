import { defineArrayMember, defineField, defineType } from "sanity";

export const stringRichtextListStringRichtextType = defineType({
  name: "stringRichtextListStringRichtext",
  type: "object",
  title: "Text, block of text and list of text and block of text",
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
