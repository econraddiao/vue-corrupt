// JavaScript Document
var animContainer = document.getElementById("load-anim-container");
var header = document.getElementById("header");
var headerConainer = document.getElementById("header-container");
var main = document.getElementById("main");
var animBar = document.getElementById("load-anim-bar");
var Container = document.getElementById("load-cta-container");
var Copy = document.getElementById("load-cta-copy");

function enter() {
    console.log("entering...");
    animBar.style.transition = "height .5s";
    animBar.style.height = "60px";
    animBar.style.backgroundColor = "#333";
    animContainer.style.visibility = "hidden";
    Copy.style.visibility = "hidden";
    headerConainer.style.opacity = 1;
    main.style.height = null;
    main.style.overflow = "visible";
    var hider = setTimeout(hideLoad, 500);
    function hideLoad() {
        animContainer.style.display = "none";
        animBar.style.display = "none";
        clearTimeout(hider);
    }
}

function load() {
    console.log("loading...");
    var count = 0;
    var loader = setInterval(loadAnim, 7);

    function loadAnim() {
        if (count == 201) {
            clearInterval(loader);
        } else {
            count++;
            if (count < 101) {
                animBar.innerHTML = count + "%";
                animBar.style.width = count + "%";

            } else if (count < 201) {
                animBar.style.height = count - 100 + "%";
                animBar.style.backgroundColor = "#333";
            } else {
                Copy.style.visibility = "visible";
                Copy.style.opacity = 1;
                header.style.visibility = "visible";
                header.style.opacity = 1;
                headerConainer.style.visibility = "visible";
                main.style.visibility = "visible";
                loadProjects();
                populateProjects("");
            }
        }
    }
}
