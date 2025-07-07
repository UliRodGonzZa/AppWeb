import { Grid, Typography, Box } from '@mui/material';
import SignUpDialog from './SignUpDialog';

export default function SignUpSection({ handleSignUp }) {
  return (
    <Box maxWidth="md" sx={{ mt: 10, mx: 'auto', animation: 'fadeInUp 1.2s ease-out' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Sign up
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            Sned me a message
          </Typography>
          <Box
            sx={{
              background: '#0D1B2A',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 2px rgba(0,0,0,0.05)',
            }}
          >
            <SignUpDialog onSignUp={handleSignUp} />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', ml: 18 }}>
          <img
            src="/signup-illustration.svg"
            alt="Register"
            width={550}
            height={250}
            style={{ boxShadow: '0px 4px 20px rgba(0,0,0,0.1)', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
