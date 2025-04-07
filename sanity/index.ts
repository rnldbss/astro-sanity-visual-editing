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
import { stringRichtextButtonType } from "./schemaTypes/plugins/string-rich-text-button/stringRichtextButton";
import { stringRichtextButtonsType } from "./schemaTypes/plugins/string-rich-text-buttons/stringRichtextButtons";
import { stringRichtextType } from "./schemaTypes/plugins/string-richtext/stringRichtext";
import { stringRichtextButtonMediaType } from "./schemaTypes/plugins/string-richtext-button-media/stringRichtextButtonMedia";
import { stringRichtextButtonImagesType } from "./schemaTypes/plugins/string-richtext-button-images/stringRichtextButtonImages";
import { heroTestimonialMediaType } from "./schemaTypes/plugins/hero-testimonial-media/heroTestimonialMedia";
import { stringListStringRichtextButtonMediaType } from "./schemaTypes/plugins/string-list-string-richtext-button-image/stringListStringRichtextButtonMedia";
import { stringRichtextButtonImageType } from "./schemaTypes/plugins/string-richtext-button-image/stringRichtextButtonImage";

// Utility Types - Base schemas and shared configurations
import { customImageType } from "./schemaTypes/utils/customImage";
import { videoType } from "./schemaTypes/utils/video";
import { linkSelectorType } from "./schemaTypes/utils/link-selector/linkSelector";
import { richTextType } from "./schemaTypes/utils/richText";
import { stringRichtextButtonListStringType } from "./schemaTypes/plugins/string-richtext-button-list-string/stringRichtextButtonListString";
import { stringRichtextButtonListStringRichtextType } from "./schemaTypes/plugins/string-richtext-button-list-string-richtext/stringRichtextButtonListStringRichtext";
import { stringRichtextListStringRichtextType } from "./schemaTypes/plugins/string-richtext-ist-string-richtext/stringRichtextListStringRichtext";

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
    stringRichtextButtonType,
    stringRichtextButtonsType,
    stringRichtextType,
    stringRichtextButtonMediaType,
    stringRichtextButtonImagesType,
    mediaType,
    heroTestimonialMediaType,
    stringListStringRichtextButtonMediaType,
    stringRichtextButtonImageType,
    stringRichtextButtonListStringType,
    stringRichtextButtonListStringRichtextType,
    stringRichtextListStringRichtextType,

    // Utility Types
    customImageType,
    videoType,
    linkSelectorType,
    richTextType,
  ],
};
