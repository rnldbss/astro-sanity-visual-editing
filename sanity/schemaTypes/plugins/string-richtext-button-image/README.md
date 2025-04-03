# Text, Block of Text, Button and Image

Single content item featuring a title, formatted rich text, a call-to-action button, and an image.

## Fields

- `string` (`string`): Heading or title text
- `contentBlock` (`richText`): Formatted content with styling options
- `button` (`linkSelector`): Call-to-action button link
- `image` (`customImage`): Image content with alt text and asset reference

## Typical Use Cases

- Individual content cards with text and supporting imagery
- Steps or highlights within a sectioned list
- Promotional blurbs with CTA and image
- Reusable content blocks within a larger grouped section

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
    image {
      alt,
      asset->
    }
  }
}
```
