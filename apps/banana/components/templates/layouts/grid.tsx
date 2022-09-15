/* eslint-disable react/display-name */

import React, { HTMLAttributes } from 'react';
import { DIRECTION } from '../../../types/layouts.types';
import { PrimitiveProps } from '../../../types/primitive.types';
import { getMergedClass } from '../../../utils/components.utilities';
import { LayoutDirection, LayoutGrid } from './grid.css';

type Props = PrimitiveProps<any> &
  HTMLAttributes<HTMLElement> & {
    direction?: DIRECTION;
    gap?: string[];
  };

const defaultProps: Props = {
  direction: DIRECTION.row,
};

export const Grid: React.FC<Props> = React.memo(
  ({ direction, className, ...props }) => {
    const classNames = getMergedClass([
      className,
      LayoutDirection[
        direction ? direction : (defaultProps.direction as DIRECTION)
      ],
      LayoutGrid,
    ]);

    return React.createElement('div', {
      className: classNames,
      ...props,
    });
  }
);
