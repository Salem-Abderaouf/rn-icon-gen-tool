/* eslint-disable new-cap */
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { info } from 'console';

function GenerateIcon(img, dir, fit) {
  // Check the image if it existed
  if (!existsSync(img)) throw new Error('Image does not exist.');
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
      info(`${Object.values(item)}px IMAGE SAVED`);
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

      info(`${Object.values(item)}px ROUNDED IMAGE SAVED`);
      return;
    } catch (error) {
      throw new Error(error);
    }
  });
}

export default GenerateIcon;
