'use client';

import { Typography, Box, Button, Container, Stack } from '@mui/material';

import { useTheme } from '@/app/providers/ThemeProvider/ThemeProvider';

export default function Home() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Адаптируйте резюме под вакансию
        </Typography>

        <Typography variant="h5" component="h2" color="text.secondary" sx={{ mb: 4 }}>
          Используйте AI для повышения релевантности вашего резюме
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button variant="contained" size="large">
            Начать сейчас
          </Button>
          <Button variant="outlined" size="large">
            Узнать больше
          </Button>
        </Stack>

        <Box sx={{ mt: 6 }}>
          <Button onClick={toggleTheme} variant="text">
            Переключить тему ({mode === 'light' ? 'светлая' : 'темная'})
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
