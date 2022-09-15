import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';
import { VARIANTS } from '../../types/sections.types';

export const SectionContainer = style({
  width: '100%',
});

export const ContentContainer = style({
  display: 'grid',
  margin: '0 auto',
});

export const Variants: Record<VARIANTS, string> = styleVariants({
  primary: {
    backgroundColor: vars.color.primaryBlack,
  },
  primaryReversed: {
    backgroundColor: vars.color.tertiaryBCgrey,
  },
  secondary: {},
  secondaryReversed: {},
  tertiary: {},
  tertiaryReversed: {},
});
