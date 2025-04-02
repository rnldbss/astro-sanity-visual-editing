import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { testimonialType } from "./schemaTypes/documents/references/testimonial";

export const structure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      // Single document for Home page
      // S.listItem()
      //   .title("Home")
      //   .child(S.document().schemaType("home").documentId("home")),

      // // Projects section with nested structure
      // S.listItem()
      //   .title("Projects")
      //   .child(
      //     S.list()
      //       .title("Projects")
      //       .items([
      //         // Single document for projects page configuration
      //         S.listItem()
      //           .title("Projects Page")
      //           .child(
      //             S.document()
      //               .schemaType("projectsPage")
      //               .documentId("projectsPage")
      //           ),

      //         // Orderable list of individual projects
      //         orderableDocumentListDeskItem({
      //           title: "Projects List",
      //           type: "project",
      //           S,
      //           context,
      //         }),
      //       ])
      //   ),

      // // Single document for Contact page
      // S.listItem()
      //   .title("Contact")
      //   .child(S.document().schemaType("contact").documentId("contact")),

      S.divider(),

      // Filter out already handled document types from the default list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            // "project",
            // "contact",
            // "links",
            // "projectsPage",
            "testimonial",
          ].includes(listItem.getId())
      ),
    ]);
