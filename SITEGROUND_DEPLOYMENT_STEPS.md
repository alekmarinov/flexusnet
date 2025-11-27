# Deploy FlexusNet Website to SiteGround - Step by Step

## Prerequisites
- ✅ SiteGround account with flexusnet.com domain
- ✅ Access to SiteGround Site Tools dashboard
- ✅ Your website built and ready

## Step 1: Build Your Website Locally

1. **Open terminal/command prompt** in your project folder:
   ```bash
   cd C:\Users\flexu\Desktop\PROJECTS\flexusnet
   ```

2. **Build the production version:**
   ```bash
   npm run build
   ```

3. **Wait for build to complete** - you should see:
   ```
   ✓ Static files exported
   ```

4. **Verify the `out` folder was created** in your project directory

## Step 2: Prepare the Contact Handler

1. **Edit `public/contact-handler.php`** (if not already done):
   - Open the file
   - Find line 30: `$to = 'service@flexusnet.com';`
   - Make sure this is your actual email address
   - Save the file

2. **Rebuild** (the PHP file will be included in the `out` folder):
   ```bash
   npm run build
   ```

## Step 3: Access SiteGround File Manager

1. **Log into SiteGround** (you're already there based on the screenshot)
2. **Click on "File Manager"** in the left sidebar (under "Site" section)
3. **Navigate to your domain's root folder:**
   - Look for `public_html` folder
   - This is where your website files should go
   - **IMPORTANT:** If you see `public_html/flexusnet.com/` or similar, use that folder instead

## Step 4: Clean Existing Files (if any)

1. **In File Manager**, navigate to `public_html/`
2. **Select all existing files** (if any)
3. **Delete them** (or backup first if needed)
   - This ensures a clean deployment

## Step 5: Upload Your Website Files

### Option A: Upload via File Manager (Recommended)

1. **In File Manager**, make sure you're in `public_html/` folder
2. **Click "Upload" button** (usually at the top)
3. **Select all files from your `out` folder:**
   - Go to: `C:\Users\flexu\Desktop\PROJECTS\flexusnet\out\`
   - Select ALL files and folders inside `out/`
   - **IMPORTANT:** Upload the CONTENTS of `out/`, not the `out` folder itself
4. **Upload the files**
5. **Wait for upload to complete**

### Option B: Upload via FTP (Alternative)

1. **In SiteGround**, go to "FTP Accounts" (under "Site")
2. **Create or use existing FTP account**
3. **Use FTP client** (like FileZilla) to connect
4. **Upload all contents** from `out/` folder to `public_html/`

## Step 6: Create .htaccess File

1. **In File Manager**, make sure you're in `public_html/` folder
2. **Click "New File"** button
3. **Name it:** `.htaccess` (with the dot at the beginning)
4. **Click on the file** to edit it
5. **Paste this content:**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle client-side routing
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  
  # Force HTTPS (recommended)
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
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

6. **Save the file**

## Step 7: Verify File Structure

Your `public_html/` folder should contain:
- ✅ `index.html`
- ✅ `about/` folder
- ✅ `_next/` folder (with static assets)
- ✅ `contact-handler.php`
- ✅ All image files (flexus-logo.jpg, logoFLEXUStext.jpg, etc.)
- ✅ `.htaccess` file

## Step 8: Set File Permissions

1. **Select all files** in `public_html/`
2. **Right-click** → **Change Permissions**
3. **Set permissions:**
   - Files: `644`
   - Folders: `755`
4. **Apply to all files and folders**

## Step 9: Test Your Website

1. **Open a new browser tab**
2. **Visit:** `https://www.flexusnet.com`
3. **Check:**
   - ✅ Homepage loads correctly
   - ✅ Images display properly
   - ✅ Navigation works (Home, About, etc.)
   - ✅ About page loads: `https://www.flexusnet.com/about/`
   - ✅ Contact form works (test submission)

## Step 10: Test Contact Form

1. **Go to your website**
2. **Scroll to the contact form**
3. **Fill out and submit the form**
4. **Check your email** (the one you set in `contact-handler.php`)
5. **Verify you received the email**

## Troubleshooting

### Images Not Loading
- Check that all files from `public/` folder were uploaded
- Verify file paths in browser console (F12)
- Make sure images are in the root `public_html/` folder

### 404 Errors on Pages
- Verify `.htaccess` file exists and has correct content
- Check that `mod_rewrite` is enabled (should be by default on SiteGround)
- Clear browser cache

### Contact Form Not Working
- Verify `contact-handler.php` is in `public_html/` root
- Check file permissions (should be 644)
- Test PHP is working: Create a test file `test.php` with `<?php phpinfo(); ?>` and visit it
- Check SiteGround error logs in cPanel

### CSS/JavaScript Not Loading
- Verify `_next/` folder was uploaded completely
- Check browser console for 404 errors
- Clear browser cache (Ctrl+F5)

### HTTPS Redirect Issues
- If you get redirect loops, temporarily remove the HTTPS redirect from `.htaccess`
- Or ensure SSL certificate is properly configured in SiteGround

## Quick Checklist

- [ ] Built website with `npm run build`
- [ ] Updated email in `contact-handler.php`
- [ ] Uploaded all files from `out/` folder to `public_html/`
- [ ] Created `.htaccess` file with routing rules
- [ ] Set file permissions (644 for files, 755 for folders)
- [ ] Tested website at www.flexusnet.com
- [ ] Tested contact form
- [ ] Verified all pages work correctly

## Need Help?

If something doesn't work:
1. Check SiteGround error logs (in cPanel)
2. Check browser console (F12) for errors
3. Verify all files were uploaded correctly
4. Test with a simple HTML file first to verify hosting works

## Updating Your Website Later

When you make changes:
1. Build locally: `npm run build`
2. Upload only changed files (or entire `out/` folder contents)
3. Clear browser cache
4. Test the changes

