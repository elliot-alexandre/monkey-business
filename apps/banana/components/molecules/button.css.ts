import { styleVariants } from "@vanilla-extract/css";

export const Variants: any = styleVariants({
  small: {},
  medium: {
    width: "fit-content",
    borderRadius: "25px",
    padding: "8px 12px",
    cursor: "pointer",
    fontWeight: 500,
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "10px",
    lineHeight: "17.28px",
    minWidth: "141px",
    "::selection": {
      background: "white",
      color: "black",
    },

    "@media": {
      "screen and (min-width: 390px)": {
        fontSize: "14px",
        lineHeight: "20.16px",
        padding: "8px 19px",
      },
      "screen and (min-width: 768px)": {
        fontSize: "14px",
        lineHeight: "20.16px",
      },
      "screen and (min-width: 1336px)": {
        fontSize: "14px",
        lineHeight: "20.16px",
      },
      "screen and (min-width: 1600px)": {
        fontSize: "14px",
        lineHeight: "20.16px",
      },
      "screen and (min-width: 2560px)": {
        fontSize: "16px",
        lineHeight: "27.36px",
      },
    },

    position: "relative",
  },
  large: {},
  xLarge: {},
});
export const VariantStyle: any = styleVariants({});

export const ButtonType: any = styleVariants({
  link: {},
  button: {
    transition: "all .5s ease",
    selectors: {
      "&:not(.disable):hover": {
        backgroundColor: "#FFFFFF20",
        color: "#FFFFFF",
      },
    },
  },
});
