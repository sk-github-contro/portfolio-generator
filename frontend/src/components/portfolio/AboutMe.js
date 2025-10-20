import React from 'react';
import { Box, Typography, Container, Grid, Link, Chip } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, GitHub, Twitter, Instagram } from '@mui/icons-material';

const AboutMe = ({ data, template }) => {
  const isTemplate1 = template === 'template1';

  const socialIcons = {
    linkedin: <LinkedIn />,
    github: <GitHub />,
    twitter: <Twitter />,
    instagram: <Instagram />
  };

  if (isTemplate1) {
    return (
      <Box sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" fontWeight="bold">
            About Me
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h6" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {data.bio}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ mr: 1, color: 'primary.main' }} />
                  <Link href={`mailto:${data.email}`} color="inherit">
                    {data.email}
                  </Link>
                </Box>
                {data.phone && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Phone sx={{ mr: 1, color: 'primary.main' }} />
                    <Link href={`tel:${data.phone}`} color="inherit">
                      {data.phone}
                    </Link>
                  </Box>
                )}
                {data.location && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography>{data.location}</Typography>
                  </Box>
                )}
                <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                  Social Media
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {Object.entries(data.socials).map(([platform, url]) => (
                    url && (
                      <Link
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                      >
                        <Chip
                          icon={socialIcons[platform]}
                          label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                          variant="outlined"
                          size="small"
                          clickable
                        />
                      </Link>
                    )
                  ))}
                </Box>
              </Box>
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
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" gutterBottom fontWeight="bold" color="primary">
              About Me
            </Typography>
            <Typography variant="h6" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'text.secondary' }}>
              {data.bio}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, backgroundColor: '#f8f9fa', borderRadius: 3, position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  left: 20,
                  width: 40,
                  height: 40,
                  backgroundColor: 'secondary.main',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Email color="white" />
              </Box>
              <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                Let's Connect
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ mr: 2, color: 'secondary.main' }} />
                  <Link href={`mailto:${data.email}`} color="inherit" sx={{ textDecoration: 'none' }}>
                    {data.email}
                  </Link>
                </Box>
                {data.phone && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Phone sx={{ mr: 2, color: 'secondary.main' }} />
                    <Link href={`tel:${data.phone}`} color="inherit" sx={{ textDecoration: 'none' }}>
                      {data.phone}
                    </Link>
                  </Box>
                )}
                {data.location && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn sx={{ mr: 2, color: 'secondary.main' }} />
                    <Typography>{data.location}</Typography>
                  </Box>
                )}
              </Box>
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {Object.entries(data.socials).map(([platform, url]) => (
                    url && (
                      <Link
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          textDecoration: 'none',
                          color: 'secondary.main',
                          '&:hover': { color: 'secondary.dark' }
                        }}
                      >
                        {socialIcons[platform]}
                      </Link>
                    )
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe;
