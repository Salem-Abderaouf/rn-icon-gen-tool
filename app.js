window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.getElementById('myImg');  
            img.src = URL.createObjectURL(this.files[0]); 
            img.onload = imageIsLoaded;
        }
    });
  });
function imageIsLoaded() { 
    var image = { 
        src:this.src,
        sizes : [48,72,96,144,192],
        roundness : ['8px','50%']
} 
var {src , roundness} = image
image.sizes.forEach(size =>{
    var radiusImageElem = document.createElement('img')
    var roundedImageElem = document.createElement('img')
    radiusImageElem.src = src;roundedImageElem.src = src;
    radiusImageElem.height = size;radiusImageElem.width = size;
    roundedImageElem.height = size;roundedImageElem.width = size;
    radiusImageElem.style.borderRadius = roundness[0];
    roundedImageElem.style.borderRadius = roundness[1];
    radiusImageElem.classList.add('radiusImage')
    roundedImageElem.classList.add('roundImage')
    document.body.appendChild(roundedImageElem)
    document.body.appendChild(radiusImageElem)
    })
//setup file system and export it zip
}
