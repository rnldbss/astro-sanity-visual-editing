import { defineType, defineField } from '@sanity/types';

export const pageContactType = defineType({
  name: "pageContact",
  type: "document",
  title: "Contact me",
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
      type: "slug",
      title: "URL Path",
      initialValue: { current: "contact-me" },
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "intro",
      type: "stringRichtextButton",
    }),
  ],
});
