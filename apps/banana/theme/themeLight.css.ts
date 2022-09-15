import { createTheme } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const themeLight = createTheme(vars, {
  color: {
    primary: 'null',
    primaryReversed: 'null',
    secondary: 'null',
    secondaryReversed: 'null',
    ternary: 'null',
    ternaryReversed: 'null',
  },
  text: {
    color: {
      primary: '#000000',
      secondary: '#C1BDBA',
      ternary: '#5E605C',
      inversed: '#FFFFFF',
    },
    font: {},
  },
});
