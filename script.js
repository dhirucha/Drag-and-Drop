let dropArea = document.getElementById("drop-area");
let inputFile = document.getElementById("input-file");
let imgView = document.getElementById("img-view");

inputFile.addEventListener("change",uploadImage);

function uploadImage(){
    
    imageLink = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage = `url(${imageLink})`;
    imgView.textContent = "";
    imgView.style.border = 0;
}

dropArea.addEventListener("dragover",function(e){
    e.preventDefault()
});

dropArea.addEventListener("drop",function(e){
    e.preventDefault()
    inputFile.files = e.dataTransfer.files;
    uploadImage()
});