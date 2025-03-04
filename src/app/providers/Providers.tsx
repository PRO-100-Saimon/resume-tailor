'use client';

import { ReactNode } from 'react';

import QueryProvider from '@/app/providers/QueryProvider/QueryProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider/ThemeProvider';
import { MainLayout } from '@/widgets/Layout/MainLayout';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <MainLayout>{children}</MainLayout>
      </ThemeProvider>
    </QueryProvider>
  );
}
