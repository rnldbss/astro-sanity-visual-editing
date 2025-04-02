import { defineField, defineType, defineArrayMember } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const stringRichtextButtonImagesType = defineType({
  name: "stringRichtextButtonImages",
  type: "object",
  title: "Text, rich text, button and images",
  icon: ImagesIcon,
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
      name: "images",
      type: "array",
      of: [
        defineArrayMember({
          type: "customImage",
          options: {
            layout: "grid",
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "string",
      media: "images.0.asset",
      count: "images.length",
    },
    prepare({ title, media, count }) {
      return {
        title: title || "Untitled Content Block",
        subtitle: count ? `${count} image${count > 1 ? "s" : ""}` : "No images",
        media: media || ImagesIcon,
      };
    },
  },
});
