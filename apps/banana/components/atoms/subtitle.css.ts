import { style, styleVariants } from '@vanilla-extract/css';
import { SUBTITLE_SIZE } from '../../types/atoms.types';
import { BREAKPOINT } from '../../types/viewport.types';

export const Subtitles = style({
  fontFamily: 'roc-grotesk, sans-serif',
  fontWeight: 400,
  '::selection': {
    background: 'white',
    color: 'black',
  },
});

export const Variants: Record<SUBTITLE_SIZE, string> = styleVariants({
  sublarge: {
    fontSize: '20px',
    lineHeight: '24px',
    fontFamily: 'roc-grotesk',
    fontWeight: 400,
    letterSpacing: '-3%',

    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '24px',
        lineHeight: '28.8px',
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
        fontSize: '40px',
        lineHeight: '48px',
      },
    },
  },
  sublargelight: {
    fontSize: '20px',
    lineHeight: '24px',
    fontFamily: 'roc-grotesk',
    fontWeight: 400,
    letterSpacing: '-0.03em',

    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '24px',
        lineHeight: '28.8px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopSmall}px)`]: {
        fontSize: '40px',
        lineHeight: '48px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
        fontSize: '40px',
        lineHeight: '48px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
        fontSize: '40px',
        lineHeight: '48px',
      },
    },
  },
  sub: {
    fontSize: '18px',
    lineHeight: '21.6px',
    fontFamily: 'roc-grotesk',
    fontWeight: 400,
    letterSpacing: '-0.03em',

    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '18px',
        lineHeight: '21.6px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '18px',
        lineHeight: '21.6px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '18px',
        lineHeight: '21.6px',
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
  sublight: {
    fontSize: '18px',
    lineHeight: '21.6px',
    fontFamily: 'roc-grotesk',
    fontWeight: 300,
    letterSpacing: '-0.03em',

    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '18px',
        lineHeight: '21.6px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '18px',
        lineHeight: '21.6px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '18px',
        lineHeight: '21.6px',
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
});
