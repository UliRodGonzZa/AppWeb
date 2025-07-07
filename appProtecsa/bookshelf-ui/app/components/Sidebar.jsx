import { Box, Typography, Chip, Avatar, Paper, Divider } from '@mui/material';
import { profile, skills } from '../constants/cvData';
import { motion } from 'framer-motion';

export default function Sidebar() {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3, backgroundColor: '#fefefe' }}>
      {/* Avatar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Avatar
          alt={profile.name}
          src="/me.jpeg"
          sx={{ width: 120, height: 120, boxShadow: 3 }}
        />
      </Box>

      {/* Contact */}
      <Typography variant="h6" gutterBottom align="center" color="primary">
        Contact
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2"><strong>Email:</strong> {profile.contact.email}</Typography>
      <Typography variant="body2"><strong>Teléfono:</strong> {profile.contact.phone}</Typography>
      <Typography variant="body2"><strong>Ubicación:</strong> {profile.contact.location}</Typography>

      {/* Skills */}
      <Typography variant="h6" sx={{ mt: 4 }} gutterBottom color="primary">
        Skills
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            variant="outlined"
            sx={{
              mr: 1,
              mb: 1,
              color: '#0057B7',
              borderColor: '#0057B7',
              fontWeight: 500,
              fontSize: '0.875rem',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#e3f2fd',
              },
            }}
          />
        ))}
      </Box>
    </Paper>
  );
}
