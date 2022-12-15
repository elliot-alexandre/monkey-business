import { style } from "@vanilla-extract/css";
import { BREAKPOINT } from "../../types/viewport.types";

export const MoleculesInput = style({
  "::selection": {
    background: "white",
    color: "black",
  },
  fontFamily: "-wide",
  fontWeight: "normal",
  height: "auto",
  width: "100%",

  "@media": {
    [`screen and (min-width: ${BREAKPOINT.mobileSmall}px)`]: {
      fontSize: "34px",
      width: "100%",
      "::placeholder": {
        fontSize: "34px",
        opacity: "0.34",
        mixBlendMode: "multiply",
        fontWeight: "500",
      },
    },
    [`screen and (min-width: ${BREAKPOINT.mobileLarge}px)`]: {
      fontSize: "34px",
      width: "100%",
      "::placeholder": {
        fontSize: "34px",
        opacity: "0.34",
        mixBlendMode: "multiply",
        fontWeight: "500",
      },
    },
    [`screen and (min-width: ${BREAKPOINT.desktopXSmall}px)`]: {
      fontSize: "32px",
      width: "100%",
      "::placeholder": {
        opacity: "0.34",
        mixBlendMode: "multiply",
        fontWeight: "500",
        fontSize: "32px",
      },
    },
    [`screen and (min-width: ${BREAKPOINT.desktopSmall}px)`]: {
      fontSize: "48px",
      width: "100%",
      "::placeholder": {
        opacity: "0.34",
        fontSize: "48px",
      },
    },
    [`screen and (min-width: ${BREAKPOINT.desktopMedium}px)`]: {
      fontSize: "48px",
      width: "100%",
      "::placeholder": {
        fontSize: "48px",
        opacity: "0.34",
        mixBlendMode: "multiply",
        fontWeight: "500",
      },
    },
    [`screen and (min-width: ${BREAKPOINT.desktopXLarge}px)`]: {
      fontSize: "60px",
      width: "100%",
      "::placeholder": {
        opacity: "0.34",
        fontWeight: "500",
        mixBlendMode: "multiply",
        fontSize: "60px",
      },
    },
  },
});
