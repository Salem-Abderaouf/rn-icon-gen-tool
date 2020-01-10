const fs = require('fs');
const jimp = require('jimp');


let imagePath = process.argv[2]
// /root/Desktop/Alexandra_Elbakyan_(cropped).jpg
// Verify iF the image exist
fs.exists(imagePath, (exists) => exists? genImages():console.log("404 : Image Not Founed") );
function genImages(){
    const data = { 
        src:["mipmap-ldpi","mipmap-mdpi","mipmap-hdpi","mipmap-xhdpi","mipmap-xxhdpi","mipmap-xxxhdpi"],
        sizes : [36,48,72,96,144,196],
    } 
    const {src , sizes} = data;
    fs.mkdir(imagePath + '/android',()=>{
        imagePath = imagePath + '/android';
        sizes.forEach((size,index) => {fs.mkdir(imagePath + '/' + src[index],()=>{ ImageBuild() })})
    })
    function ImageBuild(){
        // change image roundness to 50% and 8px and size to image.sizes
        // save image 
    }
}