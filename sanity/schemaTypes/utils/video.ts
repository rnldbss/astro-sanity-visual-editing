import { defineType, defineField } from '@sanity/types';

import { DocumentVideoIcon } from "@sanity/icons";

export const videoType = defineType({
  name: "video",
  title: "Video Files",
  type: "object",
  icon: DocumentVideoIcon,
  description: "Remember to optimise the hell out of it",
  fields: [
    defineField({
      name: "videoWebm",
      title: "WebM Video",
      type: "file",
      description: "For modern browsers like Chrome and Firefox.",
    }),
    defineField({
      name: "videoMp4",
      title: "MP4 Video",
      type: "file",
      description: "Ensures compatibility with Safari and iOS devices.",
    }),
  ],
});
