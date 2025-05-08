import { defineField, defineType, defineArrayMember } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const blockTextBodyCTAImages = defineType({
  name: "blockTextBodyCTAImages",
  type: "object",
  title: "Heading, body and button with image",
  icon: ImagesIcon,
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
        title: title || "Untitled",
        subtitle: count ? `${count} image${count > 1 ? "s" : ""}` : "No images",
        media: media || ImagesIcon,
      };
    },
  },
});
