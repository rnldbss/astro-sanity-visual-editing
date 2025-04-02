import type { SchemaTypeDefinition } from "sanity";

// Document Types - Main content schemas
import { testimonialType } from "./schemaTypes/documents/references/testimonial";
import { pageAboutType } from "./schemaTypes/documents/about/pageAbout";
import { pageContactType } from "./schemaTypes/documents/contact/pageAbout";
import { filesType } from "./schemaTypes/documents/download-files/files";

// Plugin Types - Reusable field configurations
import { mediaType } from "./schemaTypes/plugins/media/media";
import { stringRichtextButtonType } from "./schemaTypes/plugins/string-rich-text-button/stringRichtextButton";
import { stringRichtextButtonsType } from "./schemaTypes/plugins/string-rich-text-buttons/stringRichtextButtons";
import { stringRichtextType } from "./schemaTypes/plugins/string-richtext/stringRichtext";
import { stringRichtextButtonMediaType } from "./schemaTypes/plugins/string-richtext-button-media/stringRichtextButtonMedia";
import { stringRichtextButtonImagesType } from "./schemaTypes/plugins/string-richtext-images/stringRichtextButtonImages";

// Utility Types - Base schemas and shared configurations
import { customImageType } from "./schemaTypes/utils/customImage";
import { videoType } from "./schemaTypes/utils/video";
import { linkSelectorType } from "./schemaTypes/utils/link-selector/linkSelector";
import { richTextType } from "./schemaTypes/utils/richText";
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
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document Types
    pageAboutType,
    testimonialType,
    pageContactType,
    filesType,

    // Plugin Types
    stringRichtextButtonType,
    stringRichtextButtonsType,
    stringRichtextType,
    stringRichtextButtonMediaType,
    stringRichtextButtonImagesType,
    mediaType,

    // Utility Types
    customImageType,
    videoType,
    linkSelectorType,
    richTextType,
  ],
};
