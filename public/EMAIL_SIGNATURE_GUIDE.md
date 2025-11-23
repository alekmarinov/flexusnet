# Email Signature Logo Guide

This guide explains how to use the optimized FlexusNet logos in your email signatures.

## Available Logo Files

### Static Versions (Recommended for most email clients)
- **`email-signature-logo.png`** - Main FlexusNet logo (250x264px, ~20KB)
- **`email-signature-text-logo.png`** - Text logo version (250x67px, ~18KB)
- **`email-signature-fcut.png`** - FCut logo variant (250x264px, ~20KB)

### Animated Versions (Limited email client support)
- **`email-signature-logo-animated.gif`** - Animated main logo with pulsing/flashing effect
- **`email-signature-text-logo-animated.gif`** - Animated text logo
- **`email-signature-fcut-animated.gif`** - Animated FCut logo

## Email Client Compatibility

### Static PNG Logos
✅ **Fully Supported:**
- Gmail (web, mobile apps)
- Outlook (desktop, web, mobile)
- Apple Mail
- Yahoo Mail
- Thunderbird
- Most modern email clients

### Animated GIF Logos
⚠️ **Limited Support:**
- ✅ Gmail (web and mobile apps)
- ✅ Outlook (desktop and web)
- ✅ Apple Mail
- ❌ Some corporate email clients may block animated GIFs
- ❌ Some mobile email clients may not animate

**Recommendation:** Use static PNG versions for maximum compatibility, or provide both options.

## HTML Email Signature Examples

### Basic Static Logo

```html
<table cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td>
      <img src="https://yourdomain.com/email-signature-logo.png" 
           alt="FlexusNet" 
           width="250" 
           height="auto" 
           style="max-width:250px;height:auto;display:block;">
    </td>
  </tr>
</table>
```

### Complete Email Signature with Contact Info

```html
<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,sans-serif;font-size:12px;color:#333;">
  <tr>
    <td style="padding-bottom:10px;">
      <img src="https://yourdomain.com/email-signature-logo.png" 
           alt="FlexusNet" 
           width="250" 
           height="auto" 
           style="max-width:250px;height:auto;display:block;">
    </td>
  </tr>
  <tr>
    <td style="padding-top:10px;border-top:1px solid #e0e0e0;">
      <strong>Your Name</strong><br>
      Your Title<br>
      Email: your.email@flexusnet.com<br>
      Phone: (555) 123-4567<br>
      Website: www.flexusnet.com
    </td>
  </tr>
</table>
```

### Animated Logo (GIF)

```html
<table cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td>
      <img src="https://yourdomain.com/email-signature-logo-animated.gif" 
           alt="FlexusNet" 
           width="250" 
           height="auto" 
           style="max-width:250px;height:auto;display:block;">
    </td>
  </tr>
</table>
```

## Best Practices

1. **Host logos on your website** - Don't attach logos to emails. Host them on your web server and reference them via URL.

2. **Use absolute URLs** - Always use full URLs (https://yourdomain.com/...) not relative paths.

3. **Include alt text** - Always provide descriptive alt text for accessibility and when images are blocked.

4. **Test before sending** - Test your signature in multiple email clients (Gmail, Outlook, Apple Mail).

5. **Keep it simple** - Email signatures should be clean and professional. Avoid too many images or complex layouts.

6. **File size matters** - The optimized logos are under 50KB, which is ideal for email. Larger files may be blocked by some email clients.

7. **Mobile-friendly** - Use `max-width` in styles to ensure logos scale properly on mobile devices.

## Adding to Your Email Client

### Gmail
1. Go to Settings → General → Signature
2. Click the image icon
3. Upload or paste the logo URL
4. Adjust size if needed
5. Save

### Outlook (Desktop)
1. File → Options → Mail → Signatures
2. Create or edit signature
3. Insert → Picture → From File or Online
4. Select your logo
5. Adjust size and alignment
6. Save

### Outlook (Web)
1. Settings → Mail → Compose and reply
2. Edit signature
3. Use the image icon to insert logo
4. Save

### Apple Mail
1. Mail → Preferences → Signatures
2. Create or edit signature
3. Drag and drop logo or use Insert → Choose
4. Adjust as needed
5. Save

## Troubleshooting

### Logo not displaying
- Check that the logo URL is accessible (try opening it in a browser)
- Ensure you're using an absolute URL (https://...)
- Some email clients block external images - recipients may need to "Display images"

### Logo too large/small
- Adjust the `width` attribute in the HTML
- Use CSS `max-width` for responsive sizing
- Maintain aspect ratio to avoid distortion

### Animated GIF not animating
- Some email clients don't support animated GIFs
- Try the static PNG version instead
- Check if your email client has animation disabled in settings

## Re-optimizing Logos

If you need to adjust the logo size or create new versions, run:

```bash
node scripts/optimize-email-logo.js
```

This will create new optimized versions in the `public/` folder.

## Support

For questions or issues with email signatures, contact your IT department or email administrator.

