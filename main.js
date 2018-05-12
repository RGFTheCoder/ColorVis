var searchParams = new URLSearchParams(window.location.search);



var clr = searchParams.get('c');
var hex = searchParams.get('h');

onload = function() {
    if (typeof hex != "undefined") {
        clr = "#" + hex;
    }
    document.querySelector("#text").style.background = clr;
    document.querySelector("#text").textContent = clr;
}