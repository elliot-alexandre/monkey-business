import { TextColor, TextStyle } from './text-style.types';

export enum VARIANT_COLORS {
  primary = 'primary',
  primaryReverse = 'primaryReverse',
  secondary = 'secondary',
  secondarRyeverse = 'secondaryReverse',
  ternary = 'ternary',
  ternaryReverse = 'ternaryReverse',
}

export enum VARIANT_TEXT_COLORS {
  primary = 'primary',
  secondary = 'secondary',
  ternary = 'ternary',
  inversed = 'inversed',
}

export enum PARAGRAPH_SIZE {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export enum HEADING_SIZE {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  t1 = 't1',
  t2 = 't2',
}

export enum SUBTITLE_SIZE {
  sub = 'sub',
  sublarge = 'sublarge',
  sublargelight = 'sublargelight',
  sublight = 'sublight',
}

export enum TEXT_VARIANT_STYLE {
  normal = 'normal',
  light = 'light',
  body = 'body',
  italic = 'italic',
  bold = 'bold',
  uppercase = 'uppercase',
  boldUppercase = 'boldUppercase',
  italicBold = 'italicBold',
}

export enum TYPOGRAPHIC_STYLE {
  sans = 'sans',
  sansAlternate = 'sansAlternate',
  serif = 'serif',
  monospace = 'monospace',
}

export type Paragraphs<Override extends undefined | string = undefined> = {
  [key in PARAGRAPH_SIZE]: TextStyle<Override>;
};

export type Headings<Override extends undefined | string = undefined> = {
  [key in HEADING_SIZE]: TextStyle<Override>;
};

export type VariantsColor<Override extends undefined | string = undefined> = {
  [key in VARIANT_COLORS]: TextColor<Override>;
};
