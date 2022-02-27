import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { ReactNode } from "react";

export const theme = createTheme({
  spacing: 8, // spacing(1) = 0.5rem = 8px
  palette: {
    text: {
      primary: grey.A700,
    },
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#E5E5E5",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "YakuHanJP",
      "Helvetica",
      "ヒラギノ角ゴシック",
      "Hiragino Sans",
      "ヒラギノ角ゴ ProN W3",
      "Hiragino Kaku Gothic ProN",
      "Verdana",
      "Meiryo",
      "sans-serif",
    ].join(", "),
    button: {
      textTransform: "none",
    },
  },
});

export const MuiTheme = (props: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {props.children}
  </ThemeProvider>
);
