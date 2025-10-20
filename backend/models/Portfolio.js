const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  template: {
    type: String,
    required: true,
    enum: ['template1', 'template2']
  },
  hero: {
    name: { type: String, required: true },
    title: { type: String, required: true },
    tagline: { type: String, required: true },
    profileImage: { type: String, default: '' }
  },
  about: {
    bio: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    location: { type: String, default: '' },
    socials: {
      linkedin: { type: String, default: '' },
      github: { type: String, default: '' },
      twitter: { type: String, default: '' },
      instagram: { type: String, default: '' }
    }
  },
  skills: [{
    type: String
  }],
  services: [{
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  portfolio: [{
    title: { type: String, required: true },
    image: { type: String, default: '' },
    description: { type: String, required: true }
  }],
  testimonials: [{
    quote: { type: String, required: true },
    author: { type: String, required: true },
    position: { type: String, default: '' }
  }],
  blog: {
    title: { type: String, default: '' },
    summary: { type: String, default: '' }
  },
  contact: {
    message: { type: String, default: '' },
    email: { type: String, required: true },
    phone: { type: String, default: '' }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
