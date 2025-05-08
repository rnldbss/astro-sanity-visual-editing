import { defineArrayMember, defineField, defineType } from "sanity";

export const blockTextBodyCTAWithTextBodyList = defineType({
  name: "blockTextBodyCTAWithTextBodyList",
  type: "object",
  title: "Heading, body and button with a list of text block",
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
    defineField({
      title: "List of text blocks",
      name: "stringRichtextList",
      type: "array",
      of: [defineArrayMember({ type: "blockTextBody" })],
    }),
  ],
  preview: {
    select: {
      string: "string",
    },
    prepare({ string }) {
      return {
        title: string || "Untitled",
      };
    },
  },
});
