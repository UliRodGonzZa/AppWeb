'use client';

import { useRouter } from 'next/navigation';
import { Container, Box, Typography, Grid, Paper, Divider } from '@mui/material';
import { useUsers } from '../hooks/useUsers';
import SignUpDialog from '../components/SignUpDialog';

export default function ContactPage() {
  const { addUser } = useUsers();
  const router = useRouter();

  const handleSignUp = (userData) => {
    const result = addUser(userData);
    if (result) {
      router.push('/');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          backgroundColor: 'background.paper',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left column with form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
            Share Your Information - I'll Reach Out
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Fill out your information if you'd like to work together
            </Typography>

            <SignUpDialog onSignUp={handleSignUp} />
          </Grid>

          {/* Right column with illustration */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="/protecsa.jpeg"
              alt="Registro"
              sx={{
                width: '100%',
                maxWidth: 400,
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
