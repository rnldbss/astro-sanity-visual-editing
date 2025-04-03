import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";
import InternalLinkSelect from "../../../components/InternalLinkSelect";
export const linkSelectorType = defineType({
  name: "linkSelector",
  title: "Button configuration",
  type: "object",
  icon: LinkIcon,
  fieldsets: [
    {
      name: "linkDetails",
      title: "Link Details",
      options: { columns: 2 },
      hidden: ({ parent }) => !parent?.enableButton,
    },
  ],
  fields: [
    // Main toggle
    defineField({
      name: "enableButton",
      type: "boolean",
      title: "Enable Button",
      initialValue: false,
      description: "Toggle to show/hide this button",
    }),

    // Link type selector
    defineField({
      name: "linkType",
      title: "Button Action",
      description: "Choose where this button leads",
      type: "string",
      hidden: ({ parent }) => !parent?.enableButton,
      options: {
        list: [
          { title: "External URL", value: "external" },
          { title: "Internal Page", value: "internal" },
          { title: "File Download", value: "download" },
        ],
        layout: "radio",
      },
    }),

    // External link field
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) =>
        !parent?.enableButton || parent?.linkType !== "external",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    }),

    defineField({
      name: "internalLink",
      type: "string",
      title: "Internal Page",
      hidden: ({ parent }) =>
        !parent?.enableButton || parent?.linkType !== "internal",

      options: {
        list: [], // Start with empty array, will be populated dynamically
      },
      components: {
        input: InternalLinkSelect,
      },
    }),

    //File download field
    defineField({
      name: "downloadFile",
      type: "reference",
      title: "File to Download",
      hidden: ({ parent }) =>
        !parent?.enableButton || parent?.linkType !== "download",

      to: [{ type: "files" }],
    }),

    // Button label
    defineField({
      name: "linkText",
      type: "string",
      title: "Button Label",
      hidden: ({ parent }) => !parent?.enableButton || !parent?.linkType,
    }),
  ],

  preview: {
    select: {
      enabled: "enableButton",
      text: "linkText",
      type: "linkType",
      extUrl: "externalUrl",
      intLink: "internalLink",
    },
    prepare({ enabled, text, type, extUrl, intLink }) {
      if (!enabled) return { title: "Button disabled" };

      let subtitle = "No action selected";
      if (type === "external") subtitle = `External: ${extUrl || "No URL set"}`;
      if (type === "internal")
        subtitle = `Internal: ${intLink || "No page selected"}`;
      if (type === "download") subtitle = "Download file";

      return {
        title: text || "No label set",
        subtitle: enabled ? subtitle : "",
      };
    },
  },
});
