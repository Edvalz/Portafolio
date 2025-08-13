"use client";
import { createTheme } from "@mui/material/styles";
//import { blueGrey } from "@mui/material/colors";

const game = createTheme({
  palette: {
    primary: {
      main: "#7680A0",
      light: "#9AA3C0",
      dark: "#5A617A",
      contrastText: "#fff",
    },
    secondary: {
      main: "#4C8C64",
      light: "#76B28A",
      dark: "#326146",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default game;
