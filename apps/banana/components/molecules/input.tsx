import React, { HTMLAttributes } from 'react';
import { PrimitiveProps } from '../../types/primitive.types';
import { getMergedClass } from '../../utils/components.utilities';
import { MoleculesInput } from './input.css';

type Props = PrimitiveProps<any> & HTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = React.memo(({ className, ...props }) => {
  const classNames = getMergedClass([className, MoleculesInput]);

  return React.createElement('input', {
    className: classNames,
    ...props,
  });
});
