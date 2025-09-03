// deployToVercel.js
// A simple Node.js script to deploy to Vercel using their API

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log('🚀 Starting Vercel deployment process...');

// Get the current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure we're in the project directory
const projectDir = __dirname;
console.log(`📂 Project directory: ${projectDir}`);

// Make sure the project is built
try {
  console.log('🔨 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Check if the dist directory exists and has files
const distDir = path.join(projectDir, 'dist');
if (!fs.existsSync(distDir)) {
  console.error('❌ Dist directory does not exist!');
  process.exit(1);
}

const distFiles = fs.readdirSync(distDir);
if (distFiles.length === 0) {
  console.error('❌ Dist directory is empty!');
  process.exit(1);
}

console.log(`📦 Found ${distFiles.length} files in dist directory`);

// Deploy using npx to avoid global installation issues
try {
  console.log('🌐 Deploying to Vercel...');
  console.log('👉 Please follow the prompts to login and configure your deployment');
  
  // Use npx to run vercel without installing globally
  execSync('npx vercel@latest --yes', { stdio: 'inherit' });
  
  console.log('');
  console.log('✅ Preview deployment completed!');
  console.log('');
  console.log('🚀 To deploy to production, run:');
  console.log('npx vercel@latest --prod');
  console.log('');
  console.log('📝 Alternatively, you can deploy via the Vercel dashboard:');
  console.log('https://vercel.com/dashboard');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  console.log('');
  console.log('🔍 Alternative deployment options:');
  console.log('1. Use the Vercel dashboard: https://vercel.com/dashboard');
  console.log('2. Try deploying from the GitHub repository directly');
  console.log('3. Check the SIMPLIFIED-DEPLOYMENT.md file for manual steps');
}
