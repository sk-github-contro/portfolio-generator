import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import TemplateSelection from './pages/TemplateSelection';
import PortfolioForm from './pages/PortfolioForm';
import ProfessionalsList from './pages/ProfessionalsList';
import PortfolioPage from './pages/PortfolioPage';
import EditPortfolio from './pages/EditPortfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<TemplateSelection />} />
          <Route path="/form/:template" element={<PortfolioForm />} />
          <Route path="/professionals" element={<ProfessionalsList />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
          <Route path="/edit/:id" element={<EditPortfolio />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
