import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const filesType = defineType({
  name: "files",
  type: "document",
  title: "Files",
  fields: [
    defineField({
      name: "file",
      type: "file",
    }),
  ],
  preview: {
    select: {
      filename: "file.asset.originalFilename",
    },
    prepare({ filename }) {
      return {
        title: filename || "Unnamed file",
        media: DocumentIcon,
      };
    },
  },
});
