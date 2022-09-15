import React, { HTMLAttributes } from 'react';
import { useTracked } from '../../../providers/viewport.provider';
import { PrimitiveProps } from '../../../types/index';
import { Block } from '../../templates';
import * as styles from './mobile-menu.css';
type Props = PrimitiveProps<any> & HTMLAttributes<HTMLElement>;

export const MenuMobile: React.FC<Props> = React.memo(
  ({ handleButton, ...props }) => {
    const [currentViewport, setCurrentViewport] = useTracked();

    return <Block className={styles.ContainerMobileMenu}></Block>;
  }
);
