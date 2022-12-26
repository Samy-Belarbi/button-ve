import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../global/colors.css";

export const btn = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "transparent",
    border: 0,
    borderRadius: 12,
    padding: "12px 24px",
    cursor: "pointer",

    ":hover": {
      boxShadow: vars.boxShadow,
    },

    selectors: {
      "&.disabled": {
        cursor: "not-allowed",
        opacity: 0.5,
        boxShadow: "none",
      },
    },
  },

  variants: {
    color: {
      accent: { color: vars.colors.primaryDarker },
      primary: { color: vars.colors.primary },
      danger: { color: vars.colors.danger },
      neutral: { color: vars.colors.neutral },
    },
    type: {
      raised: {},
      outlined: {
        border: `2px solid ${vars.colors.neutral10}`,
        color: vars.colors.neutral,
        selectors: {
          "&.active, &:active": {
            backgroundColor: vars.colors.neutralLight,
          },
        },
      },
      flat: {
        selectors: {
          "&.active, &:active, &:hover": {
            backgroundColor: vars.colors.neutralLight,
          },
        },
      },
    },
    iconOnly: {
      regular: { padding: 12 },
      slim: { padding: 0 },
    },
  },

  compoundVariants: [
    {
      variants: {
        color: "primary",
        type: "raised",
      },
      style: {
        backgroundColor: vars.colors.primary,
        color: vars.colors.white,
        selectors: {
          "&.active, &:active": {
            backgroundColor: vars.colors.primaryDark,
          },
        },
      },
    },
    {
      variants: {
        color: "accent",
        type: "raised",
      },
      style: {
        backgroundColor: vars.colors.accentLight,
        selectors: {
          "&.active, &:active": {
            backgroundColor: vars.colors.accent,
          },
        },
      },
    },
    {
      variants: {
        color: "danger",
        type: "raised",
      },
      style: {
        backgroundColor: vars.colors.dangerLight,
        selectors: {
          "&.active, &:active": {
            backgroundColor: vars.colors.dangerHover,
          },
        },
      },
    },
  ],
});
