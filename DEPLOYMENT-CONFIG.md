# Francisco Herrera Music Website

# Deployment Configuration Guide

## Overview

This document provides comprehensive deployment configuration and best practices for the Francisco Herrera Music Website. It is intended for developers and DevOps professionals responsible for deploying and maintaining the site.

## Deployment Configuration

### 1. Vercel Deployment

The site is configured for optimal deployment on Vercel with the following specifications:

#### Environment Setup

- Copy `.env.example` to `.env` and configure all required environment variables
- Ensure all API keys and secrets are properly set up in Vercel's environment variables
- Set `VERCEL_ENV` to `production` for production deployments

#### Vercel Configuration

The `vercel.json` file contains:

- Build configuration for static assets
- API route handling
- Serverless function configuration
- Caching policies
- Redirect rules

#### Build Settings

- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js Version: 18.x (recommended)

### 2. API and Serverless Functions

The site uses several API endpoints that are deployed as serverless functions:

| Endpoint          | Purpose              | Timeout | Memory |
| ----------------- | -------------------- | ------- | ------ |
| `/api/save`       | Save edited content  | 10s     | 1024MB |
| `/api/upload`     | Handle media uploads | 60s     | 1024MB |
| `/api/track-edit` | Track quota usage    | 10s     | 512MB  |

### 3. Media Storage

Media assets are stored in Cloudflare R2:

- Bucket: `fh-website-assets`
- Access Control: Public Read, Authenticated Write
- Cache-Control: `max-age=31536000, immutable`

### 4. Security Considerations

#### Content Security Policy

```
default-src 'self';
img-src 'self' https://pub-69c5f4c6114b43b2bb233e67012060c4.r2.dev https://images.unsplash.com data:;
script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
font-src 'self' https://cdn.jsdelivr.net;
media-src 'self' https://pub-69c5f4c6114b43b2bb233e67012060c4.r2.dev;
```

#### Authentication

- Edit mode uses token-based authentication
- Tokens are validated on the server side
- Token expiration: 24 hours

### 5. Caching Strategy

#### Client-Side Caching

- HTML: `no-cache` (to ensure content changes are visible)
- CSS/JS: `max-age=31536000, immutable` (with versioned filenames)
- Images/Media: `max-age=31536000, immutable`

#### CDN Caching

- API routes: No caching
- Static assets: Aggressive caching with cache invalidation on deployment

## Performance Optimization

### 1. Image Optimization

- All images are served through Cloudflare R2
- WebP format is used where supported
- Responsive images with srcset for different device sizes
- Lazy loading implemented for below-the-fold images

### 2. JavaScript Optimization

- Code splitting based on routes
- Critical JavaScript inlined
- Non-critical JavaScript deferred
- Lighthouse performance score target: 90+

### 3. CSS Optimization

- Tailwind CSS with PurgeCSS for minimal CSS size
- Critical CSS inlined in head
- Non-critical CSS loaded asynchronously

## Monitoring and Analytics

### 1. Error Tracking

- Client-side errors logged to console and reported to server
- API errors logged with detailed context
- Error notification system for critical issues

### 2. Performance Monitoring

- Real User Monitoring (RUM) for performance metrics
- Server response time monitoring
- API endpoint performance tracking

### 3. Usage Analytics

- Content edit tracking
- Edit quota monitoring
- User interaction heatmaps

## Disaster Recovery

### 1. Backup Strategy

- Daily automated backups of content data
- Media assets backed up weekly
- Backup retention: 30 days

### 2. Rollback Procedure

In case of deployment issues:

1. Identify the problem through error logs
2. Rollback to previous deployment via Vercel dashboard
3. Restore content data if necessary
4. Verify site functionality after rollback

## Scaling Considerations

The current implementation is designed to handle:

- Up to 100,000 monthly visitors
- Up to 1,000 content edits per month
- Media storage up to 10GB

For higher traffic or usage:

- Implement more aggressive caching
- Consider dedicated image optimization service
- Upgrade to higher tier Vercel plan

---

## Deployment Checklist

Before each production deployment:

- [ ] Run all tests (`npm test`)
- [ ] Verify build succeeds locally (`npm run build`)
- [ ] Check for TypeScript/ESLint errors (`npm run lint`)
- [ ] Update environment variables if needed
- [ ] Verify API endpoints functionality
- [ ] Test content editing functionality
- [ ] Review Lighthouse performance score

---

## Support and Maintenance

### Contact Information

- **Development Team**: dev@fhstudios.com
- **DevOps Support**: devops@fhstudios.com
- **Emergency Contact**: +1 (555) 123-4567

### Maintenance Schedule

- Regular updates: First Monday of each month
- Security patches: As needed, within 24 hours of disclosure
- Feature deployments: Scheduled with client approval

---

© 2025 FH Studios - All Rights Reserved
