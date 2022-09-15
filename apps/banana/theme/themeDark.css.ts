import { createTheme } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const themeDark = createTheme(vars, {
  color: {
    primary: '#2E3532',
    primaryReversed: 'null',
    secondary: 'null',
    secondaryReversed: 'null',
    ternary: 'null',
    ternaryReversed: 'null',
  },
  text: {
    color: {
      primary: '#F5F4F4',
      secondary: '#C1BDBA',
      ternary: '#5E605C',
      inversed: '#FFFFFF',
    },
    font: {},
  },
});
