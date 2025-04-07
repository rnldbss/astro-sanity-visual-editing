import { loadQuery } from "../../lib/sanity/load-query";
import type { QueryParams } from "sanity";
import type { HomePageData } from "../../types/queries/pageHome";

export async function fetchHomeData(params?: QueryParams) {
  const query = `*[_type == 'pageHome'][0]{
    hero {
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

    about {
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
          asset->
        },
        video {
          videoMp4 { asset-> },
          videoWebm { asset-> }
        }
      }
    },

    services {
      string,
      stringRichtextButtonImageList[] {
        _key,
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
          asset->
        }
      }
    },

    testimonialText {
      string,
      contentBlock
    },

    testimonials[]-> {
      name,
      info,
      body,
      image {
        alt,
        asset->
      }
    },

    process {
      string,
      contentBlock,
      stringRichtextList[] {
        string,
        contentBlock
      },
    },

    faq {
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
      stringRichtextList[] {
        string,
        contentBlock
      }
    },
  }`;

  return loadQuery<HomePageData>({ query, params });
}

