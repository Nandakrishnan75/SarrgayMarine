import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImagePath = 'C:/Users/Mottapuffs/.gemini/antigravity-ide/brain/9afe068d-b877-4ae5-8868-a5954b99cfc7/sarrgay_marine_logo_concept_1792227908167.jpg';

async function processLogo() {
  const metadata = await sharp(inputImagePath).metadata();
  console.log('Image dimensions:', metadata.width, metadata.height);

  const size = Math.min(metadata.width, metadata.height);
  const radius = size / 2;

  // Rope diameter is approx 924px, radius is ~462px centered at 512, 512
  const cx = 512;
  const cy = 512;
  const maskRadius = 462;

  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${cx}" cy="${cy}" r="${maskRadius}" fill="white" /></svg>`
  );

  const circularLogo = await sharp(inputImagePath)
    .resize(size, size)
    .composite([{
      input: mask,
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  const publicDir = path.resolve('public');
  const srcAssetsDir = path.resolve('src/assets');

  // Save sarrgay-marine-logo.png
  await sharp(circularLogo)
    .resize(512, 512)
    .toFile(path.join(publicDir, 'sarrgay-marine-logo.png'));
  console.log('Saved sarrgay-marine-logo.png');

  // Save sarrgay-marine-logo-scroll.png
  await sharp(circularLogo)
    .resize(512, 512)
    .toFile(path.join(publicDir, 'sarrgay-marine-logo-scroll.png'));
  console.log('Saved sarrgay-marine-logo-scroll.png');

  // Save to src/assets
  await sharp(circularLogo)
    .resize(512, 512)
    .toFile(path.join(srcAssetsDir, 'logo.png'));

  // Generate favicons
  const faviconSizes = [32, 48, 72, 96, 144, 192, 256, 384, 512];
  for (const s of faviconSizes) {
    await sharp(circularLogo)
      .resize(s, s)
      .png()
      .toFile(path.join(publicDir, `favicon-${s}x${s}.png`));
    console.log(`Saved favicon-${s}x${s}.png`);
  }
}

processLogo().catch(console.error);
