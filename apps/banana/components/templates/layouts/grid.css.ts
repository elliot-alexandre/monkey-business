import { style, styleVariants } from '@vanilla-extract/css';
import { DIRECTION } from '../../../types';

export const LayoutGrid = style({
  width: '100%',
  display: 'grid',
});

export const LayoutDirection: Record<DIRECTION, string> = styleVariants({
  row: {
    gridAutoFlow: 'row',
  },
  columns: {
    gridAutoFlow: 'column',
  },
});
