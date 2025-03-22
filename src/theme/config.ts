import { createTheme } from "@mantine/core";
import { appColor } from "./color";

export const theme = createTheme({
  colors: {
    appColor,
  },
  primaryColor: "appColor",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});
