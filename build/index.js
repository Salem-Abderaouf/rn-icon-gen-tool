'use strict';

var _sharp = require('sharp');

var _sharp2 = _interopRequireDefault(_sharp);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputPath = "/root/Documents/work/rn-tool/AlexandraElbakyan.jpg";
var props = [{
  'mipmap-hdpi': 48
}, {
  'mipmap-mdpi': 72
}, {
  'mipmap-xhdpi': 96
}, {
  'mipmap-xxhdpi': 144
}, {
  'mipmap-xxxhdpi': 192
}];
var generateImages = function generateImages(prop) {
  (0, _sharp2.default)(inputPath).resize(Number(Object.values(prop)), Number(Object.values(prop)), {
    fit: "contain"
  }).toFile('./' + Object.keys(prop)[0] + '/ic_launcher.png').then(function () {
    console.log(Object.values(prop)[0] + 'px Image Saved at ' + Object.keys(prop)[0]);
  });
};
// function to generate a file structure
var generateFiles = function generateFiles(prop) {
  _fs2.default.mkdir('./' + Object.keys(prop), {
    recursive: true
  }, function (err) {
    if (err) {
      console.log(err);
    };
  });
  generateImages(prop);
};

props.map(function (item) {
  generateFiles(item);
});