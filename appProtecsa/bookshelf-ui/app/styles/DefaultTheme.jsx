'use client';

import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2a4759',     // Azul oscuro para botones, links
      light: '#F79B72',    // Naranja claro para acentos
      dark: '#1e3442',     // Variante más oscura
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F79B72',     // Naranja como secundario
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5',  // Fondo general claro
      paper: '#ffffff',    // Tarjetas y formularios
    },
    text: {
      primary: '#000000',
      secondary: '#4f4f4f',
    },
    error: {
      main: '#e7191f',     // Color para errores
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a4759',
          color: '#EEEEEE',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});
