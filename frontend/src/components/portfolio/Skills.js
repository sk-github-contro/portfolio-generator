import React from 'react';
import { Box, Typography, Container, Grid, Chip } from '@mui/material';

const Skills = ({ data, template }) => {
  const isTemplate1 = template === 'template1';

  if (isTemplate1) {
    return (
      <Box sx={{ py: 6, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" fontWeight="bold">
            Skills & Expertise
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Technologies and tools I work with
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {data.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                variant="outlined"
                color="primary"
                sx={{
                  fontSize: '1rem',
                  height: 40,
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white'
                  }
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    );
  }

  // Template 2 - Creative Portfolio
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center" fontWeight="bold" color="primary">
          My Skills
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Creative tools and technical expertise
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {data.map((skill, index) => (
            <Grid item key={index}>
              <Chip
                label={skill}
                variant="filled"
                color="secondary"
                sx={{
                  fontSize: '1.1rem',
                  height: 50,
                  px: 3,
                  fontWeight: 'bold',
                  transform: 'rotate(-2deg)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'rotate(0deg) scale(1.05)',
                    backgroundColor: 'secondary.dark'
                  },
                  '&:nth-of-type(even)': {
                    transform: 'rotate(2deg)',
                    '&:hover': {
                      transform: 'rotate(0deg) scale(1.05)'
                    }
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
