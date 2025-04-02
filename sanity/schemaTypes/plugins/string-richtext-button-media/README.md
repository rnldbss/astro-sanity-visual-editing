# Text, Rich Text, Button and Media Block

Complete content block with text, formatted content, call-to-action button, and media.

## Fields

- `string` (string): Heading or title text
- `contentBlock` (richText): Formatted content with styling options
- `button` (linkSelector): Call-to-action button link
- `media` (media): Image or video content (selectable via radio button)

## Typical Use Cases

- Hero sections with text, button and background media
- Product showcases with description and action button
- Promotional content with multimedia and CTA
- Landing page sections with complete content elements

## Query Example

```groq
*[_type == 'document_name'] {
    field_name {
        string,
        contentBlock,
        button { href, text },
        media {
            mediaType,
            image { alt, asset-> },
            video { videoMp4 { asset-> }, videoWebm { asset-> } }
        }
    }
}
```
