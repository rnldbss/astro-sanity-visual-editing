import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const pageProjectTemplateType = defineType({
  name: "pageProjectTemplate",
  type: "document",
  title: "Project Template",
  orderings: [orderRankOrdering],
  icon: ProjectsIcon,

  fields: [
    orderRankField({ type: "project" }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "URL Path",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
  ],
});
