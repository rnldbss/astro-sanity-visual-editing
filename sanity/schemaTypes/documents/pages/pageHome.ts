import { defineField, defineType } from "sanity";

export const pageHomeType = defineType({
  name: "pageHome",
  type: "document",
  title: "Home",
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "Home",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "URL Path",
      initialValue: { current: "" },
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "hero",
      type: "heroTestimonialMedia",
    }),
    defineField({
      name: "about",
      type: "stringRichtextButtonMedia",
    }),
    defineField({
      name: "services",
      type: "stringListStringRichtextButtonMedia",
    }),
  ],
});
