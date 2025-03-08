'use client';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppTheme } from '@/shared/hooks/useAppTheme';

export const Header = () => {
  const { mode, toggleTheme } = useAppTheme();
  const pathname = usePathname();

  const isAuthPage = pathname === '/auth';

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            ResumAI
          </Link>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" onClick={toggleTheme}>
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </Button>
          <Button color="inherit">О проекте</Button>
          {!isAuthPage && (
            <Link href="/auth" passHref style={{ textDecoration: 'none' }}>
              <Button color="inherit" variant="outlined" sx={{ ml: 1 }}>
                Войти
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
