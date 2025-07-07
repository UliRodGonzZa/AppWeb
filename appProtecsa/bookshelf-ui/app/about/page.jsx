'use client';

import { Business, Group, Handshake, Lightbulb, Public, Settings } from '@mui/icons-material';
import { Grid2, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Image from 'next/image';
import AboutCards from '../components/AboutCards';
import { motion } from 'framer-motion'; // ← AÑADIDO

export default function About() {
  return (
    <Container maxWidth='xl'>
      <Grid2 container spacing={4} alignContent='center'>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            padding: { xs: 0, md: '0 0 0 100px' },
          }}
        >
          {/* ← Animación para el texto principal */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant='h3' gutterBottom sx={{ fontWeight: 'bold' }}>
              My Story
            </Typography>
            <Box
              sx={{
                borderBottom: '4px solid red',
                width: '280px',
                mb: 2,
              }}
            />
            <Typography variant='body1' sx={{ color: 'text.light', fontSize: '1.1rem', mb: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem aperiam voluptatum...
            </Typography>
            <Typography variant='body1' sx={{ color: 'text.light', fontSize: '1.1rem', mb: 2 }}>
              Mauris nec nisl at magna vehicula tincidunt. Integer sit amet sapien dapibus...
            </Typography>
          </motion.div>
        </Grid2>

        {/* ← Animación para la imagen */}
        <Grid2
          size={{ xs: 12, md: 6 }}
          display='flex'
          alignContent='center'
          justifyContent='center'
        >
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={'/me.jpeg'}
              alt='That is me'
              width={500}
              height={300}
              priority
              style={{ boxShadow: '0px 4px 20px rgba(0,0,0,0.1)', borderRadius: '8px' }}
            />
          </motion.div>
        </Grid2>
      </Grid2>

      {/* SECCIÓN DE PROYECTOS ACTUALES */}
      <Box
        sx={{
          mt: 6,
          mb: 8,
          background: 'linear-gradient(to right, #E3F2FD, #BBDEFB)',
          py: 8,
        }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography variant='h3' align='center' gutterBottom sx={{ fontWeight: 'bold' }}>
            My current projects
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{ color: 'text.light', fontSize: '1.1rem', mb: 2 }}
          >
            I want to get these goals after two years
          </Typography>
        </motion.div>

        <Box
          sx={{
            width: '50px',
            mb: 4,
            mx: 'auto',
          }}
        />

        {/* ← Animación para cada tarjeta individual */}
        <Grid2
          container
          spacing={4}
          justifyContent='center'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}
        >
          {[ 
            { icon: Lightbulb, title: '50k', label: 'Advance technology' },
            { icon: Group, title: '25k', label: 'Trusted by industry' },
            { icon: Handshake, title: '150', label: 'Global presence' },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              style={{ marginRight: '24px' }}
            >
              <AboutCards icon={card.icon} title={card.title} label={card.label} />
            </motion.div>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}
