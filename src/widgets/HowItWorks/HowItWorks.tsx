'use client';

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DescriptionIcon from '@mui/icons-material/Description';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const steps = [
  {
    icon: <UploadFileIcon fontSize="large" />,
    title: 'Загрузите резюме',
    description: 'Загрузите ваше текущее резюме в формате PDF или вставьте текст',
  },
  {
    icon: <WorkIcon fontSize="large" />,
    title: 'Добавьте описание вакансии',
    description: 'Вставьте текст вакансии, на которую хотите откликнуться',
  },
  {
    icon: <AutoFixHighIcon fontSize="large" />,
    title: 'AI анализирует данные',
    description: 'Наш искусственный интеллект сопоставляет ваш опыт с требованиями вакансии',
  },
  {
    icon: <DescriptionIcon fontSize="large" />,
    title: 'Получите адаптированное резюме',
    description: 'Используйте предложенные изменения, чтобы сделать резюме более релевантным',
  },
];

export const HowItWorks = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 6, fontWeight: 600 }}>
          Как это работает
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                    borderRadius: '50%',
                    p: 2,
                    width: 60,
                    height: 60,
                  }}
                >
                  {step.icon}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {step.title}
                </Typography>
                <Typography color="text.secondary">{step.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
