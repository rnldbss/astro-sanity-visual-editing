import { defineArrayMember, defineField, defineType } from "sanity";

export const textAndListDetailsType = defineType({
  name: "textAndListDetails",
  type: "object",
  title: "Text and list details",
  fields: [
    defineField({
      name: "body",
      type: "blockContent",
    }),

    defineField({
      name: "techStack",
      type: "array",
      of: [defineArrayMember({ name: "detail", type: "twoStrings" })],
    }),
  ],
});
