'use client';

import { useTheme } from 'next-themes';

export const useAppTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return {
    mode: resolvedTheme as 'light' | 'dark',
    toggleTheme,
  };
};
