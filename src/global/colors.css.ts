import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme("#root", {
  colors: {
    accent: "#fa9c4c",
    accentLight: "#fdc385",
    primary: "#795ccb",
    primaryDark: "#473191",
    primaryDarker: "#160948",
    dangerLight: "#fde8e7",
    danger: "#ca0906",
    dangerHover: "#fbd5d5",
    neutral: "#161e3e",
    neutralLight: "#f6f7fb",
    neutral10: "rgba(22, 30, 62, 0.1)",
    white: "#fff",
  },
  boxShadow: "0 4px 8px 0 rgba(22, 30, 62, 0.1)",
});
