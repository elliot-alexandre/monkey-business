import React, { HTMLAttributes } from 'react';
import { PrimitiveProps } from '../../../types/primitive.types';
import { getMergedClass } from '../../../utils/components.utilities';
import * as styles from './container.css';

type Props = PrimitiveProps<any> & HTMLAttributes<HTMLElement>;

export const Container: React.FC<Props> = React.memo(
  ({ className, ...props }) => {
    const classNames = getMergedClass([className, styles.Container]);

    return React.createElement('div', {
      className: classNames,
      ...props,
    });
  }
);
