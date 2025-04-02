# Text with Rich Text and Button

Content block combining a text heading, rich text content, and optional button.

## Fields

- `string` (string): Heading or title text
- `contentBlock` (richText): Formatted content with styling options
- `button` (linkSelector): Optional button link (hidden by default)

## Typical Use Cases

- Call-to-action sections with supporting text
- Feature highlights with action buttons
- Promotional content blocks
- Content sections requiring a clear next step

## Query Example

```groq
*[_type == 'document_name'] {
    field_name {
        string,
        contentBlock,
        button { href, text }
    }
}
```
