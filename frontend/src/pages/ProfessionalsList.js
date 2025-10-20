import React, { useState, useEffect } from 'react';
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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  CircularProgress,
  Alert,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const ProfessionalsList = () => {
  const navigate = useNavigate();
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    skills: '',
    role: ''
  });

  useEffect(() => {
    fetchPortfolios();
  }, [filters]);

  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filters.skills) params.append('skills', filters.skills);
      if (filters.role) params.append('role', filters.role);
      
      const response = await axios.get(`${API_BASE_URL}/api/portfolios?${params.toString()}`);
      setPortfolios(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch portfolios');
      console.error('Error fetching portfolios:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clearFilters = () => {
    setFilters({ skills: '', role: '' });
  };

  const handleViewPortfolio = (id) => {
    navigate(`/portfolio/${id}`);
  };

  const handleEditPortfolio = (id) => {
    navigate(`/edit/${id}`);
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Professional Portfolios
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Discover talented professionals and their work
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Filters */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Filter Professionals
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Filter by Skills"
              value={filters.skills}
              onChange={(e) => handleFilterChange('skills', e.target.value)}
              placeholder="e.g., React, Design, Marketing"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Filter by Role"
              value={filters.role}
              onChange={(e) => handleFilterChange('role', e.target.value)}
              placeholder="e.g., Developer, Designer, Manager"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="outlined"
              onClick={clearFilters}
              fullWidth
              sx={{ height: '56px' }}
            >
              Clear Filters
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Portfolio Cards */}
      {portfolios.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No portfolios found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Try adjusting your filters or create a new portfolio
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {portfolios.map((portfolio) => (
            <Grid item xs={12} sm={6} md={4} key={portfolio._id}>
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
                  image={portfolio.hero.profileImage || 'https://via.placeholder.com/300x200/1976d2/ffffff?text=Profile+Image'}
                  alt={portfolio.hero.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {portfolio.hero.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {portfolio.hero.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {portfolio.hero.tagline}
                  </Typography>
                  
                  {/* Bio Preview */}
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {portfolio.about.bio.length > 100 
                      ? `${portfolio.about.bio.substring(0, 100)}...` 
                      : portfolio.about.bio
                    }
                  </Typography>

                  {/* Skills */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {portfolio.skills.slice(0, 3).map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                      {portfolio.skills.length > 3 && (
                        <Chip
                          label={`+${portfolio.skills.length - 3} more`}
                          size="small"
                          variant="outlined"
                        />
                      )}
                    </Box>
                  </Box>

                  {/* Location */}
                  {portfolio.about.location && (
                    <Typography variant="body2" color="text.secondary">
                      📍 {portfolio.about.location}
                    </Typography>
                  )}
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleViewPortfolio(portfolio._id)}
                    sx={{ mb: 1 }}
                  >
                    View Portfolio
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handleEditPortfolio(portfolio._id)}
                  >
                    Edit Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Create New Portfolio CTA */}
      <Box sx={{ textAlign: 'center', mt: 6, py: 4 }}>
        <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
          <Typography variant="h5" gutterBottom>
            Don't see your portfolio here?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Create your professional portfolio in minutes with our easy-to-use templates
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/')}
          >
            Create Your Portfolio
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProfessionalsList;
