import sharp from 'sharp';
import fs from 'fs';

const args = process.argv;
//const inputPath = "/root/Documents/work/rn-tool/AlexandraElbakyan.jpg";
const inputPath = args[2]
const props = [{
    'mipmap-hdpi': 48
  },
  {
    'mipmap-mdpi': 72
  },
  {
    'mipmap-xhdpi': 96
  },
  {
    'mipmap-xxhdpi': 144
  },
  {
    'mipmap-xxxhdpi': 192
  }
]
const generateImages = (prop) => {
  const rect = new Buffer.from(
    `<svg><rect x="0" y="0" width="${Number(Object.values(prop))}" height="${Number(Object.values(prop))}" rx="8" ry="8"/></svg>`
  );
  const round = new Buffer.from(
    `<svg><rect x="0" y="0" width="${Number(Object.values(prop))}" height="${Number(Object.values(prop))}" rx="50%" ry="50%"/></svg>`
  );
  // resize to 8px border-radius image
  sharp(inputPath)
    .resize(Number(Object.values(prop)), Number(Object.values(prop)), {
      fit: "cover"
    })
    .composite([{
      input: rect,
      blend: 'dest-in'
    }])
    .toFile(`./${Object.keys(prop)[0]}/ic_launcher.png`)
    .then(() => {
      console.log(`${Object.values(prop)[0]}px Image Saved at ${Object.keys(prop)[0]}`);
    });
  // resize to rounded image
  sharp(inputPath)
    .resize(Number(Object.values(prop)), Number(Object.values(prop)), {
      fit: "cover"
    })
    .composite([{
      input: round,
      blend: 'dest-in'
    }])
    .toFile(`./${Object.keys(prop)[0]}/ic_launcher_rounded.png`)
    .then(() => {
      console.log(`${Object.values(prop)[0]}px Image Saved at ${Object.keys(prop)[0]}`);
    });
}
// function to generate a file structure
const generateFiles = (prop) => {
  fs.mkdir('./' + Object.keys(prop), {
    recursive: true
  }, (err) => {
    if (err) {
      console.log(err)
    };
  });
  generateImages(prop)
};

props.map((item) => {
  generateFiles(item)
})