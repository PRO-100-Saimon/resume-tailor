'use client';

import { Box, Typography, Button, Container, Stack } from '@mui/material';
import Link from 'next/link';

export const Hero = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: theme =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(to right bottom, #f8f9fa, #e9ecef)'
            : 'linear-gradient(to right bottom, #1a1a2e, #16213e)',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Повысьте шансы получить работу мечты
            </Typography>

            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
              Адаптируйте своё резюме под конкретные вакансии с помощью искусственного интеллекта и
              увеличьте отклик рекрутеров.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                mb: 4,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Link href="/auth" passHref style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, borderRadius: 2 }}>
                  Начать бесплатно
                </Button>
              </Link>
              <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, borderRadius: 2 }}>
                Узнать больше
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: { xs: '100%', sm: '80%', md: '90%' },
                height: { xs: 250, sm: 300, md: 400 },
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 5,
              }}
            >
              {/* Вместо реального изображения используем цветной прямоугольник */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  bgcolor: 'primary.main',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography color="white" variant="h5">
                  Изображение резюме
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
