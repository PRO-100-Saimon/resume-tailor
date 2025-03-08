'use client';

import { Box, Typography, Container, Grid, Link, Divider } from '@mui/material';

const footerLinks = [
  {
    title: 'Продукт',
    links: [
      { name: 'Как это работает', href: '#' },
      { name: 'Возможности', href: '#' },
      { name: 'Цены', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { name: 'О нас', href: '#' },
      { name: 'Блог', href: '#' },
      { name: 'Карьера', href: '#' },
      { name: 'Контакты', href: '#' },
    ],
  },
  {
    title: 'Правовая информация',
    links: [
      { name: 'Условия использования', href: '#' },
      { name: 'Политика конфиденциальности', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: theme => (theme.palette.mode === 'light' ? 'grey.100' : 'grey.800'),
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              ResumAI
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Помогаем соискателям получить работу мечты с помощью персонализированных резюме под
              каждую вакансию.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} ResumAI. Все права защищены.
            </Typography>
          </Grid>

          {footerLinks.map(column => (
            <Grid item xs={6} sm={2} key={column.title}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {column.title}
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                {column.links.map(link => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      color="text.secondary"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main', textDecoration: 'underline' },
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          Сделано с ❤️ для помощи в поиске работы
        </Typography>
      </Container>
    </Box>
  );
};
