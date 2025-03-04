'use client';

import { FC, ReactNode } from 'react';

import { Box, Container } from '@mui/material';

import { Header } from '@/widgets/Header/Header';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Container>
      {/* Здесь будет Footer компонент */}
    </Box>
  );
};
