import { defineField, defineType } from "sanity";

export const stringRichtextButtonImageType = defineType({
  name: "stringRichtextButtonImage",
  type: "object",
  title: "Text, block of text, button and Image",
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
      name: "image",
      type: "customImage",
    }),
  ],
  preview: {
    select: {
      string: "string",
      image: "image.asset",
    },
    prepare({ string, image }) {
      return {
        title: string || "Untitled Content Block",
        media: image,
      };
    },
  },
});
