import { defineType, defineField } from '@sanity/types';
import { DocumentVideoIcon } from "@sanity/icons";

export const blockTextBodyCTAMedia = defineType({
  name: "blockTextBodyCTAMedia",
  type: "object",
  title: "Heading, body and button with media",
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
        title: string || "Untitled",
        media: mediaPreview,
      };
    },
  },
});
