# SiteGround CSS/JS Loading Fix

## Problem
CSS and JavaScript files are not loading. Browser shows MIME type errors.

## Root Cause
The `_next` folder (with underscore) might not be accessible, or `.htaccess` rules are interfering.

## Solution Steps

### Step 1: Verify `_next` Folder Upload
1. **In SiteGround File Manager**, navigate to `public_html/`
2. **Check if `_next` folder exists** (it should be visible)
3. **If missing**, re-upload the entire `_next` folder from your `out/_next/` directory
4. **Verify folder structure:**
   - `public_html/_next/static/css/227a2436dabe4b70.css` should exist
   - `public_html/_next/static/chunks/` should contain JS files

### Step 2: Update `.htaccess` File
Replace the entire `.htaccess` file in `public_html/` with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # CRITICAL: Skip rewrite for _next folder and all static assets
  RewriteCond %{REQUEST_URI} ^/_next/
  RewriteRule . - [L]
  
  # Skip rewrite for existing files
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule . - [L]
  
  # Skip rewrite for existing directories
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule . - [L]
  
  # Skip rewrite for file extensions (CSS, JS, images, etc.)
  RewriteCond %{REQUEST_URI} \.(css|js|jpg|jpeg|png|gif|webp|svg|woff|woff2|ttf|eot|ico|php|json|map)$ [NC]
  RewriteRule . - [L]
  
  # Only rewrite HTML pages to index.html
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Set proper MIME types
<IfModule mod_mime.c>
  AddType text/css .css
  AddType application/javascript .js
  AddType application/json .json
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

### Step 3: Check File Permissions
1. **Select the `_next` folder** in File Manager
2. **Right-click** → **Change Permissions**
3. **Set to:** `755` (for folders)
4. **For files inside `_next`:** `644`

### Step 4: Test Direct Access
Try accessing these URLs directly in your browser:
- `https://www.flexusnet.com/_next/static/css/227a2436dabe4b70.css`
- `https://www.flexusnet.com/_next/static/chunks/webpack-bb760ae5fdfd8413.js`

**If you get 404:**
- The `_next` folder wasn't uploaded correctly
- Re-upload the entire `_next` folder

**If you get HTML instead of CSS/JS:**
- The `.htaccess` file needs to be updated
- Make sure the exclusion rules are working

### Step 5: Clear Browser Cache
After making changes:
- **Hard refresh:** Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Or clear browser cache completely

### Step 6: Verify Upload Structure
Your `public_html/` should look like this:
```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   │   ├── css/
│   │   │   └── 227a2436dabe4b70.css
│   │   └── chunks/
│   │       └── (many JS files)
│   └── (other folders)
├── about/
│   └── index.html
├── flexus-logo.jpg
├── logoFLEXUStext.jpg
├── contact-handler.php
└── (other files)
```

## Alternative: If `_next` Folder Still Doesn't Work

If the `_next` folder with underscore is causing issues, you can try:

1. **Rename the folder** from `_next` to `next` (without underscore)
2. **Update all references** in HTML files (but this is complex)

**Better solution:** Make sure the `_next` folder is uploaded correctly and the `.htaccess` properly excludes it.

## Quick Checklist
- [ ] `_next` folder exists in `public_html/`
- [ ] `.htaccess` file is updated with exclusion rules
- [ ] File permissions are correct (755 for folders, 644 for files)
- [ ] Can access CSS file directly via URL
- [ ] Browser cache cleared
- [ ] Hard refresh performed

