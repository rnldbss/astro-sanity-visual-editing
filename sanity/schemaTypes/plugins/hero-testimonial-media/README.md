# Hero with Text, Block of Text, Buttons, Testimonial and Media

Complete content block with heading, rich text, call-to-action buttons, testimonial reference, and media support.

## Fields

- `string` (`string`): Heading or title text
- `contentBlock` (`richText`): Formatted content with styling options
- `button` (`array` of `linkSelector`): Up to two call-to-action buttons
- `testimonial` (`reference`): Link to a testimonial document
- `media` (`media`): Image or video content (selectable via radio button)

## Typical Use Cases

- Hero sections featuring testimonials, media, and rich content
- Landing pages that require social proof along with a call-to-action
- Marketing sections that combine visuals, quotes, and CTAs
- Multimedia blocks with narrative and customer voice

## Query Example

```groq
*[_type == 'document_name'] {
  field_name {
    string,
    contentBlock,
    button[] {
      href,
      text
    },
    testimonial-> {
      name,
      quote,
      image
    },
    media {
      mediaType,
      image { alt, asset-> },
      video {
        videoMp4 { asset-> },
        videoWebm { asset-> }
      }
    }
  }
}
```
