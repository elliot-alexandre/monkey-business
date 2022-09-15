/* eslint-disable react/display-name */

import React from 'react';

type Props = any;

export const HamburgerMenu: React.FC<Props> = (props) => {
  return (
    <svg
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="0.5" x2="17" y2="0.5" stroke="white" />
      <line y1="5.5" x2="17" y2="5.5" stroke="white" />
      <line y1="10.5" x2="17" y2="10.5" stroke="white" />
    </svg>
  );
};
