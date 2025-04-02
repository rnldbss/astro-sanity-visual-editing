# Sanity Studio

This directory contains the configuration and schema definitions for the project's CMS.

**Directory Structure**

```
sanity/
│   deskStructure.js    # Studio navigation structure
│   index.ts            # Schema entry point
│   README.md
│
└───schemaTypes/        # All content schemas
    ├───documents/      # Main content types
    │   ├───components/
    │   ├───contact/
    │   ├───home/
    │   └───portfolio/
    │
    ├───plugins/        # Reusable field configurations
    └───utils/          # Base schemas and configurations
```

- `deskStructure.js` - Configures the Sanity Studio navigation and content organization
- `index.ts` - Entry point that imports and exports all schema types

## Studio Structure

The content in Sanity Studio is organized using a custom desk structure (`deskStructure.js`):

### Navigation

1. **Home** - Single document type for the home page
2. **Projects** - Nested structure containing:
   - Projects Page - Configuration for the portfolio listing
   - Projects List - Orderable list of individual projects
3. **Contact** - Single document type for contact information

### Features

- Uses `@sanity/orderable-document-list` for drag-and-drop project ordering

## Usage

All schemas are imported and exported through the `index.ts` file, which is the entry point for Sanity Studio configuration. The desk structure (`deskStructure.js`) determines how these schemas are organized and displayed in the Sanity Studio UI.

---

For more information about Sanity Studio configuration visit [Sanity documentation](https://www.sanity.io/docs).
