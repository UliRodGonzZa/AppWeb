'use client';

import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const initialForm = {
  email: '',
  username: '',
  name: '',
  lastname: '',
  password: '',
};

export default function SignUpDialog({ onSignUp }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(form);
    setForm(initialForm);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        bgcolor: 'background.paper',
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      {[
        { name: 'email', label: 'E-mail' },
        { name: 'username', label: 'Username' },
        { name: 'name', label: 'Name' },
        { name: 'lastname', label: 'Last name' },
        { name: 'password', label: 'Interesting in', type: 'Password' }
      ].map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type || 'text'}
          value={form[field.name]}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          color="primary" // Usa color del tema
        />
      ))}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          fontWeight: 'bold',
          textTransform: 'none',
          mt: 1,
        }}
      >
        Go ahead
      </Button>
    </Box>
  );
}
