#!/bin/bash

echo "🚀 Setting up React Portfolio Generator..."

# Create .env file for backend
echo "📝 Creating environment file..."
cat > backend/.env << EOF
PORT=5001
MONGODB_URI=mongodb+srv://sohamUlwe305:Soham305Ulwe@clusterulwe.49hjd.mongodb.net/portfolio_generator?retryWrites=true&w=majority&appName=clusterUlwe
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
NODE_ENV=development
EOF

echo "✅ Environment file created!"

# Install dependencies
echo "📦 Installing dependencies..."
npm run install-all

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Make sure MongoDB is running on your system"
echo "2. Run 'npm run dev' to start both frontend and backend"
echo "3. Visit http://localhost:3001 to use the application"
echo ""
echo "For MongoDB Atlas users:"
echo "1. Update MONGODB_URI in backend/.env with your Atlas connection string"
echo "2. Then run 'npm run dev'"
