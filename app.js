window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            let img = document.getElementById('image');  
            img.src = URL.createObjectURL(this.files[0]); 
            img.onload = imageIsLoaded;
        }
    });
  });
function imageIsLoaded() { 
    let image = { 
        src:this.src,
        sizes : [48,72,96,144,192],
        roundness : ['8px','50%']
} 
let {src , roundness , sizes} = image;
    sizes.forEach(size =>{
    let radiusImageElem = document.createElement('img')
    let roundedImageElem = document.createElement('img')
    radiusImageElem.src = src;roundedImageElem.src = src;
    radiusImageElem.height = size;radiusImageElem.width = size;
    roundedImageElem.height = size;roundedImageElem.width = size;
    radiusImageElem.style.borderRadius = roundness[0];
    roundedImageElem.style.borderRadius = roundness[1];
    radiusImageElem.classList.add('radiusImage')
    document.body.appendChild(roundedImageElem)
    document.body.appendChild(radiusImageElem)
    })
//setup it into file system and export it zip
}

function create_zip() {
    var zip = new JSZip();
	zip.add("folder/hello1.txt", "Hello First World\n");
	zip.add("hello2.txt", "Hello Second World\n");
	content = zip.generate();
	location.href="data:application/zip;base64," + content;
}