import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Portfolio Generator
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => navigate('/')}
            sx={{ 
              backgroundColor: isActive('/') ? 'rgba(255,255,255,0.1)' : 'transparent' 
            }}
          >
            Create Portfolio
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/professionals')}
            sx={{ 
              backgroundColor: isActive('/professionals') ? 'rgba(255,255,255,0.1)' : 'transparent' 
            }}
          >
            Browse Professionals
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
