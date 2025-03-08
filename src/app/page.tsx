'use client';

import { Box } from '@mui/material';

import { Benefits } from '@/widgets/Benefits/Benefits';
import { Hero } from '@/widgets/Hero/Hero';
import { HowItWorks } from '@/widgets/HowItWorks/HowItWorks';

export default function Home() {
  return (
    <Box>
      <Hero />
      <HowItWorks />
      <Benefits />
    </Box>
  );
}
