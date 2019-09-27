// JavaScript Document
let animContainer = document.getElementById("load-anim-container");
let percBar = document.getElementById("load-percent-bar");
let buttonContainer = document.getElementById("button-container");
let header = document.getElementById("header");
let main = document.getElementById("main");
let gallery = document.getElementById("gallery-wrapper");
let img = document.getElementById("load-image");

buildAllGalleryItems();
filterProjects("");

function enter() {
    console.log("entering...");
    main.style.visibility = "visible";
    buttonContainer.style.display = "none";
    percBar.style.top = "0";
    percBar.style.width = "100%";
    percBar.style.animationName = "enterPercentBar";
    animContainer.style.height = "60px";
    animContainer.style.pointerEvents = "none";
    header.style.opacity = 1;
    img.style.clipPath = "inset(0px 0px 400px 0px)";
    img.style.webkitClipPath = "inset(0px 0px 400px 0px)";
    img.style.top = "calc(50% - 22px)";
    main.style.height = null;
    main.style.overflow = "visible";
    main.style.visibility = "visible";
    resizeAll();
}