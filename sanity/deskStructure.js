import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import {
  ComponentIcon,
  BlockElementIcon,
  ProjectsIcon,
  ArchiveIcon,
  DoubleChevronUpIcon,
  DoubleChevronDownIcon,
} from "@sanity/icons";

export const structure = (S, context) =>
  S.list()
    .title("HC Woodworks")
    .items([
      S.listItem()
        .title("Pages")
        .icon(BlockElementIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home")
                .icon(BlockElementIcon)
                .child(
                  S.document().schemaType("pageHome").documentId("pageHome")
                ),
              S.listItem()
                .title("Projects")
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType("pageProjects")
                    .documentId("pageProjects")
                ),
              S.listItem()
                .title("Contact me")
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType("pageContact")
                    .documentId("pageContact")
                ),
            ])
        ),

      S.listItem()
        .title("Projects")
        .icon(ProjectsIcon)
        .child(
          S.list()
            .title("Projects")
            .items([
              // Orderable list of individual projects
              orderableDocumentListDeskItem({
                title: "Projects List",
                type: "pageProjectTemplate",
                S,
                context,
              }),
            ])
        ),

      S.divider(),
      S.listItem()
        .title("Components")
        .icon(ComponentIcon)
        .child(
          S.list()
            .title("Files")
            .items([
              S.listItem()
                .title("Header")
                .icon(DoubleChevronUpIcon)
                .child(S.document().schemaType("header").documentId("header")),
              S.listItem()
                .title("Footer")
                .icon(DoubleChevronDownIcon)
                .child(S.document().schemaType("footer").documentId("footer")),
              S.listItem()
                .title("Files")
                .icon(ArchiveIcon)
                .child(S.document().schemaType("files").documentId("files")),
            ])
        ),

      // Filter out already handled document types from the default list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "pageHome",
            "pageContact",
            "pageProjects",
            "pageProjectTemplate",
            "testimonial",
            "files",
            "header",
            "footer",
          ].includes(listItem.getId())
      ),
    ]);
