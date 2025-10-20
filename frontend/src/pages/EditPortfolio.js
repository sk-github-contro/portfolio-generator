import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Paper, 
  TextField, 
  Button, 
  Grid, 
  Box,
  Stepper,
  Step,
  StepLabel,
  Chip,
  IconButton,
  CircularProgress,
  Alert
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const EditPortfolio = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    template: '',
    hero: {
      name: '',
      title: '',
      tagline: '',
      profileImage: ''
    },
    about: {
      bio: '',
      email: '',
      phone: '',
      location: '',
      socials: {
        linkedin: '',
        github: '',
        twitter: '',
        instagram: ''
      }
    },
    skills: [],
    services: [
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' }
    ],
    portfolio: [
      { title: '', image: '', description: '' },
      { title: '', image: '', description: '' },
      { title: '', image: '', description: '' }
    ],
    testimonials: [
      { quote: '', author: '', position: '' }
    ],
    blog: {
      title: '',
      summary: ''
    },
    contact: {
      message: '',
      email: '',
      phone: ''
    }
  });

  const [skillInput, setSkillInput] = useState('');

  const steps = [
    'Hero Section',
    'About Me',
    'Skills',
    'Services',
    'Portfolio',
    'Testimonials',
    'Blog',
    'Contact'
  ];

  useEffect(() => {
    fetchPortfolio();
  }, [id]);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/portfolios/${id}`);
      setFormData(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load portfolio');
      console.error('Error fetching portfolio:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNestedInputChange = (section, subSection, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subSection]: {
          ...prev[section][subSection],
          [field]: value
        }
      }
    }));
  };

  const handleArrayInputChange = (section, index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addTestimonial = () => {
    setFormData(prev => ({
      ...prev,
      testimonials: [...prev.testimonials, { quote: '', author: '', position: '' }]
    }));
  };

  const removeTestimonial = (index) => {
    if (formData.testimonials.length > 1) {
      setFormData(prev => ({
        ...prev,
        testimonials: prev.testimonials.filter((_, i) => i !== index)
      }));
    }
  };

  const handleNext = () => {
    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await axios.put(`${API_BASE_URL}/api/portfolios/${id}`, formData);
      navigate(`/portfolio/${id}`);
    } catch (error) {
      console.error('Error updating portfolio:', error);
      setError('Error updating portfolio. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0: // Hero Section
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                value={formData.hero.name}
                onChange={(e) => handleInputChange('hero', 'name', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Professional Title"
                value={formData.hero.title}
                onChange={(e) => handleInputChange('hero', 'title', e.target.value)}
                placeholder="e.g., Full Stack Developer, UI/UX Designer"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tagline"
                value={formData.hero.tagline}
                onChange={(e) => handleInputChange('hero', 'tagline', e.target.value)}
                placeholder="A brief, catchy description of yourself"
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Profile Image URL"
                value={formData.hero.profileImage}
                onChange={(e) => handleInputChange('hero', 'profileImage', e.target.value)}
                placeholder="https://example.com/your-photo.jpg"
              />
            </Grid>
          </Grid>
        );

      case 1: // About Me
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Bio"
                value={formData.about.bio}
                onChange={(e) => handleInputChange('about', 'bio', e.target.value)}
                multiline
                rows={4}
                placeholder="Tell us about yourself, your experience, and what makes you unique"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.about.email}
                onChange={(e) => handleInputChange('about', 'email', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                value={formData.about.phone}
                onChange={(e) => handleInputChange('about', 'phone', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                value={formData.about.location}
                onChange={(e) => handleInputChange('about', 'location', e.target.value)}
                placeholder="City, Country"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Social Media Links</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="LinkedIn"
                value={formData.about.socials.linkedin}
                onChange={(e) => handleNestedInputChange('about', 'socials', 'linkedin', e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="GitHub"
                value={formData.about.socials.github}
                onChange={(e) => handleNestedInputChange('about', 'socials', 'github', e.target.value)}
                placeholder="https://github.com/yourusername"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Twitter"
                value={formData.about.socials.twitter}
                onChange={(e) => handleNestedInputChange('about', 'socials', 'twitter', e.target.value)}
                placeholder="https://twitter.com/yourusername"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Instagram"
                value={formData.about.socials.instagram}
                onChange={(e) => handleNestedInputChange('about', 'socials', 'instagram', e.target.value)}
                placeholder="https://instagram.com/yourusername"
              />
            </Grid>
          </Grid>
        );

      case 2: // Skills
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Add Your Skills</Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <TextField
                  fullWidth
                  label="Skill"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                />
                <Button variant="contained" onClick={addSkill} startIcon={<AddIcon />}>
                  Add
                </Button>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {formData.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    onDelete={() => removeSkill(skill)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        );

      case 3: // Services
        return (
          <Grid container spacing={3}>
            {formData.services.map((service, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>Service {index + 1}</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Service Title"
                        value={service.title}
                        onChange={(e) => handleArrayInputChange('services', index, 'title', e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Service Description"
                        value={service.description}
                        onChange={(e) => handleArrayInputChange('services', index, 'description', e.target.value)}
                        multiline
                        rows={3}
                        required
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        );

      case 4: // Portfolio
        return (
          <Grid container spacing={3}>
            {formData.portfolio.map((project, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>Project {index + 1}</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Project Title"
                        value={project.title}
                        onChange={(e) => handleArrayInputChange('portfolio', index, 'title', e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Project Image URL"
                        value={project.image}
                        onChange={(e) => handleArrayInputChange('portfolio', index, 'image', e.target.value)}
                        placeholder="https://example.com/project-image.jpg"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Project Description"
                        value={project.description}
                        onChange={(e) => handleArrayInputChange('portfolio', index, 'description', e.target.value)}
                        multiline
                        rows={3}
                        required
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        );

      case 5: // Testimonials
        return (
          <Grid container spacing={3}>
            {formData.testimonials.map((testimonial, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">Testimonial {index + 1}</Typography>
                    {formData.testimonials.length > 1 && (
                      <IconButton onClick={() => removeTestimonial(index)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Quote"
                        value={testimonial.quote}
                        onChange={(e) => handleArrayInputChange('testimonials', index, 'quote', e.target.value)}
                        multiline
                        rows={3}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Author Name"
                        value={testimonial.author}
                        onChange={(e) => handleArrayInputChange('testimonials', index, 'author', e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Author Position"
                        value={testimonial.position}
                        onChange={(e) => handleArrayInputChange('testimonials', index, 'position', e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button variant="outlined" onClick={addTestimonial} startIcon={<AddIcon />}>
                Add Another Testimonial
              </Button>
            </Grid>
          </Grid>
        );

      case 6: // Blog
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Blog Title"
                value={formData.blog.title}
                onChange={(e) => handleInputChange('blog', 'title', e.target.value)}
                placeholder="Latest Blog Post Title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Blog Summary"
                value={formData.blog.summary}
                onChange={(e) => handleInputChange('blog', 'summary', e.target.value)}
                multiline
                rows={4}
                placeholder="Brief summary of your latest blog post or writing"
              />
            </Grid>
          </Grid>
        );

      case 7: // Contact
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Message"
                value={formData.contact.message}
                onChange={(e) => handleInputChange('contact', 'message', e.target.value)}
                multiline
                rows={3}
                placeholder="Default message for contact form"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Email"
                type="email"
                value={formData.contact.email}
                onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Phone"
                value={formData.contact.phone}
                onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
              />
            </Grid>
          </Grid>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Edit Portfolio
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" align="center" paragraph>
        Template: {formData.template === 'template1' ? 'Modern Professional' : 'Creative Portfolio'}
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Paper sx={{ p: 3, mb: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        {renderStepContent(activeStep)}
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default EditPortfolio;
