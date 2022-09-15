import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';
import { PARAGRAPH_SIZE } from '../../types/atoms.types';
import { BREAKPOINT } from '../../types/viewport.types';

export const Paragraphs = style({
  fontFamily: 'roc-grotesk',
  fontStyle: 'normal',
  fontWeight: 400,

  '::selection': {
    background: 'white',
    color: 'black',
  },
});

export const Variants: Record<PARAGRAPH_SIZE, string> = styleVariants({
  large: {
    color: vars.color.primary,
    fontSize: '24px',
    lineHeight: '28.8px',
    fontFamily: 'roc-grotesk',
    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '24px',
        lineHeight: '28.8px',
        letterSpacing: '-1px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '24px',
        lineHeight: '28.8px',
        letterSpacing: '-1px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '24px',
        lineHeight: '28.8px',
        letterSpacing: '-1px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopSmall}px)`]: {
        fontSize: '24px',
        lineHeight: '28.8px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
        fontSize: '24px',
        lineHeight: '28.8px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
        fontSize: '24px',
        lineHeight: '28.8px',
      },
    },
  },
  medium: {
    color: vars.color.primary,
    fontSize: '16px',
    lineHeight: '19.2px',
    fontWeight: 400,
    fontFamily: 'roc-grotesk',
    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '16px',
        lineHeight: '19.2px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '16px',
        lineHeight: '19.2px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '16px',
        lineHeight: '19.2px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopSmall}px)`]: {
        fontSize: '18px',
        lineHeight: '21.6px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
        fontSize: '18px',
        lineHeight: '21.6px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
        fontSize: '18px',
        lineHeight: '21.6px',
      },
    },
  },
  small: {
    color: vars.color.primary,
    fontSize: '14px',
    lineHeight: '19.6px',
    fontFamily: 'roc-grotesk',
    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '14px',
        lineHeight: '19.6px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '14px',
        lineHeight: '19.6px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '14px',
        lineHeight: '19.6px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopSmall}px)`]: {
        fontSize: '16px',
        lineHeight: '22.4px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
        fontSize: '16px',
        lineHeight: '22.4px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
        fontSize: '16px',
        lineHeight: '22.4px',
      },
    },
  },
  overtext: {
    color: vars.color.primary,
    fontSize: '12px',
    lineHeight: '16.8px',
    fontFamily: 'roc-grotesk',
    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '12px',
        lineHeight: '16.8px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '12px',
        lineHeight: '16.8px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '12px',
        lineHeight: '16.8px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopSmall}px)`]: {
        fontSize: '12px',
        lineHeight: '16.8px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
        fontSize: '12px',
        lineHeight: '16.8px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
        fontSize: '12px',
        lineHeight: '16.8px',
      },
    },
  },
  table: {
    fontFamily: 'roc-grotesk',
    fontStyle: 'Regular',
    textAlign: 'left',

    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
        fontSize: '16px',
        lineHeight: '22px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
  },
  tableBold: {
    fontFamily: 'roc-grotesk',
    fontStyle: 'Bold',
    textAlign: 'left',
    letterSpacing: ' -3%',

    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
        fontSize: '16px',
        lineHeight: '19px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
        fontSize: '16px',
        lineHeight: '19px',
      },
    },
  },
});
