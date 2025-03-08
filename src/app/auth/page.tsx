'use client';

import { useState } from 'react';

import { Container, Box, Typography, Paper, Link as MuiLink } from '@mui/material';

import { LoginForm, RegisterForm, SocialAuth } from '@/features/auth/ui/AuthForms';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          boxShadow: theme =>
            theme.palette.mode === 'dark'
              ? '0 4px 20px rgba(0, 0, 0, 0.5)'
              : '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          {isLogin ? 'Вход в аккаунт' : 'Регистрация'}
        </Typography>

        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 3 }}>
          {isLogin
            ? 'Войдите, чтобы получить доступ к персонализированной адаптации резюме'
            : 'Создайте аккаунт для использования всех возможностей сервиса'}
        </Typography>

        {isLogin ? <LoginForm /> : <RegisterForm />}

        <SocialAuth />

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2">
            {isLogin ? 'Еще нет аккаунта? ' : 'Уже есть аккаунт? '}
            <MuiLink
              component="button"
              variant="body2"
              onClick={toggleForm}
              sx={{ fontWeight: 'medium' }}
            >
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
