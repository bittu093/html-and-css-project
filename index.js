const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl = gsap.timeline();
tl 
.from("h1",{
    x:-1300,
    stagger:1,
    opacity:1,
    delay:.3,
    duration:2,
})
tl.from("h5",{
    y:30,
    delay:.3,
    stagger:1,
    duration:1
    
})