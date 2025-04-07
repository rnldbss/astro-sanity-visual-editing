import { defineArrayMember, defineField, defineType } from "sanity";

export const stringRichtextButtonListStringType = defineType({
  name: "stringRichtextButtonListString",
  type: "object",
  title: "Text, block of text, button and list of text",
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
      name: "stringList",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
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
