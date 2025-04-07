import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentVideoIcon } from "@sanity/icons";

export const heroTestimonialMediaType = defineType({
  name: "heroTestimonialMedia",
  type: "object",
  title: "Hero with text, block of text, buttons, testimonial and media",
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
      name: "buttons",
      type: "array",
      of: [defineArrayMember({ type: "linkSelector" })],
      validation: (Rule) => Rule.max(2).error("You can only have 2 buttons"),
    }),
    defineField({
      name: "testimonial",
      type: "reference",
      to: [{ type: "testimonial" }],
    }),
    defineField({
      name: "media",
      type: "media",
    }),
  ],
  preview: {
    select: {
      string: "string",
      mediaType: "media.mediaType",
      image: "media.image.asset",
      video: "media.video.videoMp4.asset",
    },
    prepare({ string, mediaType, image, video }) {
      const mediaPreview =
        mediaType === "image"
          ? image
          : video || (mediaType === "video" ? DocumentVideoIcon : null);

      return {
        title: string || "Untitled Content Block",
        media: mediaPreview,
      };
    },
  },
});
