# Media Block

Flexible media component allowing selection between image or video content.

## Fields

- `mediaType` (radio): Choose between "Image" or "Video"
- `image` (customImage): Image asset with alt text (shown when Image selected)
- `video` (object): Video files in WebM and MP4 formats (shown when Video selected)

## Typical Use Cases

- Hero sections with optional video backgrounds
- Product galleries supporting both media types
- Content blocks requiring flexible media options
- Anywhere you need image or video content

## Query Example

```groq
*[_type == 'document_name'] {
    field_name {
        mediaType,
        image { alt, asset-> },
        video { videoMp4 { asset-> }, videoWebm { asset-> } }
    }
}
```
