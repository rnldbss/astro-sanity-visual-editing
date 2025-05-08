import { defineType, defineField } from '@sanity/types';

export const blockTextBodyCTAImage = defineType({
  name: "blockTextBodyCTAImage",
  type: "object",
  title: "Heading, body and button with image",
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
      title: "Button",
      name: "button",
      type: "linkSelector",
    }),
    defineField({
      title: "Image",
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
        title: string || "Untitled",
        media: image,
      };
    },
  },
});
