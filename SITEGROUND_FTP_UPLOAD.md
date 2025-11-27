# Upload Website to SiteGround Using FTP

## Why Use FTP?
- Better handling of folders starting with underscores (like `_next`)
- More reliable for large file structures
- Can see hidden files/folders
- Faster bulk uploads

## Step 1: Get FTP Credentials from SiteGround

1. **Log into SiteGround Site Tools**
2. **Click "FTP Accounts"** (under "Site" section in left sidebar)
3. **Create a new FTP account** (or use existing one):
   - **Username:** (choose a username)
   - **Password:** (set a strong password)
   - **Directory:** `/public_html/` (or leave default)
4. **Note down:**
   - FTP Server/Host
   - Username
   - Password
   - Port (usually 21 for FTP, 22 for SFTP)

## Step 2: Install FTP Client

**Recommended FTP Clients:**
- **FileZilla** (Free, Windows/Mac/Linux) - https://filezilla-project.org/
- **WinSCP** (Windows) - https://winscp.net/
- **Cyberduck** (Mac/Windows) - https://cyberduck.io/

**We'll use FileZilla as example** (most popular and free)

## Step 3: Connect to SiteGround via FTP

1. **Open FileZilla**
2. **Enter connection details:**
   - **Host:** (from SiteGround, usually `ftp.flexusnet.com` or similar)
   - **Username:** (your FTP username)
   - **Password:** (your FTP password)
   - **Port:** `21` (for FTP) or `22` (for SFTP - more secure)
3. **Click "Quickconnect"**

## Step 4: Navigate to Correct Directory

1. **On the right side (Remote site):**
   - Navigate to `public_html/` folder
   - This is where your website files should go

2. **On the left side (Local site):**
   - Navigate to: `C:\Users\flexu\Desktop\PROJECTS\flexusnet\out\`
   - This is your local build folder

## Step 5: Upload All Files

### Option A: Upload Everything at Once

1. **In left panel (Local), select ALL files and folders** in the `out` folder:
   - Select `index.html`
   - Select `_next` folder (IMPORTANT - make sure this is included!)
   - Select `about` folder
   - Select all image files
   - Select `contact-handler.php`
   - Select everything else

2. **Right-click** → **Upload**
   - Or drag and drop to right panel

3. **Wait for upload to complete**
   - FileZilla will show progress
   - Make sure `_next` folder uploads completely

### Option B: Upload in Order (Recommended)

1. **First, upload the `_next` folder:**
   - Select `_next` folder in left panel
   - Drag to `public_html/` in right panel
   - Wait for it to finish (this is the most important!)

2. **Then upload other files:**
   - Upload `index.html`
   - Upload `about/` folder
   - Upload all image files
   - Upload `contact-handler.php`
   - Upload everything else

## Step 6: Verify Upload

1. **In FileZilla, check right panel (Remote):**
   - You should see `_next` folder in `public_html/`
   - Expand `_next` → should see `static` folder
   - Expand `static` → should see `css` and `chunks` folders

2. **Verify file structure:**
   ```
   public_html/
   ├── _next/
   │   └── static/
   │       ├── css/
   │       │   └── 227a2436dabe4b70.css
   │       └── chunks/
   │           └── (JS files)
   ├── index.html
   ├── about/
   ├── flexus-logo.jpg
   └── (other files)
   ```

## Step 7: Upload `.htaccess` File

1. **In left panel, find `.htaccess` file** (in project root, not in `out` folder)
2. **Upload it to `public_html/`** on SiteGround
3. **Make sure it's named exactly `.htaccess`** (with the dot)

## Step 8: Set File Permissions

1. **In FileZilla, right-click on `_next` folder** (in right panel)
2. **Select "File permissions"**
3. **Set to:** `755` (for folders)
4. **Click "Recurse into subdirectories"**
5. **Click OK**

6. **For files inside `_next`:**
   - Right-click on a CSS file → File permissions → `644`
   - Right-click on a JS file → File permissions → `644`

## Step 9: Test Your Website

1. **Visit:** `https://www.flexusnet.com`
2. **Check browser console** (F12) for errors
3. **Test direct file access:**
   - `https://www.flexusnet.com/_next/static/css/227a2436dabe4b70.css`
   - Should show CSS code, not HTML

## Troubleshooting FTP Upload

### Issue: `_next` folder not visible
- **Solution:** In FileZilla, go to **View** → **Show hidden files**
- Folders starting with `_` might be hidden by default

### Issue: Upload fails or times out
- **Solution:** 
  - Try SFTP instead of FTP (port 22)
  - Upload `_next` folder separately
  - Check your internet connection

### Issue: Files upload but permissions are wrong
- **Solution:** 
  - Right-click folder → File permissions
  - Set folders to `755`, files to `644`
  - Enable "Recurse into subdirectories"

### Issue: Can't see `.htaccess` file
- **Solution:** 
  - In FileZilla: **View** → **Show hidden files**
  - Or create it directly on server

## FileZilla Settings for Best Results

1. **Edit** → **Settings** → **Transfers**
   - **Transfer type:** Binary (for images, CSS, JS)
   - **Number of simultaneous transfers:** 2-3

2. **View** → **Show hidden files** (to see `_next` and `.htaccess`)

## Quick Checklist

- [ ] FTP client installed (FileZilla)
- [ ] Connected to SiteGround FTP
- [ ] Navigated to `public_html/` on server
- [ ] Navigated to `out/` folder locally
- [ ] Uploaded `_next` folder (VERIFIED it's there!)
- [ ] Uploaded all other files
- [ ] Uploaded `.htaccess` file
- [ ] Set permissions (755 for folders, 644 for files)
- [ ] Tested website
- [ ] Verified CSS/JS files load

## Why This Should Work

FTP clients like FileZilla:
- Handle folders starting with `_` correctly
- Show all files including hidden ones
- Preserve folder structure exactly
- Allow you to verify what's uploaded
- Better for bulk file operations

This method is more reliable than File Manager for Next.js static exports!

