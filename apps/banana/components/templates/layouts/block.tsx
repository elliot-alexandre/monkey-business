/* eslint-disable react/display-name */

import React, { HTMLAttributes } from 'react';
import { PrimitiveProps } from '../../../types/primitive.types';
import { DefaultBlock } from './block.css';

type Props = PrimitiveProps<any> & HTMLAttributes<HTMLElement>;

export const Block: React.FC<Props> = React.memo(({ ...props }) => {
  const className = DefaultBlock;

  return React.createElement('div', {
    className: className,
    ...props,
  });
});
