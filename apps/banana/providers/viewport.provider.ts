import { debounce } from 'lodash';
import React, { useState } from 'react';
import { createContainer } from 'react-tracked';
import { BREAKPOINT, VIEWPORT } from '../types/viewport.types';

declare let window: Window | undefined;

export const useValue: any = () => {
  const windowPage = typeof window !== 'undefined' && window;

  windowPage ? windowPage.innerWidth : 768;

  const [width, setWidth]: any = useState(windowPage);

  function getViewport() {
    if (
      // @ts-ignore
      windowPage?.innerWidth !== undefined &&
      // @ts-ignore
      windowPage?.innerWidth < BREAKPOINT.tablet
    ) {
      return VIEWPORT.mobile;
    }
    if (
      // @ts-ignore
      windowPage?.innerWidth !== undefined &&
      // @ts-ignore
      windowPage?.innerWidth < BREAKPOINT.desktopXSmall
    ) {
      return VIEWPORT.tablet;
    } else if (
      // @ts-ignore
      windowPage?.innerWidth !== undefined &&
      // @ts-ignore
      windowPage?.innerWidth >= BREAKPOINT.desktopXSmall
    ) {
      return VIEWPORT.desktop;
    }
  }

  const [viewport, setViewport]: any = useState(getViewport());

  const handle = debounce(function handleWindowResize() {
    setWidth(windowPage ? windowPage.innerWidth : 768);
  }, 500);

  React.useEffect(() => {
    if (windowPage) {
      windowPage.addEventListener('resize', handle);
    }
    return () => {
      if (windowPage) {
        windowPage.removeEventListener('resize', handle);
      }
    };
  }, []);

  React.useEffect(() => {
    if (width !== undefined && width < BREAKPOINT.tablet) {
      setViewport(VIEWPORT.mobile);
    } else if (
      width !== undefined &&
      width < BREAKPOINT.desktopXSmall &&
      width >= BREAKPOINT.tablet
    ) {
      setViewport(VIEWPORT.tablet);
    } else if (width !== undefined && width >= BREAKPOINT.desktopXSmall) {
      setViewport(VIEWPORT.desktop);
    }
  }, [width]);

  return [viewport, setViewport];
};

export const { Provider, useTracked } = createContainer(useValue);
