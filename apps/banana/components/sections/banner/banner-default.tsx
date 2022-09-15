import { MDXRemote } from 'next-mdx-remote';
import React, { HTMLAttributes } from 'react';
import { useTracked } from '../../../providers/viewport.provider';
import { HEADING_SIZE, Section } from '../../../types';
import { PrimitiveProps } from '../../../types/primitive.types';
import { Paragraph } from '../../atoms';
import { Heading } from '../../atoms/heading';
import { Block, Container } from '../../templates';
import * as styles from './banner-default.css';

type Props = PrimitiveProps<any> &
  HTMLAttributes<HTMLElement> & { sectionProps?: Section };

export const BannerDefault: React.FC<Props> = ({ sectionProps, ...props }) => {
  const [currentViewport, setCurrentViewport] = useTracked();

  const components: any = {
    h1: (props: any) => <Heading variant={HEADING_SIZE.h1} {...props} />,
    p: (props: any) => <Paragraph {...props} />,
  };
  const blockContent = sectionProps?.blocksCollection.items;
  const title = blockContent?.[0].text?.[0];
  const paragrap = blockContent?.[0].text?.[1];

  return (
    <Container className={styles.SectionContainer}>
      <Block className={styles.ContentContainer}>
        <Block>
          <MDXRemote {...title} components={components} />
        </Block>
      </Block>
    </Container>
  );
};
