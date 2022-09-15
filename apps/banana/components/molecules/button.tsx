import { AnimatePresence, motion } from 'framer-motion';
import React, { HTMLAttributes, useState } from 'react';
import { BUTTON_SIZE } from '../../types/molecules.types';
import { PrimitiveProps } from '../../types/primitive.types';
import { getMergedClass } from '../../utils/components.utilities';
import { ButtonType, Variants, VariantStyle } from './button.css';

type Props = PrimitiveProps<any> &
  HTMLAttributes<HTMLButtonElement> & {
    variant?: BUTTON_SIZE;
    variantStyle?: 'lightBackground' | 'darkBackground';
    isButton?: boolean;
  };

const defaultProps: Props = {
  variant: BUTTON_SIZE.medium,
  variantStyle: 'darkBackground',
  isButton: true,
};

export const Button: React.FC<Props> = ({
  variant,
  isButton,
  mobile,
  className,
  variantStyle,
  children,
  style,
  onClick,
  disabled,
  type,
  ...props
}) => {
  const classNames = getMergedClass([
    className,
    Variants[variant ? variant : (defaultProps.variant as BUTTON_SIZE)],
    ButtonType[isButton === true ? 'button' : 'link'],
    VariantStyle[
      variantStyle ? variantStyle : (defaultProps.variantStyle as any)
    ],
  ]);

  const [animationState, setAnimationState] = useState('init');

  const contentMotion = {
    beforeReturn: {
      opacity: 0,
      transition: { bounce: 0, duration: 0 },
    },
    return: {
      opacity: 0,
      left: '-100%',
      transition: { bounce: 0, duration: 0 },
    },
    beforeInit: {
      opacity: 1,
      transition: { bounce: 0, duration: 0 },
    },
    init: {
      opacity: 1,
      left: '0%',
      transition: { bounce: 0 },
    },
    mouseIn: {
      left: '60%',
    },
    mouseOut: {
      left: '200%',
    },
  };

  const onCompleted = () => {
    if (animationState === 'mouseOut') setAnimationState('beforeReturn');
    else if (animationState === 'beforeReturn') setAnimationState('return');
    else if (animationState === 'return') setAnimationState('beforeInit');
    else if (animationState === 'beforeInit') setAnimationState('init');
  };

  return (
    <AnimatePresence>
      <motion.button
        style={style}
        onClick={onClick}
        disabled={disabled}
        type={type}
        initial="init"
        onMouseEnter={() => {
          setAnimationState('mouseIn');
        }}
        onMouseLeave={() => {
          setAnimationState('mouseOut');
        }}
        onAnimationComplete={onCompleted}
        animate={animationState}
        className={classNames}
      >
        {mobile ? (
          children
        ) : (
          <motion.div
            style={{
              position: 'relative',
              verticalAlign: 'center',
            }}
            variants={contentMotion}
          >
            <div
              style={
                variantStyle === 'lightBackground'
                  ? {
                      position: 'absolute',
                      left: '-60%',
                      top: '10%',
                      verticalAlign: 'center',
                    }
                  : {
                      position: 'absolute',
                      left: '-60%',
                      top: '10%',
                      verticalAlign: 'center',
                    }
              }
            >
              <RightArrow
                light={variantStyle === 'lightBackground' ? true : false}
              />
            </div>
            {children}
          </motion.div>
        )}
      </motion.button>
    </AnimatePresence>
  );
};

const RightArrow: any = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4715 0H15.9004C16.7362 2.5334 18.6165 4.53912 21.302 6.125H0V7.875H21.302C18.6165 9.46088 16.7362 11.4666 15.9004 14H18.4715C19.2704 11.4215 20.6762 9.56589 24 7.58333V6.41667C20.6762 4.43411 19.2704 2.57849 18.4715 0Z"
        fill={props.light !== true ? 'white' : '#004AFF'}
      />
    </svg>
  );
};
