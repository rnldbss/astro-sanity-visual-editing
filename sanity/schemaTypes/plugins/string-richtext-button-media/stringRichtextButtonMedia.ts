import { defineField, defineType } from "sanity";
import { DocumentVideoIcon } from "@sanity/icons";

export const stringRichtextButtonMediaType = defineType({
  name: "stringRichtextButtonMedia",
  type: "object",
  title: "Text, block of text, button and media",
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
