/* eslint-disable react/display-name */

import React, { HTMLAttributes } from 'react';
import {
  PARAGRAPH_SIZE,
  TEXT_VARIANT_STYLE,
  VARIANT_COLORS,
} from '../../types/atoms.types';
import { PrimitiveProps } from '../../types/primitive.types';
import { getMergedClass } from '../../utils/components.utilities';
import { Paragraphs, Variants } from './paragraph.css';

type Props = PrimitiveProps<any> &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: PARAGRAPH_SIZE;
    variantStyle?: TEXT_VARIANT_STYLE;
    variantColor?: VARIANT_COLORS;
  };

const defaultProps: Props = {
  variantColor: VARIANT_COLORS.primary,
  variant: PARAGRAPH_SIZE.medium,
  children: 'Paragraph',
};

export const Paragraph: React.FC<Props> = React.memo(
  ({
    variant,
    variantStyle,
    variantColor = VARIANT_COLORS.primary,
    className,
    as,
    ...props
  }) => {
    const type = as ? as : 'p';
    const classNames = getMergedClass([
      className,
      Paragraphs,
      /**
       * @todo add style for text color and responsive
       */
      Variants[variant ? variant : (defaultProps.variant as PARAGRAPH_SIZE)],
    ]);

    return React.createElement(type, {
      className: classNames,
      ...props,
    });
  }
);
