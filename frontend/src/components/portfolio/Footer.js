import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';
import { LinkedIn, GitHub, Twitter, Instagram } from '@mui/icons-material';

const Footer = ({ data, template }) => {
  const isTemplate1 = template === 'template1';

  const socialIcons = {
    linkedin: <LinkedIn />,
    github: <GitHub />,
    twitter: <Twitter />,
    instagram: <Instagram />
  };

  if (isTemplate1) {
    return (
      <Box
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          py: 4
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                {data.hero.name}
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.8)">
                {data.hero.title}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 2 }}>
                {Object.entries(data.about.socials).map(([platform, url]) => (
                  url && (
                    <Link
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: 'white',
                        '&:hover': { color: 'rgba(255,255,255,0.8)' }
                      }}
                    >
                      {socialIcons[platform]}
                    </Link>
                  )
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 3, pt: 3 }}>
            <Typography variant="body2" color="rgba(255,255,255,0.8)" align="center">
              © {new Date().getFullYear()} {data.hero.name}. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  // Template 2 - Creative Portfolio
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #dc004e 0%, #ff6b9d 100%)',
        color: 'white',
        py: 6,
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              {data.hero.name}
            </Typography>
            <Typography variant="h6" color="rgba(255,255,255,0.9)" gutterBottom>
              {data.hero.title}
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.8)">
              {data.hero.tagline}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 3 }}>
              {Object.entries(data.about.socials).map(([platform, url]) => (
                url && (
                  <Link
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: 'white',
                      fontSize: '2rem',
                      '&:hover': { 
                        color: 'rgba(255,255,255,0.8)',
                        transform: 'scale(1.2)'
                      },
                      transition: 'all 0.2s ease-in-out'
                    }}
                  >
                    {socialIcons[platform]}
                  </Link>
                )
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 4 }}>
          <Typography variant="body1" color="rgba(255,255,255,0.8)" align="center">
            © {new Date().getFullYear()} {data.hero.name}. Made with ❤️ and creativity.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
