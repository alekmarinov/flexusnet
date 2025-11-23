const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const GIFEncoder = require('gifencoder');

// Email signature dimensions
const EMAIL_SIGNATURE_WIDTH = 250; // Max recommended width for email signatures
const EMAIL_SIGNATURE_QUALITY = 90; // High quality but optimized
const EMAIL_SIGNATURE_MAX_SIZE_KB = 50; // Target max file size

// Input logo files to process
const logoFiles = [
  {
    input: path.join(__dirname, '../public/flexus-logo.jpg'),
    output: {
      static: path.join(__dirname, '../public/email-signature-logo.png'),
      animated: path.join(__dirname, '../public/email-signature-logo-animated.gif'),
    },
    name: 'FlexusNet Main Logo'
  },
  {
    input: path.join(__dirname, '../public/logoFLEXUStext.jpg'),
    output: {
      static: path.join(__dirname, '../public/email-signature-text-logo.png'),
      animated: path.join(__dirname, '../public/email-signature-text-logo-animated.gif'),
    },
    name: 'FlexusNet Text Logo'
  },
  {
    input: path.join(__dirname, '../AI pictures and videos/fcutlogo.JPG'),
    output: {
      static: path.join(__dirname, '../public/email-signature-fcut.png'),
      animated: path.join(__dirname, '../public/email-signature-fcut-animated.gif'),
    },
    name: 'FCut Logo'
  }
];

async function optimizeForEmailSignature(inputPath, outputPath, logoName) {
  try {
    console.log(`\nProcessing ${logoName}...`);
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`  Original size: ${metadata.width}x${metadata.height}px`);
    
    // Calculate new dimensions maintaining aspect ratio
    const aspectRatio = metadata.height / metadata.width;
    const newWidth = EMAIL_SIGNATURE_WIDTH;
    const newHeight = Math.round(EMAIL_SIGNATURE_WIDTH * aspectRatio);
    
    console.log(`  Resizing to: ${newWidth}x${newHeight}px`);
    
    // Create optimized PNG with transparency support
    // Resize with transparent background and ensure alpha channel
    await sharp(inputPath)
      .resize(newWidth, newHeight, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
      })
      .ensureAlpha() // Ensure alpha channel exists
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: false, // Keep full color for better quality
        quality: 100
      })
      .toFile(outputPath);
    
    // Check file size and optimize if needed
    let stats = fs.statSync(outputPath);
    let fileSizeKB = stats.size / 1024;
    
    // If file is too large, try to optimize further
    if (fileSizeKB > EMAIL_SIGNATURE_MAX_SIZE_KB) {
      console.log(`  File size: ${fileSizeKB.toFixed(2)} KB (optimizing...)`);
      
      // Try with palette mode for smaller file size
      await sharp(inputPath)
        .resize(newWidth, newHeight, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .ensureAlpha()
        .png({
          compressionLevel: 9,
          adaptiveFiltering: true,
          palette: true, // Use palette for smaller size
          quality: 85 // Slightly lower quality for smaller size
        })
        .toFile(outputPath);
      
      stats = fs.statSync(outputPath);
      fileSizeKB = stats.size / 1024;
    }
    
    console.log(`  ✓ Created: ${path.basename(outputPath)}`);
    console.log(`  File size: ${fileSizeKB.toFixed(2)} KB`);
    
    if (fileSizeKB > EMAIL_SIGNATURE_MAX_SIZE_KB) {
      console.log(`  ⚠ Warning: File size exceeds recommended ${EMAIL_SIGNATURE_MAX_SIZE_KB}KB`);
      console.log(`    Still acceptable for most email clients, but consider further optimization.`);
    }
    
    return { success: true, fileSizeKB, width: newWidth, height: newHeight };
  } catch (error) {
    console.error(`  ✗ Error processing ${logoName}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function createAnimatedGIF(inputPath, outputPath, logoName) {
  try {
    console.log(`\nCreating animated version of ${logoName}...`);
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Calculate dimensions
    const aspectRatio = metadata.height / metadata.width;
    const newWidth = EMAIL_SIGNATURE_WIDTH;
    const newHeight = Math.round(EMAIL_SIGNATURE_WIDTH * aspectRatio);
    
    // First, create a resized PNG version for processing
    const resizedPath = outputPath.replace('.gif', '-temp.png');
    await sharp(inputPath)
      .resize(newWidth, newHeight, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(resizedPath);
    
    // Load the base image
    const baseImage = await loadImage(resizedPath);
    
    // Create canvas
    const canvas = createCanvas(newWidth, newHeight);
    const ctx = canvas.getContext('2d');
    
    // Set up GIF encoder - create write stream first
    const writeStream = fs.createWriteStream(outputPath);
    const encoder = new GIFEncoder(newWidth, newHeight);
    encoder.createReadStream().pipe(writeStream);
    
    encoder.start();
    encoder.setRepeat(0); // 0 = repeat forever
    const frameDelay = 100; // Frame delay in milliseconds (100ms = 10 fps)
    encoder.setDelay(frameDelay);
    encoder.setQuality(20); // Image quality (1-30, higher number = lower quality but smaller file) - optimized for email
    
    // Create frames for animation (flashing/pulsing effect)
    const frameCount = 12; // Number of frames for smooth animation
    const brightnessVariation = 0.2; // ±20% brightness variation for flash effect
    
    for (let i = 0; i < frameCount; i++) {
      // Clear canvas
      ctx.clearRect(0, 0, newWidth, newHeight);
      
      // Calculate brightness for this frame (sine wave for smooth pulsing)
      const phase = (i / frameCount) * 2 * Math.PI;
      const brightness = 1.0 + (Math.sin(phase) * brightnessVariation);
      
      // Apply brightness effect
      ctx.globalAlpha = 1.0;
      ctx.globalCompositeOperation = 'source-over';
      
      // Draw the image with brightness adjustment
      // We'll use a filter approach by adjusting the canvas context
      ctx.save();
      ctx.filter = `brightness(${brightness})`;
      ctx.drawImage(baseImage, 0, 0, newWidth, newHeight);
      ctx.restore();
      
      // Add frame to GIF
      encoder.addFrame(ctx);
    }
    
    // Wait for file to finish writing
    await new Promise((resolve, reject) => {
      encoder.finish();
      writeStream.on('finish', () => {
        setTimeout(() => resolve(), 100); // Small delay to ensure file is fully written
      });
      writeStream.on('error', reject);
    });
    
    // Clean up temp file
    fs.unlinkSync(resizedPath);
    
    // Check file size
    const stats = fs.statSync(outputPath);
    const fileSizeKB = stats.size / 1024;
    console.log(`  ✓ Created animated GIF: ${path.basename(outputPath)}`);
    console.log(`  File size: ${fileSizeKB.toFixed(2)} KB`);
    console.log(`  Animation: ${frameCount} frames, ${frameDelay}ms delay (pulsing/flashing effect)`);
    
    // If file is too large, try to reduce frame count and recreate
    if (fileSizeKB > EMAIL_SIGNATURE_MAX_SIZE_KB * 3) {
      console.log(`  ⚠ File size is large. Creating optimized version...`);
      
      // Recreate with fewer frames and lower quality
      const optimizedPath = outputPath.replace('.gif', '-optimized.gif');
      const optimizedWriteStream = fs.createWriteStream(optimizedPath);
      const optimizedEncoder = new GIFEncoder(newWidth, newHeight);
      optimizedEncoder.createReadStream().pipe(optimizedWriteStream);
      
      optimizedEncoder.start();
      optimizedEncoder.setRepeat(0);
      optimizedEncoder.setDelay(frameDelay);
      optimizedEncoder.setQuality(30); // Lower quality for smaller size
      
      // Use fewer frames
      const optimizedFrameCount = 8;
      for (let i = 0; i < optimizedFrameCount; i++) {
        ctx.clearRect(0, 0, newWidth, newHeight);
        const phase = (i / optimizedFrameCount) * 2 * Math.PI;
        const brightness = 1.0 + (Math.sin(phase) * brightnessVariation);
        ctx.save();
        ctx.filter = `brightness(${brightness})`;
        ctx.drawImage(baseImage, 0, 0, newWidth, newHeight);
        ctx.restore();
        optimizedEncoder.addFrame(ctx);
      }
      
      // Wait for file to finish writing
      await new Promise((resolve, reject) => {
        optimizedEncoder.finish();
        optimizedWriteStream.on('finish', () => {
          setTimeout(() => resolve(), 100); // Small delay to ensure file is fully written
        });
        optimizedWriteStream.on('error', reject);
      });
      
      const optimizedStats = fs.statSync(optimizedPath);
      const optimizedSizeKB = optimizedStats.size / 1024;
      console.log(`  ✓ Created optimized version: ${path.basename(optimizedPath)} (${optimizedSizeKB.toFixed(2)} KB)`);
      
      // Replace original if optimized is significantly smaller
      if (optimizedSizeKB < fileSizeKB * 0.7) {
        fs.unlinkSync(outputPath);
        fs.renameSync(optimizedPath, outputPath);
        console.log(`  ✓ Using optimized version (${optimizedSizeKB.toFixed(2)} KB)`);
        fileSizeKB = optimizedSizeKB;
      } else {
        fs.unlinkSync(optimizedPath);
      }
    }
    
    if (fileSizeKB > EMAIL_SIGNATURE_MAX_SIZE_KB * 2) {
      console.log(`  ⚠ Warning: File size exceeds recommended ${EMAIL_SIGNATURE_MAX_SIZE_KB * 2}KB for animated GIFs`);
      console.log(`    Some email clients may block large attachments. Consider using static version.`);
    }
    
    return { success: true, fileSizeKB, frameCount };
  } catch (error) {
    console.error(`  ✗ Error creating animated version:`, error.message);
    // Fallback: create enhanced static version
    try {
      const fallbackPath = outputPath.replace('.gif', '-enhanced.png');
      const metadata = await sharp(inputPath).metadata();
      const aspectRatio = metadata.height / metadata.width;
      const newWidth = EMAIL_SIGNATURE_WIDTH;
      const newHeight = Math.round(EMAIL_SIGNATURE_WIDTH * aspectRatio);
      
      await sharp(inputPath)
        .resize(newWidth, newHeight, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .modulate({
          brightness: 1.1,
          saturation: 1.05,
          hue: 0
        })
        .png({
          quality: 100,
          compressionLevel: 9
        })
        .toFile(fallbackPath);
      
      console.log(`  ✓ Created enhanced static version as fallback: ${path.basename(fallbackPath)}`);
      return { success: true, note: 'Static fallback created', error: error.message };
    } catch (fallbackError) {
      return { success: false, error: error.message };
    }
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('Email Signature Logo Optimizer');
  console.log('='.repeat(60));
  
  const results = [];
  
  for (const logo of logoFiles) {
    // Check if input file exists
    if (!fs.existsSync(logo.input)) {
      console.log(`\n⚠ Skipping ${logo.name}: File not found at ${logo.input}`);
      continue;
    }
    
    // Create static optimized version
    const staticResult = await optimizeForEmailSignature(
      logo.input,
      logo.output.static,
      logo.name
    );
    
    // Create animated version (or enhanced static)
    const animatedResult = await createAnimatedGIF(
      logo.input,
      logo.output.animated,
      logo.name
    );
    
    results.push({
      logo: logo.name,
      static: staticResult,
      animated: animatedResult
    });
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));
  
  results.forEach(result => {
    console.log(`\n${result.logo}:`);
    if (result.static.success) {
      console.log(`  Static: ✓ ${path.basename(result.static.output || 'created')} (${result.static.fileSizeKB?.toFixed(2)} KB)`);
    }
    if (result.animated.success) {
      console.log(`  Animated: ${result.animated.note || '✓ Created'}`);
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log('Email Signature Usage Tips:');
  console.log('='.repeat(60));
  console.log('1. Use PNG files for best quality and transparency support');
  console.log('2. For animated effects, convert to GIF using online tools:');
  console.log('   - ezgif.com (recommended)');
  console.log('   - cloudconvert.com');
  console.log('3. Recommended HTML for email signature:');
  console.log('   <img src="email-signature-logo.png" alt="FlexusNet" width="250" height="auto" style="max-width:250px;height:auto;">');
  console.log('4. Keep file sizes under 50KB for best email client compatibility');
  console.log('5. Test in multiple email clients (Gmail, Outlook, Apple Mail)');
  console.log('='.repeat(60));
}

main().catch(console.error);

