# Text, Block of Text, Button and Media List

Content block with a title followed by a list of sub-blocks, each including text, rich content, call-to-action button, and media.

## Fields

- `string` (`string`): Heading or title text
- `stringRichtextButtonImageList` (`array` of `stringRichtextButtonImage`): A list of sub-blocks, each containing a text string, rich content, button, and media (image or video)

## Typical Use Cases

- Sections that display multiple cards or items with media and CTAs
- Feature lists or service overviews with accompanying visuals
- Step-by-step guides with rich text and illustrations
- Marketing blocks where each entry has its own media and button

## Query Example

```groq
*[_type == 'document_name'] {
  field_name {
    string,
    stringRichtextButtonImageList[] {
      string,
      contentBlock,
      button { href, text },
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
}
```
