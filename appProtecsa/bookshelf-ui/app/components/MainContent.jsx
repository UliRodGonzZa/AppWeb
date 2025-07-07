import { Box, Typography, Paper, Divider, useTheme } from '@mui/material';
import { profile, experience, education } from '../constants/cvData';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';

export default function MainContent() {
  const theme = useTheme();

  const sectionStyle = {
    p: 3,
    borderRadius: 3,
    backgroundColor: theme.palette.mode === 'light' ? '#f9f9f9' : '#1e1e1e',
    boxShadow: `0 2px 10px ${theme.palette.grey[300]}`,
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      {/* Summary */}
      <Paper sx={sectionStyle}>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <InfoIcon color="primary" />
          <Typography variant="h5" fontWeight="bold">Summary</Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" color="text.secondary">
          {profile.summary}
        </Typography>
      </Paper>

      {/* Experience */}
      <Paper sx={sectionStyle}>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <WorkIcon color="primary" />
          <Typography variant="h5" fontWeight="bold">Experience</Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        {experience.map((job, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              {job.role} @ {job.company}
            </Typography>
            <Typography variant="caption" color="text.secondary">{job.period}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {job.description}
            </Typography>
          </Box>
        ))}
      </Paper>

      {/* Education */}
      <Paper sx={sectionStyle}>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <SchoolIcon color="primary" />
          <Typography variant="h5" fontWeight="bold">Education</Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        {education.map((edu, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
              {edu.degree}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {edu.institution} — {edu.period}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}
