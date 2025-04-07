import type {
  Media,
  SanityLink,
  PortableTextBlock,
  Testimonial,
} from "../global";

// Hero section
export interface HeroBlock {
  string: string;
  contentBlock: PortableTextBlock[];
  buttons: SanityLink[] | null;
  testimonial: Testimonial | null;
  media: Media | null;
}

// About section
export interface AboutBlock {
  string: string;
  contentBlock: PortableTextBlock[];
  button: SanityLink | null;
  media: Media | null;
}

// Services list item
export interface ServicesItem {
  _key: string;
  string: string;
  contentBlock: PortableTextBlock[];
  button: SanityLink | null;
  image: {
    alt?: string;
    asset: {
      _ref?: string;
      _type?: string;
      url?: string;
    };
  } | null;
}

// Services block
export interface ServicesBlock {
  string: string;
  stringRichtextButtonImageList: ServicesItem[];
}

// Testimonial section (new)
export interface TestimonialSectionText {
  string: string;
  contentBlock: PortableTextBlock[];
}

// One item in the list of stringRichtext blocks
export interface StringRichtextItem {
  string: string;
  contentBlock: PortableTextBlock[];
}

// Process block
export interface ProcessBlock {
  string: string;
  contentBlock: PortableTextBlock[];
  stringRichtextList: StringRichtextItem[];
}

// FAQ block
export interface FAQBlock {
  string: string;
  contentBlock: PortableTextBlock[];
  button: SanityLink | null;
  stringRichtextList: StringRichtextItem[];
}


// Main homepage data
export interface HomePageData {
  hero: HeroBlock;
  about: AboutBlock;
  services: ServicesBlock;
  testimonialText: TestimonialSectionText;
  testimonials: Testimonial[];
  process: ProcessBlock;
  faq: FAQBlock;
}

