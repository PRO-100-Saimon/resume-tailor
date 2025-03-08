'use client';

import { ReactNode } from 'react';

import { Box } from '@mui/material';

import { ThemeWrapper } from '@/shared/ui/ThemeWrapper';
import { Footer } from '@/widgets/Footer/Footer';
import { Header } from '@/widgets/Header/Header';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ThemeWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeWrapper>
  );
};
