import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { DesignServices, Code, Analytics } from '@mui/icons-material';

const Services = ({ data, template }) => {
  const isTemplate1 = template === 'template1';

  const serviceIcons = [<DesignServices />, <Code />, <Analytics />];

  if (isTemplate1) {
    return (
      <Box sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" fontWeight="bold">
            Services
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
            What I can do for you
          </Typography>
          <Grid container spacing={4}>
            {data.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {serviceIcons[index] && React.cloneElement(serviceIcons[index], { sx: { fontSize: 48 } })}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
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
          What I Offer
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Creative solutions for your needs
        </Typography>
        <Grid container spacing={4}>
          {data.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: `linear-gradient(135deg, ${
                    index === 0 ? '#ff6b9d, #ffa726' :
                    index === 1 ? '#42a5f5, #1976d2' :
                    '#66bb6a, #43a047'
                  })`,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05) rotate(2deg)',
                    boxShadow: 8
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }}
                />
                <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                  <Typography variant="h4" component="h3" gutterBottom fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
