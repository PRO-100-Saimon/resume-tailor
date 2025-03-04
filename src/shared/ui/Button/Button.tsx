import { FC } from 'react';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonProps = MuiButtonProps;

export const Button: FC<ButtonProps> = props => {
  return <MuiButton {...props} />;
};
