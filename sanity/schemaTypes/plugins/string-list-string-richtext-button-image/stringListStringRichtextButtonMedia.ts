import { defineArrayMember, defineField, defineType } from "sanity";

export const stringListStringRichtextButtonMediaType = defineType({
  name: "stringListStringRichtextButtonMedia",
  type: "object",
  title: "Text, block of text, button and media",
  fields: [
    defineField({
      name: "string",
      type: "string",
    }),
    defineField({
      name: "stringRichtextButtonImageList",
      type: "array",
      of: [defineArrayMember({ type: "stringRichtextButtonImage" })],
    }),
  ],
  preview: {
    select: {
      string: "string",
      image: "stringRichtextButtonImageList.image.asset",
    },
    prepare({ string, image }) {
      return {
        title: string || "Untitled Content Block",
        media: image,
      };
    },
  },
});
