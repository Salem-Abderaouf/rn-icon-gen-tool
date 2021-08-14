/* eslint-disable new-cap */
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { info } from 'console';

function GenerateIcon(img, dir, fit, platform) {
  // Check the image if it existed
  if (!existsSync(img)) throw new Error('Image does not exist.');
  // Call function Based on the platform
  if (platform === "android") {
    generateAndroidIcons(img, dir, fit)
  }
  else if (platform === "ios") {
    generateIosIcons(img, dir, fit)
  }
  else if (platform === "both") {
    generateAndroidIcons(img, dir, fit)
    generateIosIcons(img, dir, fit)
  }
}


const generateAndroidIcons = (img, dir, fit) => {
  const mipmap = [
    {
      'mipmap-hdpi': 48,
    },
    {
      'mipmap-mdpi': 72,
    },
    {
      'mipmap-xhdpi': 96,
    },
    {
      'mipmap-xxhdpi': 144,
    },
    {
      'mipmap-xxxhdpi': 192,
    },
  ];
  mipmap.map((item) => {
    const rect = new Buffer.from(
      `<svg><rect x="0" y="0" width="${Number(
        Object.values(item),
      )}" height="${Number(Object.values(item))}" rx="8" ry="8"/></svg>`,
    );
    const round = new Buffer.from(
      `<svg><rect x="0" y="0" width="${Number(
        Object.values(item),
      )}" height="${Number(Object.values(item))}" rx="50%" ry="50%"/></svg>`,
    );

    mkdirSync(`${dir}/${Object.keys(item)}`, { recursive: true });
    try {
      sharp(img)
        .resize(Number(Object.values(item)), Number(Object.values(item)), {
          fit,
        })
        .composite([
          {
            input: rect,
            blend: 'dest-in',
          },
        ])
        .toFile(`${dir}/${Object.keys(item)}/ic_launcher.png`);
      info(`[Android] : ${Object.values(item)}px IMAGE SAVED`);
      sharp(img)
        .resize(Number(Object.values(item)), Number(Object.values(item)), {
          fit,
        })
        .composite([
          {
            input: round,
            blend: 'dest-in',
          },
        ])
        .toFile(`${dir}/${Object.keys(item)}/ic_launcher_rounded.png`);

      info(`[Android] : ${Object.values(item)}px ROUNDED IMAGE SAVED`);
      return;
    } catch (error) {
      throw new Error(error);
    }
  });
}
const generateIosIcons = (img, dir, fit) => {
  const AppIcon = [16, 20, 29, 32, 40, 48, 50, 55, 57, 58, 60, 64, 72, 76, 80, 87, 88, 100, 114, 120, 128, 144, 152, 167, 172, 180, 196, 216, 256, 512, 1024];
  mkdirSync(`${dir}/Assets.xcassets/`, { recursive: true });
  AppIcon.map((size) => {
    const rect = new Buffer.from(
      `<svg><rect x="0" y="0" 
        width="${size}" 
        height="${size}" 
        rx="8" ry="8"/></svg>`,
    );

    try {
      sharp(img)
        .resize(Number(size), Number(size), {
          fit,
        })
        .composite([
          {
            input: rect,
            blend: 'dest-in',
          },
        ])
        .toFile(`${dir}/Assets.xcassets/${size}.png`);
      info(`[IOS] : ${size}px IMAGE SAVED`);
    }
    catch (error) {
      throw new Error(error);
    }
  })
}


export default GenerateIcon;