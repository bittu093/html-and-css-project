const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var navrep = document.querySelector(".nav-rep");
var menu = document.querySelector("icon1");
menu = addEventListener("click",function(){
    navrep.style.right = "0%"
})