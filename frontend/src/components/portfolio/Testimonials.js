import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const Testimonials = ({ data, template }) => {
  const isTemplate1 = template === 'template1';

  if (isTemplate1) {
    return (
      <Box sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" fontWeight="bold">
            Testimonials
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
            What clients say about my work
          </Typography>
          <Grid container spacing={4}>
            {data.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <CardContent>
                    <FormatQuote sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.6 }}>
                      "{testimonial.quote}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                      <Avatar sx={{ mr: 2, backgroundColor: 'primary.main' }}>
                        {testimonial.author.charAt(0).toUpperCase()}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {testimonial.author}
                        </Typography>
                        {testimonial.position && (
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.position}
                          </Typography>
                        )}
                      </Box>
                    </Box>
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
          Client Love
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Testimonials from happy clients
        </Typography>
        <Grid container spacing={4}>
          {data.map((testimonial, index) => (
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
                  transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'rotate(0deg) scale(1.05)',
                    boxShadow: 8
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -30,
                    right: -30,
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }}
                />
                <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                  <FormatQuote sx={{ fontSize: 40, mb: 2, opacity: 0.8 }} />
                  <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', lineHeight: 1.6, mb: 3 }}>
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ mr: 2, backgroundColor: 'rgba(255,255,255,0.2)' }}>
                      {testimonial.author.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.author}
                      </Typography>
                      {testimonial.position && (
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {testimonial.position}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
