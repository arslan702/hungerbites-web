"use client";
import { createTheme } from "@mui/material/styles";

// assets
import colors from "../scss/_themes-vars.module.scss";

// project imports
import componentStyleOverrides from "./compStyleOverride";
import themePalette from "./palette";
import themeTypography from "./typography";

const color = colors;
const themeOption = {
  colors: color,
  heading: color.grey900,
  paper: color.paper,
  backgroundDefault: color.paper,
  background: color.background,
  darkTextPrimary: color.grey700,
  darkTextSecondary: color.grey500,
  textDark: color.grey900,
  menuSelected: color.primaryDark,
  menuSelectedBack: color.primaryLight,
  divider: color.grey200,
};

const themeOptions = {
  direction: "ltr",
  MuiCssBaseline: {
    styleOverrides: (themeParam) => ({
      body: {
        minHeight: "100vh",
        margin: 0,
        display: "flex",
        flexDirection: "column",
      },
    }),
  },
  palette: themePalette(themeOption),
  mixins: {
    toolbar: {
      minHeight: "48px",
      padding: "16px",
      "@media (min-width: 600px)": {
        minHeight: "48px",
      },
    },
  },
  typography: themeTypography(themeOption),
};
export const theme = createTheme(themeOptions);
theme.components = componentStyleOverrides(themeOption);

export default theme;
