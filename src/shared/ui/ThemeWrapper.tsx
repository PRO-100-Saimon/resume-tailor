'use client';

import { ReactNode, useEffect, useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from 'next-themes';

import { lightTheme, darkTheme } from '@/shared/config/theme';

export function ThemeWrapper({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    setCurrentTheme(resolvedTheme === 'dark' ? darkTheme : lightTheme);
  }, [resolvedTheme]);

  // Эта защита предотвратит проблемы гидратации
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
