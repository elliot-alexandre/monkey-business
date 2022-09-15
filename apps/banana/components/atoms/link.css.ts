import { styleVariants } from '@vanilla-extract/css';
import { BREAKPOINT, LINK_TYPE_MOLECULE } from '../../types';

export const Variants: any = styleVariants({
  small: {},
  medium: {
    width: 'fit-content',

    backgroundColor: '#00000000',
    padding: '8px 6px',
    cursor: 'pointer',
    fontFamily: 'roc-grotesk-wide',
    fontWeight: 500,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: '10px',
    lineHeight: '17.28px',

    '::selection': {
      background: 'white',
      color: 'black',
    },

    '@media': {
      'screen and (min-width: 390px)': {
        fontSize: '14px',
        lineHeight: '20.16px',
        padding: '8px 8px',
      },
      'screen and (min-width: 768px)': {
        fontSize: '14px',
        lineHeight: '20.16px',
      },
      'screen and (min-width: 1336px)': {
        fontSize: '14px',
        lineHeight: '20.16px',
      },
      'screen and (min-width: 1600px)': {
        fontSize: '14px',
        lineHeight: '20.16px',
      },
      'screen and (min-width: 2560px)': {
        fontSize: '16px',
        lineHeight: '27.36px',
      },
    },

    position: 'relative',
    overflow: 'hidden',
  },
  large: {
    width: 'fit-content',

    backgroundColor: '#00000000',
    padding: '8px 6px',
    cursor: 'pointer',
    fontFamily: 'roc-grotesk',
    fontWeight: 700,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: '16px',
    lineHeight: '23.04px',

    '::selection': {
      background: 'white',
      color: 'black',
    },

    '@media': {
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: '16px',
        lineHeight: '23.04px',
        fontWeight: 700,
        padding: '8px 8px',
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: '16px',
        lineHeight: '23.04px',
        fontWeight: 700,
        padding: '8px 8px',
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: '16px',
        lineHeight: '23.04px',
        fontWeight: 700,
      },
      [`screen and (min-width: ${BREAKPOINT.desktopSmall}px)`]: {
        fontSize: '16px',
        lineHeight: '23.04px',
        fontWeight: 700,
      },
      [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
        fontSize: '16px',
        lineHeight: '23.04px',
        fontWeight: 700,
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
        fontSize: '16px',
        lineHeight: '23.04px',
        fontWeight: 700,
      },
    },

    position: 'relative',
    overflow: 'hidden',
  },
  xLarge: {},
});

export const VariantType: Record<LINK_TYPE_MOLECULE, string> = styleVariants({
  underline: {
    textDecoration: 'underline',
  },
  default: {},
});

export const LinkType: any = styleVariants({
  link: {
    transition: 'all .5s ease',
    selectors: {
      '&:not(.disable):hover': {
        backgroundColor: '#FFFFFF20',
        color: '#FFFFFF',
      },
    },
  },
});
