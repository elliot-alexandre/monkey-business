/* eslint-disable react/display-name */

import React, { HTMLAttributes } from 'react';
import { PrimitiveProps } from '../../../types/primitive.types';
import * as styles from './center.css';

type Props = PrimitiveProps<any> & HTMLAttributes<HTMLElement>;

export const Center: React.FC<Props> = React.memo(({ ...props }) => {
  const className = styles.Center;

  return React.createElement('div', {
    className: className,
    ...props,
  });
});
