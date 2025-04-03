import { defineField, defineType } from "sanity";

export const headerType = defineType({
  name: "header",
  type: "document",
  title: "Footer",
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "Contact me",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "slug",
      type: "string",
      title: "URL Path",
      initialValue: "contact-me",
      readOnly: true,
      hidden: true,
    }),
  ],
});
