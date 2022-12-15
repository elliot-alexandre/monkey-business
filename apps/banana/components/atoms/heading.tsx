/* eslint-disable react/display-name */

import React, { HTMLAttributes } from "react";
import {
  HEADING_SIZE,
  TEXT_VARIANT_STYLE,
  VARIANT_TEXT_COLORS,
} from "../../types/atoms.types";
import { PrimitiveProps } from "../../types/primitive.types";
import { getMergedClass } from "../../utils/components.utilities";
import { Headings, VariantColors, Variants } from "./heading.css";

type Props = PrimitiveProps<any> &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: HEADING_SIZE;
    variantStyle?: TEXT_VARIANT_STYLE;
    variantColor?: VARIANT_TEXT_COLORS;
  };

const defaultProps: Props = {
  variantColor: VARIANT_TEXT_COLORS.primary,
  variant: HEADING_SIZE.h1,
  children: "Heading",
  displayName: "Heading",
};

export const Heading: React.FC<Props> = React.memo(
  ({
    variant,
    variantStyle,
    variantColor = VARIANT_TEXT_COLORS.primary,
    className,
    as,
    ...props
  }) => {
    let type: keyof JSX.IntrinsicElements;

    switch (variant) {
      case HEADING_SIZE.h1: {
        type = as ? as : "h1";
        break;
      }
      case HEADING_SIZE.h2: {
        type = as ? as : "h2";
        break;
      }
      case HEADING_SIZE.h3: {
        type = as ? as : "h2";
        break;
      }
      case HEADING_SIZE.h4: {
        type = as ? as : "h2";
        break;
      }
      case HEADING_SIZE.t1: {
        type = as ? as : "t1";
        break;
      }
      case HEADING_SIZE.t2: {
        type = as ? as : "t1";
        break;
      }

      default: {
        type = "h1";
        break;
      }
    }
    const classNames = getMergedClass([
      className,
      Headings,
      /**
       * @todo add style for text color and responsive
       */
      Variants[variant ? variant : (defaultProps.variant as HEADING_SIZE)],
      VariantColors[
        variantColor
          ? variantColor
          : (defaultProps.variantColor as VARIANT_TEXT_COLORS)
      ],
    ]);

    return React.createElement(type, {
      className: classNames,
      ...props,
    });
  }
);
