# SiteGround Deployment Guide for FlexusNet Website

## Overview
Your Next.js website is configured for static export, which means it generates static HTML, CSS, and JavaScript files that can be hosted on SiteGround's shared hosting.

## Prerequisites
- SiteGround hosting account (any plan that supports static files)
- FTP/SFTP access or File Manager access in SiteGround cPanel
- Your domain name configured in SiteGround

## Step 1: Build Your Static Website

1. **Open terminal/command prompt** in your project directory
2. **Build the production version:**
   ```bash
   npm run build
   ```
   
   This will create an `out` folder with all your static files.

3. **Verify the build:**
   - Check that the `out` folder was created
   - The folder should contain:
     - `index.html`
     - `about/` folder
     - `_next/` folder (with static assets)
     - All files from `public/` folder

## Step 2: Prepare Files for Upload

The `out` folder contains everything you need to upload. You can:
- Upload the entire contents of the `out` folder
- Or zip the `out` folder contents for easier upload

## Step 3: Access SiteGround File Manager

1. **Log into SiteGround cPanel**
2. **Navigate to File Manager** (or use FTP/SFTP client like FileZilla)
3. **Go to your domain's root directory:**
   - Usually: `public_html/` for main domain
   - Or: `public_html/subdomain/` for subdomain

## Step 4: Upload Files

### Option A: Using File Manager (cPanel)
1. Delete any existing files in `public_html/` (backup first if needed)
2. Upload all files from your `out` folder
3. Extract if you uploaded a zip file
4. Make sure `index.html` is in the root of `public_html/`

### Option B: Using FTP/SFTP
1. Connect to your SiteGround FTP server
2. Navigate to `public_html/`
3. Upload all contents from the `out` folder
4. Maintain the folder structure

## Step 5: Configure .htaccess for Routing

Since Next.js uses client-side routing, you need to redirect all routes to `index.html`. Create or update `.htaccess` in your `public_html/` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle client-side routing
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  
  # Force HTTPS (optional but recommended)
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Security headers (optional)
  <IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
  </IfModule>
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Step 6: Verify Deployment

1. **Visit your domain** in a browser
2. **Test all pages:**
   - Homepage: `https://yourdomain.com/`
   - About: `https://yourdomain.com/about/`
   - Contact form functionality
   - All images loading correctly
   - Navigation working

3. **Check browser console** for any errors

## Step 7: Update Contact Form for SiteGround

Your contact form currently uses a Next.js API route which won't work on static hosting. A PHP handler has been created for you.

### Update the Form Component

Before building, update `components/ServiceRequestForm.tsx`:

Change line 131 from:
```typescript
const response = await fetch('/api/contact', {
```

To:
```typescript
const response = await fetch('/contact-handler.php', {
```

Or use environment detection:
```typescript
const apiEndpoint = process.env.NODE_ENV === 'production' 
  ? '/contact-handler.php' 
  : '/api/contact';
const response = await fetch(apiEndpoint, {
```

### PHP Handler Configuration

1. **Edit `public/contact-handler.php`** before building:
   - Update line 30: Change `$to = 'service@flexusnet.com';` to your actual email
   - The file will be included in the `out` folder when you build

2. **After upload**, verify the PHP file is in `public_html/contact-handler.php`

3. **Test the form** to ensure emails are being sent

### Alternative: Use EmailJS (No Server Required)

If you prefer not to use PHP, you can use EmailJS:
1. Sign up at https://www.emailjs.com/
2. Configure your email service
3. Update the form to use EmailJS SDK

## Troubleshooting

### Images not loading
- Check that all files from `public/` folder were uploaded
- Verify image paths are correct
- Check browser console for 404 errors

### Routes not working
- Ensure `.htaccess` file is uploaded and configured correctly
- Check that `mod_rewrite` is enabled on SiteGround
- Verify `index.html` is in the root directory

### CSS/JS not loading
- Check that `_next/` folder was uploaded completely
- Verify file permissions (should be 644 for files, 755 for folders)
- Clear browser cache

### 404 errors
- Make sure all files from `out` folder were uploaded
- Check folder structure matches the build output
- Verify `.htaccess` redirect rules

## Updating Your Website

When you make changes:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload only changed files** (or upload entire `out` folder contents)

3. **Clear SiteGround cache** (if using caching plugins)

## Alternative: Automated Deployment

You can set up automated deployment using:
- **GitHub Actions** to build and deploy
- **FTP deployment scripts**
- **SiteGround's Git integration** (if available on your plan)

## Notes

- Your site uses static export, so no Node.js server is needed
- All images are optimized and unoptimized (as per config)
- The site works with both local development and production builds
- GitHub Pages basePath is not needed for SiteGround (use empty basePath)

## Support

If you encounter issues:
1. Check SiteGround's documentation
2. Verify file permissions
3. Check error logs in cPanel
4. Test with a simple HTML file first to verify hosting works

