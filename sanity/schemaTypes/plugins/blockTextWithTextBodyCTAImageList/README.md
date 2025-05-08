# Query Example

```groq
*[_type == 'document_name'] {
  field_name {
    string,
    stringRichtextButtonImageList[] {
      string,
      contentBlock,
      button {
        enableButton,
        variant,
        linkType,
        linkText,
        externalUrl,
        internalLink,
        downloadFile-> {
          file {
            asset-> {
              url
            }
          }
        }
      },
      image {
        alt,
        crop,
        hotspot,
        asset->
      }
    }
  }
}
```
