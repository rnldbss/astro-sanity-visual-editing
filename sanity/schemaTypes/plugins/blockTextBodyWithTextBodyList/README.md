## Query Example

```groq
*[_type == 'document_name'] {
    field_name {
        string,
        contentBlock,
        stringRichtextList[] {
          string,
          contentBlock
        }
    }
}
```
