import { style } from '@vanilla-extract/css';

export const OrganismeNavbar = style({
  position: 'sticky',
  zIndex: 9998,
  top: '0',
  left: '0',
  display: 'grid',
  width: '100%',
  height: '100%',
  margin: '0 auto',
  justifyContent: 'center',
});

export const ContainerGridNavBar = style({
  margin: '0 auto',
});

export const GridNavBar = style({
  justifyContent: 'space-between',
});
