import { globalFontFace, style } from "@vanilla-extract/css";

const mulish = "Mulish";

globalFontFace(mulish, {
  src: "EXAMPLE",
});

export const font = style({
  fontFamily: mulish,
  fontWeight: 700,
});
