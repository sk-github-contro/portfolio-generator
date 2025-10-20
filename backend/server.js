const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to database
connectDB().catch(err => {
  console.error('Failed to connect to database:', err);
  // Don't exit the process, let the server start anyway
});

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://portfolio-generator.vercel.app'] // Update this with your actual Vercel URL after deployment
    : ['http://localhost:3001', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/portfolios', require('./routes/portfolios'));

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Generator API is running!' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Portfolio Generator API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
