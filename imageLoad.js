// JavaScript Document

function loadImage(image) {
    var image = this;
    
}
var downloadingImage = new Image();
downloadingImage.onload = function(){
    image.src = this.src;
};
downloadingImage.src = "https://econraddiao.github.io/img/";
