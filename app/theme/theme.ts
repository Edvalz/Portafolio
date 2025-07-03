"use client";
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const game = createTheme({
  palette: {
    primary: {
      main: green[800],
      light: green[700],
      dark: green[900],
      contrastText: '#fff',
    },
  },
  typography:{
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default game;