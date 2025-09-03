#!/bin/bash

# Direct deployment script with no interactivity

echo "Starting direct deployment to Vercel..."

# Install Vercel CLI globally if needed
npm install -g vercel@latest

# Login with environment variables to avoid interactive prompts
export VERCEL_TOKEN="your-vercel-token"
export VERCEL_PROJECT="fhstudios"
export VERCEL_ORG="stynerdev225"

# Deploy with all confirmations automatic
vercel --prod --confirm --token $VERCEL_TOKEN --yes

echo "Deployment command executed. Please check the Vercel dashboard for status."
echo "Dashboard URL: https://vercel.com/dashboard"
