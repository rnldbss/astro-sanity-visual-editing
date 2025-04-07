import type { PortableTextBlock } from "sanity";

// Rich text types
export type { PortableTextBlock } from "sanity";

// Media types - image and video
export interface SanityImage {
  _type: "image" | "customImage";
  alt?: string;
  asset: {
    _ref: string;
    _type: "reference";
    url?: string;
  };
}

export interface SanityVideo {
  videoMp4?: { asset: { url: string } };
  videoWebm?: { asset: { url: string } };
}

export type MediaType = "image" | "video";

export interface ImageMedia {
  mediaType: "image";
  image: SanityImage;
  video?: undefined;
}

export interface VideoMedia {
  mediaType: "video";
  video: SanityVideo;
  image?: undefined;
}

export type Media = ImageMedia | VideoMedia;

// Button types
export interface SanityLink {
  _key?: string;
  enableButton: boolean;
  linkType: "internal" | "external" | "download";
  linkText: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"; 
  externalUrl?: string | null;
  internalLink?: string | null;
  downloadFile?: {
    file: {
      asset: {
        url: string;
      };
    };
  } | null;
}

// Testimonial types
export interface Testimonial {
  name: string;
  info: string;
  body: PortableTextBlock[];
  image: SanityImage | null;
}
