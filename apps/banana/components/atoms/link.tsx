import React, { HTMLAttributes } from 'react';
import { BUTTON_SIZE, LINK_TYPE_MOLECULE } from '../../types/molecules.types';
import { PrimitiveProps } from '../../types/primitive.types';
import { getMergedClass } from '../../utils/components.utilities';
import { Variants, VariantType } from './link.css';

type Props = PrimitiveProps<any> &
  HTMLAttributes<HTMLButtonElement> & {
    variant?: BUTTON_SIZE;
    variantType?: LINK_TYPE_MOLECULE;
  };

const defaultProps: Props = {
  variant: BUTTON_SIZE.medium,
  variantType: LINK_TYPE_MOLECULE.default,
};

export const LinkMolecule: React.FC<Props> = React.forwardRef(
  ({ variant, variantType, isButton, className, href, ...props }, ref) => {
    const classNames = getMergedClass([
      className,
      Variants[variant ? variant : (defaultProps.variant as BUTTON_SIZE)],
      VariantType[
        variantType
          ? variantType
          : (defaultProps.variantType as LINK_TYPE_MOLECULE)
      ],
    ]);

    return React.createElement('div', {
      className: classNames,
      ref,
      ...props,
    });
  }
);
