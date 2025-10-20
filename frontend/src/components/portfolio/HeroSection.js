import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';

const HeroSection = ({ data, template }) => {
  const isTemplate1 = template === 'template1';

  if (isTemplate1) {
    return (
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Avatar
            src={data.profileImage}
            sx={{
              width: 150,
              height: 150,
              mx: 'auto',
              mb: 3,
              border: '4px solid white'
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            {data.name}
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom color="rgba(255,255,255,0.9)">
            {data.title}
          </Typography>
          <Typography variant="h6" component="p" color="rgba(255,255,255,0.8)" sx={{ maxWidth: 600, mx: 'auto' }}>
            {data.tagline}
          </Typography>
        </Container>
      </Box>
    );
  }

  // Template 2 - Creative Portfolio
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #dc004e 0%, #ff6b9d 50%, #ffa726 100%)',
        color: 'white',
        py: 10,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
          <Avatar
            src={data.profileImage}
            sx={{
              width: 200,
              height: 200,
              border: '6px solid white',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}
          />
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Typography variant="h1" component="h1" gutterBottom fontWeight="bold" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              {data.name}
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom color="rgba(255,255,255,0.9)" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
              {data.title}
            </Typography>
            <Typography variant="h5" component="p" color="rgba(255,255,255,0.8)" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              {data.tagline}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
