import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Button,
  Box,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TemplateSelection = () => {
  const navigate = useNavigate();

  const templates = [
    {
      id: 'template1',
      name: 'Modern Professional',
      description: 'Clean and modern design perfect for tech professionals, developers, and designers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      features: ['Responsive Design', 'Clean Layout', 'Professional Colors', 'Easy Navigation']
    },
    {
      id: 'template2',
      name: 'Creative Portfolio',
      description: 'Bold and creative design ideal for artists, photographers, and creative professionals.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
      features: ['Creative Layout', 'Bold Colors', 'Visual Focus', 'Artistic Elements']
    }
  ];

  const handleTemplateSelect = (templateId) => {
    navigate(`/form/${templateId}`);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Choose Your Portfolio Template
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Select a template that best represents your professional style and personality
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {templates.map((template) => (
          <Grid item xs={12} md={6} key={template.id}>
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
                height="300"
                image={template.image}
                alt={template.name}
                sx={{ 
                  objectFit: 'cover',
                  backgroundColor: template.id === 'template1' ? '#1976d2' : '#dc004e',
                  backgroundImage: `url(${template.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <Box
                sx={{
                  height: 300,
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: template.id === 'template1' ? '#1976d2' : '#dc004e',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}
              >
                {template.name}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {template.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {template.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Features:
                  </Typography>
                  {template.features.map((feature, index) => (
                    <Typography key={index} variant="body2" color="text.secondary">
                      • {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={() => handleTemplateSelect(template.id)}
                  sx={{ py: 1.5 }}
                >
                  Select This Template
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Paper sx={{ p: 3, backgroundColor: 'grey.50' }}>
          <Typography variant="h6" gutterBottom>
            What's Next?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            After selecting a template, you'll fill out a comprehensive form with your professional information, 
            including your bio, skills, projects, and more. Your portfolio will be generated instantly!
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default TemplateSelection;
