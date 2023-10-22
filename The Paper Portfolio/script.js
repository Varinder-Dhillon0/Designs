var tl = gsap.timeline();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

tl.to("#rotateit", {
    y : "100vh",
    scale : "0.5",
    duration : 0
})

tl.to("#rotateit" ,{
    y : "-130vh",
    duration : 2,
    delay : 1
})
tl.to("#rotateit" ,{
    y :"0vh",
    rotate : -360,
    scale: 1,
    duration: 0.45
})
