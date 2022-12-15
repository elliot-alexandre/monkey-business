/* eslint-disable react/display-name */

import { useRouter } from "next/router";
import { HTMLAttributes, useEffect, useState } from "react";
import { useTracked } from "../../providers/viewport.provider";
import { PrimitiveProps } from "../../types/primitive.types";
import { getMergedClass } from "../../utils/components.utilities";
import { Container } from "../templates";
import * as styles from "./footer.css";

type Props = PrimitiveProps<any> & HTMLAttributes<HTMLElement>;

export function Footer({ pageProps, footerProps, ...props }: any) {
  const [currentViewport, setCurrentViewport] = useTracked();
  const [newCurrentViewport, newSetCurrentViewport] = useState();
  const router = useRouter();

  const classNames = getMergedClass([props.className, styles.SectionContainer]);

  useEffect(() => {
    newSetCurrentViewport(currentViewport as any);
  }, [currentViewport]);

  return <>{footerProps && <Container className={classNames}></Container>}</>;
}
