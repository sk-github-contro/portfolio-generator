import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Alert, Button, Container } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import axios from 'axios';
import API_BASE_URL from '../config/api';

// Import portfolio components
import HeroSection from '../components/portfolio/HeroSection';
import AboutMe from '../components/portfolio/AboutMe';
import Skills from '../components/portfolio/Skills';
import Services from '../components/portfolio/Services';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/portfolio/Testimonials';
import Blog from '../components/portfolio/Blog';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

const PortfolioPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolio();
  }, [id]);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/portfolios/${id}`);
      setPortfolio(response.data);
      setError(null);
    } catch (err) {
      setError('Portfolio not found');
      console.error('Error fetching portfolio:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !portfolio) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error || 'Portfolio not found'}
        </Alert>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/professionals')}
        >
          Back to Professionals
        </Button>
      </Container>
    );
  }

  return (
    <Box>
      {/* Back Button */}
      <Container maxWidth="lg">
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/professionals')}
          sx={{ mt: 2, mb: 1 }}
        >
          Back to Professionals
        </Button>
      </Container>

      {/* Portfolio Sections */}
      <HeroSection data={portfolio.hero} template={portfolio.template} />
      <AboutMe data={portfolio.about} template={portfolio.template} />
      <Skills data={portfolio.skills} template={portfolio.template} />
      <Services data={portfolio.services} template={portfolio.template} />
      <Portfolio data={portfolio.portfolio} template={portfolio.template} />
      <Testimonials data={portfolio.testimonials} template={portfolio.template} />
      <Blog data={portfolio.blog} template={portfolio.template} />
      <Contact data={portfolio.contact} template={portfolio.template} />
      <Footer data={portfolio} template={portfolio.template} />
    </Box>
  );
};

export default PortfolioPage;
