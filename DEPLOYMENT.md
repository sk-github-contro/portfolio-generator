# Deployment Guide - React Portfolio Generator

This guide will help you deploy your React Portfolio Generator to **Vercel** (frontend) and **Render** (backend).

## 🚀 Backend Deployment (Render)

### Step 1: Prepare Backend for Render

1. **Create a GitHub repository** and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio-generator.git
   git push -u origin main
   ```

### Step 2: Deploy to Render

1. **Go to [Render.com](https://render.com)** and sign up/login
2. **Click "New +"** → **"Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service**:
   - **Name**: `portfolio-generator-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

5. **Add Environment Variables**:
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://sohamUlwe305:Soham305Ulwe@clusterulwe.49hjd.mongodb.net/portfolio_generator?retryWrites=true&w=majority&appName=clusterUlwe
   JWT_SECRET=your_production_jwt_secret_here
   ```

6. **Click "Create Web Service"**

### Step 3: Get Your Render URL

After deployment, you'll get a URL like: `https://portfolio-generator-backend.onrender.com`

## 🎨 Frontend Deployment (Vercel)

### Step 1: Update API Configuration

1. **Update the API URL** in `frontend/src/config/api.js`:
   ```javascript
   const API_BASE_URL = process.env.NODE_ENV === 'production' 
     ? 'https://your-render-app.onrender.com' // Replace with your actual Render URL
     : 'http://localhost:5001';
   ```

2. **Update CORS** in `backend/server.js`:
   ```javascript
   app.use(cors({
     origin: process.env.NODE_ENV === 'production' 
       ? ['https://your-vercel-app.vercel.app'] // Replace with your Vercel URL
       : ['http://localhost:3001', 'http://localhost:3000'],
     credentials: true
   }));
   ```

### Step 2: Deploy to Vercel

1. **Go to [Vercel.com](https://vercel.com)** and sign up/login
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure the project**:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

5. **Add Environment Variables** (if needed):
   ```
   NODE_ENV=production
   ```

6. **Click "Deploy"**

### Step 3: Update Backend CORS

After getting your Vercel URL, update the CORS configuration in your Render backend:

1. **Go to Render Dashboard** → **Your Backend Service** → **Environment**
2. **Add/Update Environment Variable**:
   ```
   FRONTEND_URL=https://your-vercel-app.vercel.app
   ```

3. **Update server.js** to use this environment variable:
   ```javascript
   app.use(cors({
     origin: process.env.FRONTEND_URL || 'http://localhost:3001',
     credentials: true
   }));
   ```

4. **Redeploy** your backend service

## 🔧 Post-Deployment Steps

### 1. Seed the Production Database

1. **SSH into your Render service** or use Render's shell
2. **Run the seed command**:
   ```bash
   npm run seed
   ```

### 2. Test Your Deployment

1. **Visit your Vercel URL**
2. **Test all features**:
   - Template selection
   - Portfolio creation
   - Viewing portfolios
   - Editing portfolios
   - Filtering professionals

## 📋 Deployment Checklist

### Backend (Render)
- [ ] Repository pushed to GitHub
- [ ] Render service created
- [ ] Environment variables set
- [ ] Service deployed successfully
- [ ] Health check working: `https://your-app.onrender.com/api/health`
- [ ] Database seeded with sample data

### Frontend (Vercel)
- [ ] API configuration updated with Render URL
- [ ] Vercel project created
- [ ] Frontend deployed successfully
- [ ] CORS updated in backend
- [ ] All features working in production

## 🎯 Your Live URLs

After deployment, you'll have:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-app.onrender.com`
- **API Health**: `https://your-app.onrender.com/api/health`

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure frontend URL is added to backend CORS
2. **API Not Working**: Check if backend URL is correct in frontend config
3. **Database Issues**: Verify MongoDB connection string
4. **Build Failures**: Check Node.js version compatibility

### Useful Commands:

```bash
# Check backend logs
# Go to Render Dashboard → Your Service → Logs

# Test API endpoints
curl https://your-app.onrender.com/api/health
curl https://your-app.onrender.com/api/portfolios

# Check frontend build
cd frontend
npm run build
```

## 🎉 Success!

Once deployed, your React Portfolio Generator will be live and accessible to users worldwide!

**Next Steps:**
- Share your live portfolio generator
- Add custom domain (optional)
- Monitor usage and performance
- Add more features as needed
