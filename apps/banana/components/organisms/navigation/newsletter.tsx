import React, { HTMLAttributes, useState } from 'react';
import { useTracked } from '../../../providers/viewport.provider';
import { DIRECTION } from '../../../types';
import { PrimitiveProps } from '../../../types/primitive.types';
import { VARIANTS } from '../../../types/sections.types';
import { getMergedClass } from '../../../utils/components.utilities';
import { Button, Input } from '../../molecules';
import { Block, Container, Grid } from '../../templates';
import * as styles from './newsletter.css';

type Props = PrimitiveProps<any> & HTMLAttributes<HTMLElement>;

const defaultProps: Props = {
  Section: { variant: VARIANTS.primary },
};

export const Newsletter: React.FC<Props> = (props) => {
  const [currentViewport, currentWidth] = useTracked();

  const [email, setEmail] = useState();

  const classNames = getMergedClass([props.className, styles.SectionContainer]);

  return (
    <Container className={classNames}>
      <Block className={styles.Content}>
        <Block className={styles.ContentContainer}>
          <Grid direction={DIRECTION.row} className={styles.NewsLetterForm}>
            <Block>
              <Input
                value={email}
                onChange={() => console.log('changed')}
                onKeyDown={() => console.log('down')}
                placeholder="enter email"
              ></Input>
            </Block>
            <Block>
              <Button type="submit" onClick={() => console.log('submit')}>
                <span>Submit</span>
              </Button>
            </Block>
          </Grid>
        </Block>
      </Block>
    </Container>
  );
};
