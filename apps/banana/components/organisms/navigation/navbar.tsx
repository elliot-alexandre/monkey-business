import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useTracked } from '../../../providers/viewport.provider';
import { DIRECTION, PrimitiveProps } from '../../../types/index';
import { Block, Grid } from '../../templates';
import * as styles from './navbar.css';
type Props = PrimitiveProps<any> & HTMLAttributes<HTMLElement>;

export const Navbar: React.FC<Props> = React.memo(
  ({ handleButton, ...props }) => {
    const router = useRouter();

    const [currentViewport, setCurrentViewport] = useTracked();

    const classNames = styles.OrganismeNavbar;

    const [newCurrentViewport, newSetCurrentViewport] = useState();

    useEffect(() => {
      newSetCurrentViewport(currentViewport as any);
    }, [currentViewport]);

    return (
      <Block className={classNames}>
        <nav className={styles.ContainerGridNavBar}>
          <Grid className={styles.GridNavBar} direction={DIRECTION.columns}>
            <Link href={`/`}>
              <a>
                <div></div>
              </a>
            </Link>
          </Grid>
        </nav>
      </Block>
    );
  }
);
