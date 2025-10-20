import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Paper } from '@mui/material';
import { Send, Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = ({ data, template }) => {
  const isTemplate1 = template === 'template1';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  if (isTemplate1) {
    return (
      <Box sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" fontWeight="bold">
            Get In Touch
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Let's work together on your next project
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Contact Information
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Email sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>{data.email}</Typography>
                  </Box>
                  {data.phone && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Phone sx={{ mr: 2, color: 'primary.main' }} />
                      <Typography>{data.phone}</Typography>
                    </Box>
                  )}
                  {data.location && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                      <Typography>{data.location}</Typography>
                    </Box>
                  )}
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 4 }}>
                  {data.message}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Send Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<Send />}
                    sx={{ mt: 2 }}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

  // Template 2 - Creative Portfolio
  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center" fontWeight="bold" color="primary">
          Let's Create Together
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Ready to start your next project?
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                p: 4, 
                background: 'linear-gradient(135deg, #dc004e, #ff6b9d)',
                color: 'white',
                borderRadius: 3,
                height: '100%'
              }}
            >
              <Typography variant="h4" gutterBottom fontWeight="bold">
                Contact Info
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Email sx={{ mr: 2, fontSize: 24 }} />
                  <Typography variant="h6">{data.email}</Typography>
                </Box>
                {data.phone && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Phone sx={{ mr: 2, fontSize: 24 }} />
                    <Typography variant="h6">{data.phone}</Typography>
                  </Box>
                )}
                {data.location && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationOn sx={{ mr: 2, fontSize: 24 }} />
                    <Typography variant="h6">{data.location}</Typography>
                  </Box>
                )}
              </Box>
              <Typography variant="body1" sx={{ mt: 4, opacity: 0.9, lineHeight: 1.6 }}>
                {data.message}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              sx={{ 
                p: 4, 
                height: '100%',
                border: '2px solid',
                borderColor: 'secondary.main',
                borderRadius: 3
              }}
            >
              <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Send Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  startIcon={<Send />}
                  sx={{ mt: 2 }}
                  fullWidth
                  size="large"
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
