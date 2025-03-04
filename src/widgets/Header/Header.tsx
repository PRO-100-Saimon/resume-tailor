'use client';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

import { useTheme } from '@/app/providers/ThemeProvider/ThemeProvider';

export const Header = () => {
  const { mode, toggleTheme } = useTheme();

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
          <Button color="inherit" variant="outlined" sx={{ ml: 1 }}>
            Войти
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
