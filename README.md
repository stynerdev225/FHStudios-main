# Francisco Herrera Music Website

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A modern, responsive website for musician Francisco Herrera featuring inline content editing capabilities, music showcase, online store, and fan engagement tools.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Client-Editable Content**: In-place editing with security controls
- **Music Showcase**: Audio player, discography, and music links
- **Online Store**: Physical and digital products with secure checkout
- **Fan Engagement**: Newsletter signup, social media integration
- **Performance Optimized**: Fast loading with high lighthouse scores

## Technologies

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Inline Editing**: ContentTools / Medium Editor
- **API**: Serverless functions on Vercel
- **Storage**: Cloudflare R2 for media assets
- **Authentication**: JWT-based token system for edit mode
- **Deployment**: Vercel with CI/CD via GitHub Actions

## Project Structure

```
├── api/                 # Serverless API functions
├── public/              # Static assets
├── src/
│   ├── api/             # API client functions
│   ├── components/      # React components
│   ├── editing/         # Content editing utilities
│   ├── pages/           # Page components
│   ├── store/           # State management
│   ├── App.tsx          # Main app component
│   └── main.tsx         # App entry point
├── .github/workflows/   # CI/CD configuration
├── CLIENT-EDITING-GUIDE.md   # Documentation for clients
├── DEPLOYMENT-CONFIG.md      # Deployment documentation
└── VERCEL-DEPLOYMENT-GUIDE.md # Vercel-specific guide
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/fstudios/FHStudios.git
cd FHStudios

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Setup

Copy `.env.example` to `.env` and configure the required environment variables:

```bash
cp .env.example .env
```

## Deployment

This project is configured for deployment on Vercel. See the [VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md) for detailed instructions.

For a quick deployment:

```bash
# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Content Editing

The site includes client-editable content capabilities. See [CLIENT-EDITING-GUIDE.md](./CLIENT-EDITING-GUIDE.md) for instructions on how to use this feature.

To enable edit mode, add the edit token to the URL:

```
https://your-site.com/?edit=YOUR_TOKEN_HERE
```

## Documentation

- [Client Editing Guide](./CLIENT-EDITING-GUIDE.md)
- [Vercel Deployment Guide](./VERCEL-DEPLOYMENT-GUIDE.md)
- [Deployment Configuration](./DEPLOYMENT-CONFIG.md)
- [Project Deployment Readiness](./PDR.md)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Francisco Herrera Studios - [contact@fhstudios.com](mailto:contact@fhstudios.com)

---

© 2025 FH Studios - All Rights Reserved
