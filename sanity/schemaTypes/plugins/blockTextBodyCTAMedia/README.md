# Query Example

```groq
*[_type == 'document_name'] {
  field_name {
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
    media {
        mediaType,
        image {
          alt,
          crop,
          hotspot,
          asset->
        },
        video {
          videoMp4 { asset-> },
          videoWebm { asset-> }
        }
    }
  }
}
```
