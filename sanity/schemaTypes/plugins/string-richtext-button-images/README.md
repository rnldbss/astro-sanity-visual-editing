# Text, Rich Text, Button and Images

Content block with a title, rich text content, call-to-action button, and a grid of images.

## Fields

- `string` (`string`): Heading or title text
- `contentBlock` (`richText`): Formatted content with styling options
- `button` (`linkSelector`): Call-to-action button link
- `images` (`array` of `customImage`): One or more images displayed in a grid layout

## Typical Use Cases

- Image galleries with descriptive text and a call-to-action
- Section headers with supporting visuals and links
- Product or portfolio showcases
- Media-rich landing page blocks with context and interactivity

## Query Example

```groq
*[_type == 'document_name'] {
  field_name {
    string,
    contentBlock,
    button {
      href,
      text
    },
    images[] {
      alt,
      asset->
    }
  }
}
```
