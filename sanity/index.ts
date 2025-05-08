/**
 * Schema Configuration for Sanity Studio
 *
 * This file exports all schema types used in the portfolio project.
 * The schemas are organized into three main categories:
 *
 * 1. Document Types: Main content schemas that represent full documents in Sanity
 * 2. Plugin Types: Reusable field configurations that can be embedded in other schemas
 * 3. Utility Types: Base schemas and shared configurations used across multiple schemas
 */

import type { SchemaTypeDefinition } from "sanity";

// Document Types - Main content schemas
import { pageHomeType } from "./schemaTypes/documents/pages/pageHome";
import { pageContactType } from "./schemaTypes/documents/pages/pageContact";
import { pageProjectsType } from "./schemaTypes/documents/pages/pageProjects";
import { pageProjectTemplateType } from "./schemaTypes/documents/pages/pageProjectTemplate";
import { testimonialType } from "./schemaTypes/documents/references/testimonial";
import { filesType } from "./schemaTypes/documents/download-files/files";
import { headerType } from "./schemaTypes/documents/components/header";
import { footerType } from "./schemaTypes/documents/components/footer";

// Plugin Types - Reusable field configurations
import { mediaType } from "./schemaTypes/plugins/media/media";
import { blockTextBodyCTA } from "./schemaTypes/plugins/blockTextBodyCTA/blockTextBodyCTA";
import { blockTextBodyCTAs } from "./schemaTypes/plugins/blockTextBodyCTAs/blockTextBodyCTAs";
import { blockTextBody } from "./schemaTypes/plugins/blockTextBody/blockTextBody";
import { blockTextBodyCTAMedia } from "./schemaTypes/plugins/blockTextBodyCTAMedia/blockTextBodyCTAMedia";
import { blockTextBodyCTAImages } from "./schemaTypes/plugins/blockTextBodyCTAImages/blockTextBodyCTAImages";
import { blockHeroWithTestimonialMedia } from "./schemaTypes/plugins/blockHeroWithTestimonialMedia/blockHeroWithTestimonialMedia";
import { blockTextWithTextBodyCTAImageList } from "./schemaTypes/plugins/blockTextWithTextBodyCTAImageList/blockTextWithTextBodyCTAImageList";
import { blockTextBodyCTAImage } from "./schemaTypes/plugins/blockTextBodyCTAImage/blockTextBodyCTAImage";

// Utility Types - Base schemas and shared configurations
import { customImageType } from "./schemaTypes/utils/customImage";
import { videoType } from "./schemaTypes/utils/video";
import { linkSelectorType } from "./schemaTypes/utils/link-selector/linkSelector";
import { richTextType } from "./schemaTypes/utils/richText";
import { blockTextBodyCTAWithStringList } from "./schemaTypes/plugins/blockTextBodyCTAWithStringList/blockTextBodyCTAWithStringList";
import { blockTextBodyCTAWithTextBodyList } from "./schemaTypes/plugins/blockTextBodyCTAWithTextBodyList/blockTextBodyCTAWithTextBodyList";
import { stringRichtextListStringRichtextType } from "./schemaTypes/plugins/blockTextBodyWithTextBodyList/blockTextBodyWithTextBodyList";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document Types
    pageHomeType,
    pageContactType,
    pageProjectsType,
    pageProjectTemplateType,
    headerType,
    footerType,
    testimonialType,
    filesType,

    // Plugin Types
    blockTextBodyCTA,
    blockTextBodyCTAs,
    blockTextBody,
    blockTextBodyCTAMedia,
    blockTextBodyCTAImages,
    mediaType,
    blockHeroWithTestimonialMedia,
    blockTextWithTextBodyCTAImageList,
    blockTextBodyCTAImage,
    blockTextBodyCTAWithStringList,
    blockTextBodyCTAWithTextBodyList,
    stringRichtextListStringRichtextType,

    // Utility Types
    customImageType,
    videoType,
    linkSelectorType,
    richTextType,
  ],
};
