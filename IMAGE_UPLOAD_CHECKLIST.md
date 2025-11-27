# Image Files Upload Checklist for SiteGround

## Required Image Files

All these images must be in `public_html/` (root directory) on SiteGround:

### Logo Files (Header):
- ✅ `flexus-logo.jpg` - Main logo (left side of header)
- ✅ `logoFLEXUStext.jpg` - Text logo (center of header)

### Carousel Images:
- ✅ `carusel_laptops_1.png` - Laptop/Desktop carousel slide
- ✅ `carusel_networks_1.png` - Network Installations carousel slide
- ✅ `carusel_pos_1.png` - POS Systems carousel slide

### Recommendation Images:
- ✅ `recommendation1.webp` - First recommendation photo
- ✅ `recommendation2.webp` - Second recommendation photo

## Upload Location

**All images must be in:** `public_html/` (same folder as `index.html`)

**NOT in a subfolder!**

## File Structure Should Be:

```
public_html/
├── index.html
├── _next/                    (folder)
├── about/                    (folder)
├── flexus-logo.jpg          ← IMAGE (must be here)
├── logoFLEXUStext.jpg       ← IMAGE (must be here)
├── carusel_laptops_1.png    ← IMAGE (must be here)
├── carusel_networks_1.png    ← IMAGE (must be here)
├── carusel_pos_1.png        ← IMAGE (must be here)
├── recommendation1.webp    ← IMAGE (must be here)
├── recommendation2.webp     ← IMAGE (must be here)
└── contact-handler.php
```

## How to Upload via FTP

1. **Connect to SiteGround via FTP**
2. **Navigate to `public_html/`** on server
3. **Upload these image files** from your local `out/` folder:
   - `flexus-logo.jpg`
   - `logoFLEXUStext.jpg`
   - `carusel_laptops_1.png`
   - `carusel_networks_1.png`
   - `carusel_pos_1.png`
   - `recommendation1.webp`
   - `recommendation2.webp`

4. **Make sure they're in the root** (`public_html/`), not in a subfolder

## Verify Upload

After uploading, test these URLs:
- `https://www.flexusnet.com/flexus-logo.jpg`
- `https://www.flexusnet.com/logoFLEXUStext.jpg`
- `https://www.flexusnet.com/carusel_laptops_1.png`
- `https://www.flexusnet.com/recommendation1.webp`

**If you get 404:** The file wasn't uploaded or is in the wrong location
**If you see the image:** It's working correctly!

## Common Issues

### Issue: Images show broken icon
- **Cause:** Files not uploaded or wrong location
- **Fix:** Upload images to `public_html/` root

### Issue: Some images load, others don't
- **Cause:** Only some files were uploaded
- **Fix:** Upload all 7 image files listed above

### Issue: Images load but logos don't
- **Cause:** Logo files might have wrong permissions
- **Fix:** Set file permissions to `644` for image files

