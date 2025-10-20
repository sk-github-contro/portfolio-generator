# React Portfolio Generator

A dynamic portfolio generator built with React frontend and Express.js backend with MongoDB. Users can select from two professional templates, fill out a comprehensive form, and generate beautiful portfolio pages.

## Features

- **Template Selection**: Choose from 2 professional portfolio templates
- **Multi-Section Form**: Comprehensive form with 8 sections covering all portfolio aspects
- **Dynamic Portfolio Pages**: Generated portfolios with all sections (Hero, About, Skills, Services, Portfolio, Testimonials, Blog, Contact, Footer)
- **Professional Listings**: Browse and filter professionals by skills and role
- **Edit Functionality**: Update existing portfolios
- **Responsive Design**: Works on all devices
- **API-Based**: Full CRUD operations with MongoDB

## Tech Stack

### Frontend
- React 18
- Material-UI (MUI)
- React Router
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Project Structure

```
React Portfolio Generator/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── Portfolio.js
│   ├── routes/
│   │   └── portfolios.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── portfolio/
│   │   │       ├── HeroSection.js
│   │   │       ├── AboutMe.js
│   │   │       ├── Skills.js
│   │   │       ├── Services.js
│   │   │       ├── Portfolio.js
│   │   │       ├── Testimonials.js
│   │   │       ├── Blog.js
│   │   │       ├── Contact.js
│   │   │       └── Footer.js
│   │   ├── pages/
│   │   │   ├── TemplateSelection.js
│   │   │   ├── PortfolioForm.js
│   │   │   ├── ProfessionalsList.js
│   │   │   ├── PortfolioPage.js
│   │   │   └── EditPortfolio.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-portfolio-generator
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio_generator
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. **Start MongoDB**
   
   Make sure MongoDB is running on your system. If using MongoDB Atlas, update the `MONGODB_URI` in your `.env` file.

5. **Run the application**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend development server (port 3000).

### Individual Commands

- **Backend only**: `npm run server`
- **Frontend only**: `npm run client`
- **Install all dependencies**: `npm run install-all`

## Usage

1. **Create Portfolio**
   - Visit `http://localhost:3000`
   - Select a template (Modern Professional or Creative Portfolio)
   - Fill out the 8-section form
   - Submit to create your portfolio

2. **Browse Professionals**
   - Visit `http://localhost:3000/professionals`
   - Filter by skills or role
   - Click "View Portfolio" to see full portfolio
   - Click "Edit Profile" to modify existing portfolio

3. **Portfolio Pages**
   - Each portfolio has a unique URL: `/portfolio/:id`
   - Responsive design with template-specific styling
   - All sections dynamically populated from form data

## API Endpoints

### Portfolios
- `GET /api/portfolios` - Get all portfolios (with optional filtering)
- `GET /api/portfolios/:id` - Get single portfolio
- `POST /api/portfolios` - Create new portfolio
- `PUT /api/portfolios/:id` - Update portfolio
- `DELETE /api/portfolios/:id` - Delete portfolio

### Query Parameters
- `skills` - Filter by skills (comma-separated)
- `role` - Filter by role/title

## Portfolio Templates

### Template 1: Modern Professional
- Clean, corporate design
- Blue color scheme
- Professional layout
- Suitable for developers, designers, consultants

### Template 2: Creative Portfolio
- Bold, artistic design
- Gradient color schemes
- Creative layouts with rotations and animations
- Suitable for artists, photographers, creative professionals

## Form Sections

1. **Hero Section**: Name, title, tagline, profile image
2. **About Me**: Bio, contact info, social media links
3. **Skills**: Dynamic skill tags
4. **Services**: 3 service offerings with descriptions
5. **Portfolio**: 3 featured projects
6. **Testimonials**: Client quotes (1-3 testimonials)
7. **Blog**: Latest blog post (optional)
8. **Contact**: Contact form and information

## Features Implemented

✅ Template selection with 2 professional designs  
✅ Multi-section form with all required fields  
✅ Profile cards with filtering capabilities  
✅ Dynamic portfolio pages with template-specific styling  
✅ Full CRUD API with MongoDB  
✅ Edit portfolio functionality  
✅ Responsive design  
✅ Professional UI with Material-UI  

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support or questions, please open an issue in the repository.
