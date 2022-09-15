import React, { CSSProperties } from 'react';

export type AsTypes = keyof React.ReactHTML | keyof React.ReactSVG;

/**
 * Base props that components can handle
 */
export type PrimitiveProps<As extends AsTypes = 'div'> = Partial<{
  as: As;

  AsElement: React.ReactNode;

  id: string;

  className: string;

  classNames: (string | null | undefined | boolean)[];

  style: CSSProperties;
}> &
  // 'ref' points to the legacy ref so we remove it
  Omit<JSX.IntrinsicElements[As], 'ref'>;
