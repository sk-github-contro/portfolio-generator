import React from 'react';
import { Box, Typography, Container, Card, CardContent, Button } from '@mui/material';
import { Article, ArrowForward } from '@mui/icons-material';

const Blog = ({ data, template }) => {
  const isTemplate1 = template === 'template1';

  // Don't render if no blog data
  if (!data.title && !data.summary) {
    return null;
  }

  if (isTemplate1) {
    return (
      <Box sx={{ py: 6, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" fontWeight="bold">
            Latest Blog Post
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Thoughts and insights
          </Typography>
          <Card sx={{ maxWidth: 800, mx: 'auto' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Article sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h4" component="h3" fontWeight="bold">
                  {data.title}
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {data.summary}
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{ mt: 2 }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    );
  }

  // Template 2 - Creative Portfolio
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center" fontWeight="bold" color="primary">
          Latest Writing
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Creative thoughts and insights
        </Typography>
        <Card 
          sx={{ 
            maxWidth: 900, 
            mx: 'auto',
            background: 'linear-gradient(135deg, #dc004e, #ff6b9d)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
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
          <CardContent sx={{ p: 6, position: 'relative', zIndex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Article sx={{ fontSize: 48, mr: 3, opacity: 0.9 }} />
              <Typography variant="h3" component="h3" fontWeight="bold">
                {data.title}
              </Typography>
            </Box>
            <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, opacity: 0.9, mb: 4 }}>
              {data.summary}
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{ 
                backgroundColor: 'white', 
                color: 'secondary.main',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'grey.100'
                }
              }}
            >
              Read Full Article
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Blog;
