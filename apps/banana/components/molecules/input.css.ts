import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';
import { BREAKPOINT } from '../../types/viewport.types';

export const MoleculesInput = style({
  '::selection': {
    background: 'white',
    color: 'black',
  },
  fontFamily: 'roc-grotesk-wide',
  fontWeight: 'normal',
  color: vars.color.secondaryLightGrey,
  height: 'auto',
  width: '100%',

  '@media': {
    [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
      fontSize: '34px',
      width: '100%',
      '::placeholder': {
        fontSize: '34px',
        opacity: '0.34',
        mixBlendMode: 'multiply',
        fontWeight: '500',
        fontFamily: 'roc-grotesk-wide',
      },
    },
    [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
      fontSize: '34px',
      width: '100%',
      '::placeholder': {
        fontSize: '34px',
        opacity: '0.34',
        mixBlendMode: 'multiply',
        fontWeight: '500',
        fontFamily: 'roc-grotesk-wide',
      },
    },
    [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
      fontSize: '32px',
      width: '100%',
      '::placeholder': {
        opacity: '0.34',
        mixBlendMode: 'multiply',
        fontWeight: '500',
        fontSize: '32px',
        color: vars.color.primaryBlack,
      },
    },
    [`screen and (min-width: ${BREAKPOINT.desktopSmall}px)`]: {
      fontSize: '48px',
      width: '100%',
      '::placeholder': {
        opacity: '0.34',
        fontSize: '48px',
        color: vars.color.primaryBlack,
      },
    },
    [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
      fontSize: '48px',
      width: '100%',
      '::placeholder': {
        fontSize: '48px',
        opacity: '0.34',
        mixBlendMode: 'multiply',
        fontWeight: '500',
        color: vars.color.primaryBlack,
      },
    },
    [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
      fontSize: '60px',
      width: '100%',
      '::placeholder': {
        opacity: '0.34',
        fontWeight: '500',
        mixBlendMode: 'multiply',
        color: vars.color.primaryBlack,
        fontSize: '60px',
      },
    },
  },
});
