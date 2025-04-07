import { defineArrayMember, defineField, defineType } from "sanity";

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
    defineField({
      name: "testimonialText",
      type: "stringRichtext",
    }),
    defineField({
      name: "testimonials",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: [{ type: "testimonial" }] }),
      ],
    }),
    defineField({
      name: "process",
      type: "stringRichtextListStringRichtext",
    }),
    defineField({
      name: "faq",
      type: "stringRichtextButtonListStringRichtext",
    }),
    defineField({
      name: "areas",
      type: "stringRichtextButtonListString",
    }),
    defineField({
      name: "contact",
      type: "stringRichtextButtonMedia",
    }),
  ],
});
