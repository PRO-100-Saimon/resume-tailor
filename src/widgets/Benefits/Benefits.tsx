'use client';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonalizedIcon from '@mui/icons-material/AssignmentInd';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

const benefits = [
  {
    icon: <SpeedIcon fontSize="large" color="primary" />,
    title: 'Увеличьте отклик',
    description:
      'Получайте больше приглашений на интервью благодаря адаптированному под вакансию резюме',
  },
  {
    icon: <TrendingUpIcon fontSize="large" color="primary" />,
    title: 'Выделитесь среди конкурентов',
    description:
      'Подчеркните ваши сильные стороны и релевантные навыки для каждой конкретной позиции',
  },
  {
    icon: <AccessTimeIcon fontSize="large" color="primary" />,
    title: 'Экономьте время',
    description:
      'Создавайте идеальное резюме за минуты, а не часы, уделяя больше времени поиску подходящих вакансий',
  },
  {
    icon: <PersonalizedIcon fontSize="large" color="primary" />,
    title: 'Персонализированные рекомендации',
    description:
      'Получите конкретные советы по улучшению вашего резюме от продвинутого AI алгоритма',
  },
];

export const Benefits = () => {
  return (
    <Box
      sx={{ py: 8, bgcolor: theme => (theme.palette.mode === 'light' ? 'grey.50' : 'grey.900') }}
    >
      <Container>
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 600 }}>
          Преимущества нашего сервиса
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
        >
          Используйте возможности искусственного интеллекта для создания идеального резюме под
          каждую вакансию
        </Typography>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
                elevation={2}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ mr: 2 }}>{benefit.icon}</Box>
                    <Box>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
