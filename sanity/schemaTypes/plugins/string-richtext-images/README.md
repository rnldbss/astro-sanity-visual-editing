# Text, Rich Text, Button and Images array

Content block combining text, formatted content, and multiple images.

## Fields

- `string` (string): heading/title text
- `contentBlock` (richText): Formatted content with styling options
- `button` (linkSelector): Optional call-to-action button
- `images` (array): Collection of images (uses customImage type)

## Typical Use Cases

- Product showcases with description and multiple images
- Gallery sections with supporting text
- Portfolio items with detailed descriptions
- Content sections requiring multiple visual examples

## GROQ Query Examples

### Basic Query

```groq
*[_type == 'page'] {
  contentBlocks[] {
    string,
    contentBlock,
    button { href, text },
    images[] {
      alt,
      asset->
    }
  }
}
```
