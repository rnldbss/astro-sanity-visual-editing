import { defineType, defineField } from "sanity";
import { StarFilledIcon } from "@sanity/icons";

export const testimonialType = defineType({
  title: "Testimonial",
  name: "testimonial",
  type: "document",
  icon: StarFilledIcon,
  fields: [
    defineField({
      name: "image",
      type: "customImage",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "info",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "richText",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "info",
      media: "image",
    },
  },
});
