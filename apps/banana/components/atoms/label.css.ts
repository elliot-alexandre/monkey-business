import { style } from "@vanilla-extract/css";

export const label = style({
  fontFamily: "roc-grotesk, sans-serif",
  fontWeight: 400,
  color: "#FFFFFF",
  fontSize: "14px",
  lineHeight: "16.41px",

  "::selection": {
    background: "white",
    color: "black",
  },
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px",
      lineHeight: "16.41px",
    },

    "screen and (min-width: 2560px)": {
      fontSize: "19px",
    },
  },
});
