# String with richText block

String with a rich text block, useful for headings with accompanying detailed content.

## Fields

- `string` (string): A short text field, typically used for headings or labels
- `contentBlock` (richText): A rich text block supporting formatted content, links, and other rich text features

## Typical Use Cases

- Section headings with descriptive paragraphs
- FAQ items (question in string, answer in richText)
- Product feature titles with detailed descriptions
- Anywhere you need a label/title with formatted content

## Query Example

```groq
*[_type == 'document_name'] {
    fieldName {
        string,
        contentBlock
    }

}
```
