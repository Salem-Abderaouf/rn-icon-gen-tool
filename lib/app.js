const sharp = require("sharp");
const fs = require("fs");

exports.GenerateIcon = (a, b, c) => {
  const props = [
    {
      "mipmap-hdpi": 48
    },
    {
      "mipmap-mdpi": 72
    },
    {
      "mipmap-xhdpi": 96
    },
    {
      "mipmap-xxhdpi": 144
    },
    {
      "mipmap-xxxhdpi": 192
    }
  ];
  const generateImages = prop => {
    const rect = new Buffer.from(
      `<svg><rect x="0" y="0" width="${Number(
        Object.values(prop)
      )}" height="${Number(Object.values(prop))}" rx="8" ry="8"/></svg>`
    );
    const round = new Buffer.from(
      `<svg><rect x="0" y="0" width="${Number(
        Object.values(prop)
      )}" height="${Number(Object.values(prop))}" rx="50%" ry="50%"/></svg>`
    );
    // Resize && clip to 8px border-radius
    sharp(a)
      .resize(Number(Object.values(prop)), Number(Object.values(prop)), {
        fit: c
      })
      .composite([
        {
          input: rect,
          blend: "dest-in"
        }
      ])
      .toFile(`${b}/${Object.keys(prop)[0]}/ic_launcher.png`)
      .catch(err => console.log(err.message))
      .then(() => {
        console.log(`${Object.values(prop)[0]}px IMAGE SAVED`);
      });
    // Resize && clip to rounded image
    sharp(a)
      .resize(Number(Object.values(prop)), Number(Object.values(prop)), {
        fit: c
      })
      .composite([
        {
          input: round,
          blend: "dest-in"
        }
      ])
      .toFile(`${b}/${Object.keys(prop)[0]}/ic_launcher_rounded.png`)
      .catch(err => console.log(err.message))
      .then(() => {
        console.log(`${Object.values(prop)[0]}px ROUNDED IMAGE SAVED`);
      });
  };
  // Function to generate a file structure
  const generateFiles = prop => {
    fs.mkdir(
      `${b}/${Object.keys(prop)[0]}`,
      {
        recursive: true
      },
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
    generateImages(prop);
  };
  // Distrubate Data
  props.map(item => {
    generateFiles(item);
  });
};
