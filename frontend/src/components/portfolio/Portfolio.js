import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Visibility } from '@mui/icons-material';

const Portfolio = ({ data, template }) => {
  const isTemplate1 = template === 'template1';

  if (isTemplate1) {
    return (
      <Box sx={{ py: 6, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" fontWeight="bold">
            Portfolio
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Featured projects and work
          </Typography>
          <Grid container spacing={4}>
            {data.map((project, index) => (
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
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image || 'https://via.placeholder.com/400x200/1976d2/ffffff?text=Project+Image'}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
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
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center" fontWeight="bold" color="primary">
          My Work
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Creative projects and collaborations
        </Typography>
        <Grid container spacing={4}>
          {data.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 8
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image || 'https://via.placeholder.com/600x250/dc004e/ffffff?text=Creative+Project'}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(220,0,78,0.8), rgba(255,107,157,0.8))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<Visibility />}
                      sx={{ 
                        backgroundColor: 'white', 
                        color: 'secondary.main',
                        '&:hover': {
                          backgroundColor: 'grey.100'
                        }
                      }}
                    >
                      View Project
                    </Button>
                  </Box>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="primary">
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {project.description}
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

export default Portfolio;
