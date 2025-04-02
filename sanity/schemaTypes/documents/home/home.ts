import { DesktopIcon, UlistIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  type: "document",
  groups: [
    {
      title: "Hero",
      name: "hero",
      icon: DesktopIcon,
    },
    {
      title: "About",
      name: "about",
      icon: UlistIcon,
    },
    {
      title: "Skils",
      name: "skills",
      icon: UlistIcon,
    },
    {
      title: "Experience",
      name: "experience",
      icon: UlistIcon,
    },
       {
      title: "SEO",
      name: "seo",
      icon: UlistIcon,
    },
  ],
  fields: [
    defineField({
      name: "heroHeading",
      type: "blockContent",
      group: "hero",
    }),
    defineField({
      name: "heroSubheading",
      type: "blockContent",
      group: "hero",
    }),
    defineField({
      name: "socialIcons",
      type: "array",
      of: [defineArrayMember({ name: "socialIcon", type: "imageWithLink" })],
      group: "hero",
    }),
    defineField({
      name: "heroImage",
      type: "customImage",
      group: "hero",
    }),
    defineField({
      name: "aboutHeading",
      type: "string",
      group: "about",
    }),
    defineField({
      name: "aboutBody",
      type: "blockContent",
      group: "about",
    }),
    defineField({
      name: "aboutImage",
      type: "customImage",
      group: "about",
    }),
    defineField({
      name: "skillsHeading",
      type: "string",
      group: "skills",
    }),
    defineField({
      name: "skillsBody",
      type: "blockContent",
      group: "skills",
    }),
    defineField({
      name: "skillsList",
      type: "array",
      of: [defineArrayMember({ name: "skillItem", type: "twoStrings" })],
      group: "skills",
    }),
    defineField({
      name: "experience",
      type: "array",
      of: [defineArrayMember({ type: "experience" })],
      group: "experience",
    }),
     defineField({
      name: "seo",
      type: "metadata",
      group: "seo",
    }),
    
  ],
});
