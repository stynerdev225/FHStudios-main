#!/bin/bash

# Interactive Deployment script for Vercel

echo "====================================================="
echo "  Francisco Herrera Music Website Deployment Script"
echo "====================================================="
echo "This script will guide you through deploying the site to Vercel."
echo

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Build the project
echo "Step 1: Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "Build failed! Please fix the errors and try again."
    exit 1
fi
echo "Build completed successfully!"
echo

# Login to Vercel if needed
echo "Step 2: Verifying Vercel login status..."
vercel whoami &> /dev/null
if [ $? -ne 0 ]; then
    echo "You need to login to Vercel first."
    echo "Please follow the prompts to login with your Vercel account:"
    echo "Username: stynerdev225"
    echo "Email: stynerdev2025@aol.com"
    vercel login
else
    echo "Already logged in to Vercel."
fi
echo

# Deploy to Vercel production
echo "Step 3: Deploying to Vercel production..."
echo "This will deploy your site to production. Are you sure? (y/n)"
read -r response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo "Deploying to production..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo
        echo "✅ Deployment successful!"
        echo
        echo "Your site should now be live at: https://fhstudios.vercel.app"
        echo "(or your custom domain if configured)"
        echo
        echo "Next steps:"
        echo "1. Test the site thoroughly, especially the content editing functionality"
        echo "2. Share the CLIENT-EDITING-GUIDE.md with your clients"
        echo "3. Monitor the site for any issues"
        echo
        echo "For any issues, refer to the VERCEL-DEPLOYMENT-GUIDE.md file."
    else
        echo "❌ Deployment failed. Please check the error messages above."
    fi
else
    echo "Deployment cancelled."
fi
