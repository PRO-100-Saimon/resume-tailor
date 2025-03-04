import { FC } from 'react';

import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

type TypographyProps = MuiTypographyProps;

export const Typography: FC<TypographyProps> = props => {
  return <MuiTypography {...props} />;
};
