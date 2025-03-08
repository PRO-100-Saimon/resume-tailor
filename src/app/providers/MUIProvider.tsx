'use client';

import { ReactNode, useEffect, useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { lightTheme, darkTheme } from '@/shared/config/theme';

export default function MUIProvider({
  children,
  mode = 'light',
}: {
  children: ReactNode;
  mode?: 'light' | 'dark';
}) {
  // Предотвращаем несоответствие гидратации используя useState с suppressHydrationWarning
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Контент показывается только после монтирования на клиенте */}
      <div suppressHydrationWarning>{mounted ? children : null}</div>
    </ThemeProvider>
  );
}
