import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export enum SECTION_TYPE {
  BANNER_DEFAULT = 'bannerDefault',
  BANNER_STACK_OFFSET = 'bannerStackOffset',
  BANNER_STACK_CASCADE = 'bannerStackCascade',
  BANNER_STACK_GRID = 'bannerStackGrid',
  BANNER_BLOG_POST = 'bannerBlogPost',
  SWITCHER = 'switcher',
  ROLLING_BAR_CLIENT = 'rollingBarClient',
  ROLLING_BAR_TEAM = 'rollingBarTeam',
  QUOTE_GRADIANT = 'quoteGradiant',
  SLIDER_PRESENTATION = 'sliderPresentation',
  STACK_OFFSET = 'stackOffset',
  MASONRY_OFFSET = 'masonryOffset',
  MASONRY_UNITED = 'masonryUnited',
  ACCORDION_EXPENDABLE = 'accordionExpendable',
  ACCORDION_LINKS = 'accordionLinks',
  SLIDER_POSTS = 'sliderPosts',
  TABLE_OF_ENTRIES = 'tableOfEntries',
}

export enum LINK_TYPE {
  EXTERNAL_URL = 'EXTERNAL_URL',
  INTERNAL_PAGE = 'INTERNAL_PAGE',
}

export enum VARIANTS {
  primary = 'primary',
  primaryReversed = 'primaryReversed',
  secondary = 'secondary',
  secondaryReversed = 'secondaryReversed',
  tertiary = 'tertiary',
  tertiaryReversed = 'tertiaryReversed',
}

export enum BlockType {
  text = 'text',
  image = 'image',
  imageBackground = 'imageBackground',
  video = 'video',
  carousel = 'carousel',
}

export type PageCollection = {
  pageCollection: { items: Page[] };
};

export type Page = {
  name: string;
  title?: string;
  slug: string;
  description?: string;
  sys: {
    id: string;
  };
  sectionsCollection?: Sections;
};

export type Sections = {
  items: Section[];
};

export type Blocks = {
  items: Block[];
};

export type Section = {
  name: string;
  description: String;
  type: SECTION_TYPE;
  variant: VARIANTS;
  blocksCollection: Blocks;
};

export type Block = {
  name: string;
  type: BlockType;
  variant: VARIANTS;
  number?: number;
  text?: string | any[] | MDXRemoteSerializeResult<Record<string, unknown>>[];
  linksCollection?: Links;
  media: { name: string; mediasCollection: MediasCollection };
};
export type MediasCollection = {
  items: Media[];
};
export type Media = {
  title: string;
  description: string;
  fileName: string;
  size: string;
  url: string;
  width: number;
  height: number;
};

export type Links = {
  items: Link[];
};

export type Link = {
  type: LINK_TYPE;
  name: string;
  url?: string;
  page?: {
    name: string;
    slug: string;
  };
};
