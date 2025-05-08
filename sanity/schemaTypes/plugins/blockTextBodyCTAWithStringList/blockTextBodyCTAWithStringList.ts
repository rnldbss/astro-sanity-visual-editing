import { defineArrayMember, defineField, defineType } from "sanity";

export const blockTextBodyCTAWithStringList = defineType({
  name: "blockTextBodyCTAWithStringList",
  type: "object",
  title: "Heading, body and button with a list of text",
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
      title: "List of text",
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
        title: string || "Untitled",
      };
    },
  },
});
