import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    primary: null,
    primaryReversed: null,
    secondary: null,
    secondaryReversed: null,
    ternary: null,
    ternaryReversed: null,
  },
  text: {
    color: {
      primary: null,
      secondary: null,
      ternary: null,
      inversed: null,
    },
    font: {},
  },
});
