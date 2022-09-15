/* eslint-disable react/display-name */

import React, { HTMLAttributes } from 'react';
import { PrimitiveProps } from '../../types/primitive.types';
import { getMergedClass } from '../../utils/components.utilities';
import { label } from './label.css';

type Props = PrimitiveProps<any> & HTMLAttributes<HTMLHeadingElement>;

export const Label: React.FC<Props> = React.memo(
  ({ className, as, ...props }) => {
    const classNames = getMergedClass([className, label]);

    return React.createElement('label', {
      className: classNames,
      ...props,
    });
  }
);
