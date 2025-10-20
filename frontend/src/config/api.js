const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://portfolio-generator-backend.onrender.com' // Update this with your actual Render URL after deployment
  : 'http://localhost:5001';

export default API_BASE_URL;
