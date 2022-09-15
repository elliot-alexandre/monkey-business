import React, { HTMLAttributes } from 'react';
import { useTracked } from '../../providers/viewport.provider';
import { HEADING_SIZE, Section } from '../../types';
import { PrimitiveProps } from '../../types/primitive.types';
import { getMergedClass } from '../../utils/components.utilities';
import { Paragraph } from '../atoms';
import { Heading } from '../atoms/heading';
import { Block, Container } from '../templates';
import { VARIANTS } from './../../types/sections.types';
import * as styles from './switcher.css';
import { Variants } from './switcher.css';

type Props = PrimitiveProps<any> &
  HTMLAttributes<HTMLElement> & { sectionProps?: Section };

const defaultProps: Props = {
  Section: { variant: VARIANTS.primary },
};

export const Switcher: React.FC<Props> = ({ sectionProps, ...props }) => {
  const [currentViewport, setCurrentViewport] = useTracked();

  const components: any = {
    h1: (props: any) => <Heading variant={HEADING_SIZE.h1} {...props} />,

    p: (props: any) => <Paragraph {...props} />,
  };

  const classNames = getMergedClass([
    props.className,
    styles.SectionContainer,
    Variants[
      sectionProps?.variant
        ? sectionProps?.variant
        : (defaultProps.Section.variant as VARIANTS)
    ],
  ]);

  return (
    <Container className={classNames}>
      <Block className={styles.ContentContainer}></Block>
    </Container>
  );
};
