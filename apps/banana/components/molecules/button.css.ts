import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';

export const Variants: any = styleVariants({
  small: {},
  medium: {
    width: 'fit-content',
    background: vars.color.radialGradientButton,
    // border: '1px solid #DCDCDC',
    borderRadius: '25px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontFamily: 'roc-grotesk-wide',
    fontWeight: 500,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: '10px',
    lineHeight: '17.28px',
    minWidth: '141px',
    '::selection': {
      background: 'white',
      color: 'black',
    },

    '@media': {
      'screen and (min-width: 390px)': {
        fontSize: '14px',
        lineHeight: '20.16px',
        padding: '8px 19px',
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

    // transition: "all .5s ease",
    // selectors: {
    //   "&:not(.disable):hover": {
    //     backgroundColor: "#FFFFFF20",
    //     color: "#FFFFFF",
    //   },
    // },

    position: 'relative',
    overflow: 'hidden',
  },
  large: {},
  xLarge: {},
});
export const VariantStyle: any = styleVariants({
  darkBackground: {
    background: vars.color.radialGradientButton,
    color: vars.color.secondaryWhite,
    position: 'relative',
    zIndex: 1,
    '::before': {
      content: '',
      background: vars.color.radialGradientButtonHover,
      transition: 'opacity 0.4s ease',
      opacity: 0,
      zIndex: -1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    selectors: {
      '&:hover::before': {
        opacity: 1,
      },
    },
  },
  lightBackground: {
    background: vars.color.secondaryWhite,
    color: vars.color.primaryBlue,
  },
});

export const ButtonType: any = styleVariants({
  link: {},
  button: {
    transition: 'all .5s ease',
    selectors: {
      '&:not(.disable):hover': {
        backgroundColor: '#FFFFFF20',
        color: '#FFFFFF',
      },
    },
  },
});
