import { defineType, defineField } from '@sanity/types';
import { DocumentVideoIcon } from "@sanity/icons";

export const mediaType = defineType({
  name: "media",
  title: "Media",
  type: "object",
  fields: [
    defineField({
      name: "mediaType",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
    }),
    defineField({
      name: "image",
      type: "customImage",
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),
    defineField({
      name: "video",
      type: "video",
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),
  ],
  preview: {
    select: {
      mediaType: "mediaType",
      image: "image",
      video: "video",
    },
    prepare({ mediaType, image, video }) {
      return {
        title: mediaType === "image" ? "Image" : "Video",
        subtitle:
          mediaType === "image"
            ? image?.alt || "No alt text"
            : video?.videoMp4?.filename ||
              video?.videoWebm?.filename ||
              "No video selected",
        media: mediaType === "image" ? image?.asset : DocumentVideoIcon,
      };
    },
  },
});
