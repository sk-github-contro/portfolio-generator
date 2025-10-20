const mongoose = require('mongoose');
const Portfolio = require('./models/Portfolio');
require('dotenv').config();

const samplePortfolios = [
  {
    template: 'template1',
    hero: {
      name: 'Sarah Johnson',
      title: 'Full Stack Developer',
      tagline: 'Building amazing web experiences with modern technologies',
      profileImage: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    about: {
      bio: 'Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating user-friendly interfaces and robust backend systems. When I\'m not coding, you can find me hiking or reading about the latest tech trends.',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      socials: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        github: 'https://github.com/sarahjohnson',
        twitter: 'https://twitter.com/sarahcodes',
        instagram: ''
      }
    },
    skills: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Python'],
    services: [
      {
        title: 'Web Development',
        description: 'Custom web applications built with modern frameworks and best practices for optimal performance and user experience.'
      },
      {
        title: 'API Development',
        description: 'RESTful and GraphQL APIs designed for scalability, security, and seamless integration with frontend applications.'
      },
      {
        title: 'Database Design',
        description: 'Efficient database architecture and optimization for both SQL and NoSQL databases to ensure fast query performance.'
      }
    ],
    portfolio: [
      {
        title: 'E-Commerce Platform',
        image: 'https://picsum.photos/600/400?random=1',
        description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.'
      },
      {
        title: 'Task Management App',
        image: 'https://picsum.photos/600/400?random=2',
        description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.'
      },
      {
        title: 'Weather Dashboard',
        image: 'https://picsum.photos/600/400?random=3',
        description: 'A responsive weather dashboard that displays current conditions, forecasts, and weather maps using multiple API integrations.'
      }
    ],
    testimonials: [
      {
        quote: 'Sarah delivered an exceptional e-commerce platform that exceeded our expectations. Her attention to detail and technical expertise made the project a huge success.',
        author: 'Michael Chen',
        position: 'CEO, TechStart Inc.'
      },
      {
        quote: 'Working with Sarah was a pleasure. She understood our requirements perfectly and delivered a robust solution on time and within budget.',
        author: 'Emily Rodriguez',
        position: 'Product Manager, InnovateCorp'
      }
    ],
    blog: {
      title: 'Building Scalable React Applications',
      summary: 'Learn the best practices for creating React applications that can handle millions of users while maintaining excellent performance and developer experience.'
    },
    contact: {
      message: 'Ready to bring your ideas to life? Let\'s discuss your next project!',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567'
    }
  },
  {
    template: 'template2',
    hero: {
      name: 'Alex Rivera',
      title: 'Creative UI/UX Designer',
      tagline: 'Designing beautiful and intuitive digital experiences that users love',
      profileImage: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    about: {
      bio: 'Creative UI/UX designer with a passion for creating beautiful, functional, and user-centered designs. I specialize in mobile app design, web interfaces, and brand identity. My goal is to make technology more accessible and enjoyable for everyone.',
      email: 'alex.rivera@email.com',
      phone: '+1 (555) 987-6543',
      location: 'New York, NY',
      socials: {
        linkedin: 'https://linkedin.com/in/alexrivera',
        github: 'https://github.com/alexrivera',
        twitter: 'https://twitter.com/alexdesigns',
        instagram: 'https://instagram.com/alexdesigns'
      }
    },
    skills: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Prototyping', 'User Research', 'Wireframing', 'Visual Design', 'Interaction Design', 'HTML/CSS', 'JavaScript'],
    services: [
      {
        title: 'UI/UX Design',
        description: 'Complete user interface and experience design from concept to final implementation, ensuring optimal user satisfaction and business goals.'
      },
      {
        title: 'Mobile App Design',
        description: 'Native and cross-platform mobile app designs that provide seamless user experiences across iOS and Android devices.'
      },
      {
        title: 'Brand Identity',
        description: 'Comprehensive brand identity design including logos, color palettes, typography, and brand guidelines for consistent visual communication.'
      }
    ],
    portfolio: [
      {
        title: 'Fitness Tracking App',
        image: 'https://picsum.photos/600/400?random=4',
        description: 'A comprehensive fitness tracking mobile app with intuitive workout planning, progress tracking, and social features to keep users motivated.'
      },
      {
        title: 'Restaurant Website',
        image: 'https://picsum.photos/600/400?random=5',
        description: 'Modern restaurant website design featuring online ordering, reservation system, and beautiful food photography showcase.'
      },
      {
        title: 'SaaS Dashboard',
        image: 'https://picsum.photos/600/400?random=6',
        description: 'Complex data visualization dashboard for SaaS platform with intuitive navigation and comprehensive analytics display.'
      }
    ],
    testimonials: [
      {
        quote: 'Alex\'s design transformed our app from good to exceptional. The user engagement increased by 40% after implementing his designs.',
        author: 'Jessica Park',
        position: 'Founder, FitLife App'
      },
      {
        quote: 'Working with Alex was amazing. He understood our vision and brought it to life with beautiful, functional designs.',
        author: 'David Kim',
        position: 'Marketing Director, FoodieCorp'
      },
      {
        quote: 'Alex\'s attention to detail and user-centered approach made our product stand out in the competitive market.',
        author: 'Lisa Thompson',
        position: 'Product Owner, DataViz Inc.'
      }
    ],
    blog: {
      title: 'The Future of Mobile Design',
      summary: 'Exploring emerging trends in mobile design including voice interfaces, AR/VR integration, and accessibility-first design principles.'
    },
    contact: {
      message: 'Let\'s create something amazing together! I\'m always excited to work on new design challenges.',
      email: 'alex.rivera@email.com',
      phone: '+1 (555) 987-6543'
    }
  },
  {
    template: 'template1',
    hero: {
      name: 'Maria Garcia',
      title: 'Data Scientist & ML Engineer',
      tagline: 'Transforming data into actionable insights and intelligent solutions',
      profileImage: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    about: {
      bio: 'Data scientist and machine learning engineer with expertise in predictive modeling, natural language processing, and big data analytics. I help businesses make data-driven decisions and implement AI solutions that drive growth and efficiency.',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 456-7890',
      location: 'Austin, TX',
      socials: {
        linkedin: 'https://linkedin.com/in/mariagarcia',
        github: 'https://github.com/mariagarcia',
        twitter: 'https://twitter.com/mariadata',
        instagram: ''
      }
    },
    skills: ['Python', 'R', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'AWS', 'Docker'],
    services: [
      {
        title: 'Machine Learning Solutions',
        description: 'Custom ML models and algorithms designed to solve complex business problems and automate decision-making processes.'
      },
      {
        title: 'Data Analytics',
        description: 'Comprehensive data analysis and visualization to uncover insights and trends that drive strategic business decisions.'
      },
      {
        title: 'AI Consulting',
        description: 'Strategic AI consulting to help organizations identify opportunities for AI implementation and digital transformation.'
      }
    ],
    portfolio: [
      {
        title: 'Predictive Analytics Platform',
        image: 'https://picsum.photos/600/400?random=7',
        description: 'A comprehensive predictive analytics platform that helps businesses forecast sales, customer behavior, and market trends using advanced ML algorithms.'
      },
      {
        title: 'NLP Chatbot System',
        image: 'https://picsum.photos/600/400?random=8',
        description: 'Intelligent chatbot system with natural language processing capabilities for customer service automation and support.'
      },
      {
        title: 'Computer Vision App',
        image: 'https://picsum.photos/600/400?random=9',
        description: 'Real-time computer vision application for quality control in manufacturing using deep learning and image recognition.'
      }
    ],
    testimonials: [
      {
        quote: 'Maria\'s ML models helped us increase our sales forecasting accuracy by 85%. Her expertise is unmatched.',
        author: 'Robert Wilson',
        position: 'CTO, RetailTech Solutions'
      },
      {
        quote: 'The AI solution Maria developed transformed our customer service operations and reduced response time by 70%.',
        author: 'Amanda Foster',
        position: 'Operations Director, ServiceCorp'
      }
    ],
    blog: {
      title: 'The Impact of AI on Business Intelligence',
      summary: 'How artificial intelligence is revolutionizing business intelligence and decision-making processes in modern organizations.'
    },
    contact: {
      message: 'Ready to unlock the power of your data? Let\'s discuss how AI can transform your business.',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 456-7890'
    }
  }
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected for seeding...');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing portfolios
    await Portfolio.deleteMany({});
    console.log('Cleared existing portfolios...');
    
    // Insert sample portfolios
    const insertedPortfolios = await Portfolio.insertMany(samplePortfolios);
    console.log(`Successfully seeded ${insertedPortfolios.length} portfolios!`);
    
    // Display the created portfolios
    insertedPortfolios.forEach((portfolio, index) => {
      console.log(`${index + 1}. ${portfolio.hero.name} - ${portfolio.hero.title} (${portfolio.template})`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeding function
seedDatabase();
