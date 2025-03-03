import { ReactNode, useMemo } from 'react';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { PaletteMode } from '@mui/material';
import { blue } from '@mui/material/colors';

interface MaterialUIProps {
  children: ReactNode;
  mode?: PaletteMode;
}

export const MaterialUIProvider = ({ children, mode = 'light' }: MaterialUIProps) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: blue[500],
          },
          secondary: {
            main: '#f50057',
          },
        },
        typography: {
          fontFamily: 'Inter, system-ui, sans-serif',
          button: {
            textTransform: 'none',
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
