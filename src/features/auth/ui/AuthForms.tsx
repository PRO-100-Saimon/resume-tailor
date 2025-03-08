'use client';

import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  TextField,
  Button,
  Box,
  Divider,
  Grid,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';

// Схемы валидации
const loginSchema = yup.object({
  email: yup.string().email('Введите корректный email').required('Email обязателен'),
  password: yup.string().required('Пароль обязателен'),
});

const registerSchema = yup.object({
  name: yup.string().required('Имя обязательно'),
  email: yup.string().email('Введите корректный email').required('Email обязателен'),
  password: yup
    .string()
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .required('Пароль обязателен'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтверждение пароля обязательно'),
});

interface LoginFormData {
  email: string;
  password: string;
  remember?: boolean;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
    // Здесь будет логика авторизации
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            required
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Пароль"
            variant="outlined"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            error={!!errors.password}
            helperText={errors.password?.message}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 1 }}>
        <Controller
          name="remember"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} color="primary" />}
              label="Запомнить меня"
            />
          )}
        />
        <Link href="/auth/reset-password" passHref legacyBehavior>
          <MuiLink variant="body2" component="span">
            Забыли пароль?
          </MuiLink>
        </Link>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 3, mb: 2, py: 1.5 }}
      >
        Войти
      </Button>
    </Box>
  );
};

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register data:', data);
    // Здесь будет логика регистрации
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Имя"
            variant="outlined"
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
            required
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            required
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Пароль"
            variant="outlined"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            error={!!errors.password}
            helperText={errors.password?.message}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Подтвердите пароль"
            variant="outlined"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            required
          />
        )}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 3, mb: 2, py: 1.5 }}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
};

export const SocialAuth = () => {
  return (
    <>
      <Divider sx={{ my: 3 }}>или</Divider>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ py: 1.5 }}>
            Google
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" startIcon={<FacebookIcon />} sx={{ py: 1.5 }}>
            Facebook
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
