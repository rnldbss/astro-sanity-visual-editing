import { defineArrayMember, defineField, defineType } from "sanity";

export const blockTextWithTextBodyCTAImageList = defineType({
  name: "blockTextWithTextBodyCTAImageList",
  type: "object",
  title: "Heading with a list of text block and button with image",
  fields: [
    defineField({
      title: "Heading",
      name: "string",
      type: "string",
    }),
    defineField({
      name: "stringRichtextButtonImageList",
      type: "array",
      of: [defineArrayMember({ type: "blockTextBodyCTAImage" })],
    }),
  ],
  preview: {
    select: {
      string: "string",
      image: "stringRichtextButtonImageList.image.asset",
    },
    prepare({ string, image }) {
      return {
        title: string || "Untitled",
        media: image,
      };
    },
  },
});
