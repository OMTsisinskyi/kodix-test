"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      lightGreen: string;
      darkGreen: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      lightGreen?: string;
      darkGreen?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#000000",
    },
    custom: {
      lightGreen: "#1FFF1A",
      darkGreen: "#04AA00",
    },
  },
});

export default theme;
