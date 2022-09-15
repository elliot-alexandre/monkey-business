/* eslint-disable react/display-name */

import React, { HTMLAttributes } from 'react';
import {
  SUBTITLE_SIZE,
  TEXT_VARIANT_STYLE,
  VARIANT_COLORS,
} from '../../types/atoms.types';
import { PrimitiveProps } from '../../types/primitive.types';
import { getMergedClass } from '../../utils/components.utilities';
import { Subtitles, Variants } from './subtitle.css';

type Props = PrimitiveProps<any> &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: SUBTITLE_SIZE;
    variantStyle?: TEXT_VARIANT_STYLE;
    variantColor?: VARIANT_COLORS;
  };

const defaultProps: Props = {
  variantColor: VARIANT_COLORS.primary,
  variant: SUBTITLE_SIZE.sublarge,
  children: 'Subtitle',
};

export const Subtitle: React.FC<Props> = React.memo(
  ({
    variant,
    variantStyle,
    variantColor = VARIANT_COLORS.primary,
    className,
    as,
    ...props
  }) => {
    const type = as ? as : 'div';

    const classNames = getMergedClass([
      className,
      Subtitles,
      /**
       * @todo add style for text color and responsive
       */
      Variants[variant ? variant : (defaultProps.variant as SUBTITLE_SIZE)],
    ]);

    return React.createElement(type, {
      className: classNames,
      ...props,
    });
  }
);
