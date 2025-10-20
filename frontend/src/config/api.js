const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-render-app.onrender.com' // Replace with your Render URL
  : 'http://localhost:5001';

export default API_BASE_URL;
