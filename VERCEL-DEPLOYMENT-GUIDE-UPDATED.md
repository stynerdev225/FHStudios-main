# Vercel Deployment Instructions (Updated)

Follow these steps to deploy your site to Vercel:

## Option 1: Using the Interactive Deployment Script (Recommended)

1. **Run the deployment script**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```
   This script will guide you through the entire deployment process:
   - Building the project
   - Logging in to Vercel
   - Deploying to production
   - Providing next steps

## Option 2: Manual Deployment

### 1. **Login to Vercel**

```bash
vercel login
```

- Choose your preferred login method (GitHub, Google, Email, etc.)
- Use these credentials:
  - **Vercel Username**: stynerdev225
  - **Vercel Email**: stynerdev2025@aol.com

### 2. **Build the Project**

```bash
npm run build
```

- Verify the build completes successfully
- The output will be in the `dist` directory

### 3. **Deploy the Project**

```bash
vercel
```

- When prompted for settings:
  - Set up and deploy "FHStudios"? (Y/n) → Yes
  - Which scope should contain your project? → Select your account
  - Link to existing project? (y/N) → No
  - What's your project's name? → fhstudios (or your preferred name)
  - In which directory is your code located? → ./
  - Want to override the settings? (y/N) → No

### 4. **Production Deployment**

```bash
vercel --prod
```

- This will deploy your site to the production environment
- Your site will be available at the URL provided in the output

## Important Information

- **Vercel Username**: stynerdev225
- **Vercel Email**: stynerdev2025@aol.com
- **Expected Site URL**: https://fhstudios.vercel.app (unless a custom domain is configured)

## Environment Variables

Make sure these environment variables are set in the Vercel dashboard:

| Variable                 | Description                           | Value                            |
| ------------------------ | ------------------------------------- | -------------------------------- |
| EDIT_TOKEN_SECRET        | Secret key for validating edit tokens | your-secure-token-here           |
| STORAGE_TYPE             | Storage provider for media assets     | cloudflare                       |
| CLOUDFLARE_R2_ACCOUNT_ID | Cloudflare account ID                 | 69c5f4c6114b43b2bb233e67012060c4 |
| CLOUDFLARE_ACCESS_KEY    | Cloudflare access key                 | your-access-key-here             |
| CLOUDFLARE_SECRET_KEY    | Cloudflare secret key                 | your-secret-key-here             |
| DEFAULT_QUOTA            | Default edit quota limit              | 100                              |

## Post-Deployment Verification

After deployment, verify these critical components:

1. **Content Editing**

   - Visit your site with the edit token: `https://your-site.vercel.app/?edit=your-token`
   - Verify you can edit text, images, and videos
   - Confirm changes persist after refresh

2. **API Endpoints**

   - `/api/save` - Test saving content
   - `/api/upload` - Test uploading media
   - `/api/status` - Check health status
   - `/api/track-edit` - Verify quota tracking

3. **Media Assets**
   - Ensure all images and videos load correctly
   - Test replacing media through the edit interface

## Troubleshooting

If you encounter any issues:

1. **Build Errors**

   - Check the build logs in the Vercel dashboard
   - Ensure all dependencies are properly installed
   - Verify that build scripts are correctly set up in package.json

2. **API Routes Not Working**

   - Verify the vercel.json configuration is correct
   - Check for proper environment variables
   - Look for CORS issues in the browser console

3. **Content Editing Issues**

   - Verify the edit token is correct
   - Check browser console for JavaScript errors
   - Ensure the API endpoints are responding correctly

4. **Media Upload Problems**
   - Verify Cloudflare R2 credentials are correct
   - Check for file size or format limitations
   - Examine browser network requests for errors

## Domain Configuration

To set up a custom domain:

1. Go to the Vercel dashboard → Your Project → Settings → Domains
2. Add your domain name
3. Follow the DNS configuration instructions provided
4. Verify SSL certificate is properly provisioned

## Next Steps After Deployment

1. Test the live site thoroughly, especially the content editing functionality
2. Share the CLIENT-EDITING-GUIDE.md with your clients
3. Set up monitoring for the /api/status endpoint
4. Consider implementing regular backups of content

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Troubleshooting Vercel Deployments](https://vercel.com/guides/deploying-react-with-vercel)
