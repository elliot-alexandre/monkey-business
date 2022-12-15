import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme/theme.css";
import { HEADING_SIZE, VARIANT_TEXT_COLORS } from "../../types/atoms.types";
import { BREAKPOINT } from "../../types/viewport.types";

export const Headings = style({});

export const Variants: Record<HEADING_SIZE, string> = styleVariants({
  h1: {
    fontFamily: "basis-grotesque-pro",
    fontStyle: "bold",
    fontWeight: 700,
    letterSpacing: "-0.03em",

    "@media": {
      [`screen and (min-width: ${BREAKPOINT.mobileXSmall}px)`]: {
        fontSize: "40px",
        lineHeight: "44px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: "40px",
        lineHeight: "44px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: "40px",
        lineHeight: "44px",
      },
      [`screen and (min-width: ${BREAKPOINT.tabletMedium}px)`]: {
        fontSize: "40px",
        lineHeight: "44px",
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: "60px",
        lineHeight: "66px",
      },
    },
  },

  h2: {
    fontFamily: "basis-grotesque-pro",
    fontStyle: "bold",
    fontWeight: 700,
    letterSpacing: "-0.03em",

    "@media": {
      [`screen and (min-width: ${BREAKPOINT.mobileXSmall}px)`]: {
        fontSize: "25px",
        lineHeight: "30px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: "25px",
        lineHeight: "30px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: "25px",
        lineHeight: "30px",
      },
      [`screen and (min-width: ${BREAKPOINT.tabletMedium}px)`]: {
        fontSize: "30px",
        lineHeight: "36px",
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: "40px",
        lineHeight: "48px",
      },
    },
  },
  h3: {
    fontFamily: "basis-grotesque-pro",
    fontStyle: "bold",
    fontWeight: 700,
    letterSpacing: "-0.03em",

    "@media": {
      [`screen and (min-width: ${BREAKPOINT.mobileXSmall}px)`]: {
        fontSize: "25px",
        lineHeight: "30px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: "25px",
        lineHeight: "30px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: "25px",
        lineHeight: "30px",
      },
      [`screen and (min-width: ${BREAKPOINT.tabletMedium}px)`]: {
        fontSize: "30px",
        lineHeight: "36px",
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: "40px",
        lineHeight: "48px",
      },
    },
  },
  h4: {
    fontFamily: "basis-grotesque-pro",
    fontStyle: "bold",
    fontWeight: 700,
    letterSpacing: "-0.03em",

    "@media": {
      [`screen and (min-width: ${BREAKPOINT.mobileXSmall}px)`]: {
        fontSize: "25px",
        lineHeight: "30px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: "25px",
        lineHeight: "30px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: "25px",
        lineHeight: "30px",
      },
      [`screen and (min-width: ${BREAKPOINT.tabletMedium}px)`]: {
        fontSize: "30px",
        lineHeight: "36px",
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: "40px",
        lineHeight: "48px",
      },
    },
  },
  t1: {
    fontFamily: "basis-grotesque-pro",
    fontStyle: "regular",
    fontWeight: 400,
    letterSpacing: "-0.02em",

    "@media": {
      [`screen and (min-width: ${BREAKPOINT.mobileXSmall}px)`]: {
        fontSize: "30px",
        lineHeight: "42px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: "30px",
        lineHeight: "42px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: "30px",
        lineHeight: "42px",
      },
      [`screen and (min-width: ${BREAKPOINT.tabletMedium}px)`]: {
        fontSize: "60px",
        lineHeight: "84px",
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: "80px",
        lineHeight: "112px",
      },
    },
  },
  t2: {
    fontFamily: "basis-grotesque-pro",
    fontStyle: "regular",
    fontWeight: 400,
    letterSpacing: "-0.02em",

    "@media": {
      [`screen and (min-width: ${BREAKPOINT.mobileXSmall}px)`]: {
        fontSize: "30px",
        lineHeight: "42px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
        fontSize: "30px",
        lineHeight: "42px",
      },
      [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
        fontSize: "30px",
        lineHeight: "42px",
      },
      [`screen and (min-width: ${BREAKPOINT.tabletMedium}px)`]: {
        fontSize: "60px",
        lineHeight: "84px",
      },
      [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
        fontSize: "80px",
        lineHeight: "112px",
      },
    },
  },
});

export const VariantColors: Record<VARIANT_TEXT_COLORS, string> = styleVariants(
  {
    primary: {
      color: vars.text.color.primary,
    },
    secondary: {
      color: vars.text.color.secondary,
    },
    ternary: {
      color: vars.text.color.ternary,
    },
    inversed: {
      color: vars.text.color.inversed,
    },
  }
);
