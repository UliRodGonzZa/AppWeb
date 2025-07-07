'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0057B7', // Azul brillante
    },
    secondary: {
      main: '#F50057', // Rosa fuerte
    },
    background: {
      default: '#F0F4FF', // Azul muy claro
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#5f6368',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#43a047',
    },
    warning: {
      main: '#ff9800',
    },
  },
  typography: {
    fontFamily: `'Inter', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        },
      },
    },
  },
});
