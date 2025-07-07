import { Box, Typography, IconButton, Paper } from '@mui/material';

export const ContactCard = ({ icon: Icon, label, url, hoverColor }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        textAlign: 'center',
        borderRadius: 2,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 8px 20px ${hoverColor}40`,
        },
      }}
    >
      <IconButton
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: hoverColor,
          mb: 1,
          '&:hover': {
            backgroundColor: `${hoverColor}20`,
          },
        }}
      >
        <Icon sx={{ fontSize: 40 }} />
      </IconButton>
      <Typography variant="subtitle1">{label}</Typography>
    </Paper>
  );
};
