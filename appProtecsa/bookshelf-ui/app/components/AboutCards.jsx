'use client';

import { Grid2, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const AboutCards = ({ icon: Icon, title, label }) => {
  const theme = useTheme();

  return (
    <Grid2
      size={{ xs: 22, sm: 16, md: 14 }}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      sx={{
        textAlign: 'center',
        p: 2,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 3,
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      }}
    >
      <Icon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
    </Grid2>
  );
};

export default AboutCards;
