#!/bin/bash

# Simple deployment script for Vercel with minimal interactivity

echo "==============================================="
echo "  Francisco Herrera Website Deployment Tool"
echo "==============================================="
echo ""

# Build the project first
echo "Step 1: Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed! Deployment cannot continue."
  exit 1
fi

echo "✅ Build completed successfully!"
echo ""

# Create a simplified vercel.json for cleaner deployment
echo "Step 2: Creating deployment configuration..."
cat > vercel.json << EOF
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/\$1"
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/.*",
      "dest": "/index.html"
    }
  ]
}
EOF

echo "✅ Deployment configuration created!"
echo ""

# Use npx for Vercel deployment
echo "Step 3: Deploying to Vercel..."
echo "Please follow the prompts to log in (if needed) and set up your project."
echo ""

npx vercel@latest --yes

if [ $? -ne 0 ]; then
  echo ""
  echo "❌ Deployment encountered an issue."
  echo ""
  echo "Alternative deployment options:"
  echo "1. Use the Vercel dashboard: https://vercel.com/dashboard"
  echo "2. Try deploying from GitHub directly"
  echo "3. Check SIMPLIFIED-DEPLOYMENT.md for manual steps"
  exit 1
fi

echo ""
echo "✅ Preview deployment completed!"
echo ""
echo "To deploy to production, run:"
echo "npx vercel@latest --prod"
echo ""
echo "Or visit the Vercel dashboard to promote to production:"
echo "https://vercel.com/dashboard"
