#!/bin/bash

echo "🚀 Portfolio Generator Deployment Helper"
echo "========================================"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Portfolio Generator"
    echo "✅ Git repository initialized"
    echo ""
    echo "🔗 Next steps:"
    echo "1. Create a GitHub repository"
    echo "2. Add remote: git remote add origin https://github.com/yourusername/portfolio-generator.git"
    echo "3. Push: git push -u origin main"
    echo ""
else
    echo "✅ Git repository already exists"
    echo "📤 Pushing latest changes..."
    git add .
    git commit -m "Update for deployment"
    git push
    echo "✅ Changes pushed to GitHub"
fi

echo ""
echo "🎯 Deployment Steps:"
echo "==================="
echo ""
echo "1. BACKEND (Render):"
echo "   - Go to https://render.com"
echo "   - Create new Web Service"
echo "   - Connect your GitHub repo"
echo "   - Set Root Directory: 'backend'"
echo "   - Add environment variables (see DEPLOYMENT.md)"
echo ""
echo "2. FRONTEND (Vercel):"
echo "   - Go to https://vercel.com"
echo "   - Import your GitHub repo"
echo "   - Set Root Directory: 'frontend'"
echo "   - Deploy"
echo ""
echo "3. UPDATE CONFIG:"
echo "   - Update API URLs in frontend/src/config/api.js"
echo "   - Update CORS in backend/server.js"
echo "   - Redeploy both services"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
echo ""
echo "🎉 Happy Deploying!"
