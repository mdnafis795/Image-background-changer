var ImgBox = document.querySelector(".img-box");
var ImgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalIMG");
var Line = document.getElementById("line");

var leftSpace = ImgBox.offsetLeft;
originalImg.style.width = ImgBox.offsetWidth + "px";
ImgBox.onmousemove = function(e){
    var BoxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = BoxWidth;
    Line.style.left = BoxWidth;
}