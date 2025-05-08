# Query Example

```groq
*[_type == 'document_name'] {
    field_name {
      string,
      contentBlock,
      buttons[] {
        _key,
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
      testimonial-> {
        name,
        info,
        body,
        image {
          alt,
          crop,
          hotspot,
          asset->
        }
      },
      media {
        mediaType,
        image {
          alt,
          asset->
        },
        video {
          videoMp4 { asset-> },
          videoWebm { asset-> }
        }
      }
    },
}
```
