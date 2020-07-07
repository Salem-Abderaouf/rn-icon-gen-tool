import sharp from 'sharp';
import fs from 'fs';

const inputPath = "/root/Documents/work/rn-tool/AlexandraElbakyan.jpg";
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
  sharp(inputPath)
    .resize(Number(Object.values(prop)), Number(Object.values(prop)), {
      fit: "contain"
    })
    .toFile(`./${Object.keys(prop)[0]}/ic_launcher.png`)
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