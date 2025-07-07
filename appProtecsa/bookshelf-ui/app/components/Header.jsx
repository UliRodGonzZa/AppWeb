'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { profile } from '../constants/cvData';

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      component={motion.header}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      sx={{
        background: 'linear-gradient(to right, #1e3c72, #2a5298)',
        color: 'white',
        py: 6,
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          letterSpacing: 1,
          position: 'relative',
          display: 'inline-block',
          pb: 1,
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: 0,
            width: '60%',
            height: '3px',
            backgroundColor: theme.palette.secondary.main,
            transform: 'translateX(-50%)',
            borderRadius: 2,
          },
        }}
      >
        {profile.name}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mt: 1,
          color: 'rgba(255,255,255,0.85)',
          fontWeight: 400,
        }}
      >
        {profile.title}
      </Typography>
    </Box>
  );
}
