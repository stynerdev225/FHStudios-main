# Manual Vercel Deployment Steps

Follow these steps to complete your Vercel deployment:

## 1. Complete the Login Process

When prompted by the deployment script, follow these steps:

1. Choose your preferred login method (GitHub, Google, Email, etc.)
2. Use your Vercel credentials:
   - **Username**: stynerdev225
   - **Email**: stynerdev2025@aol.com

## 2. Configure Project Settings

When prompted with project settings:

1. Set up and deploy "FHStudios"? → Yes
2. Which scope should contain your project? → Select your account (stynerdev225)
3. Link to existing project? → No
4. What's your project's name? → fhstudios
5. In which directory is your code located? → ./
6. Want to override the settings? → No

## 3. Production Deployment

After the initial deployment completes:

1. When asked "This will deploy your site to production. Are you sure?" → Type `y` and press Enter

## 4. Verify Deployment

After deployment completes:

1. Copy the deployment URL provided in the terminal (typically https://fhstudios.vercel.app)
2. Open the URL in your browser
3. Verify the site loads correctly
4. Test editing functionality by appending `?edit=your-token` to the URL

## 5. Set Environment Variables (if needed)

If you need to set environment variables:

1. Go to the Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the necessary variables from the .env.example file

## 6. Next Steps

After successful deployment:

1. Share the site URL with stakeholders
2. Provide the CLIENT-EDITING-GUIDE.md to clients
3. Monitor the site for any issues
4. Set up a custom domain if needed
