
gsap.to(".box", {
    duration: 3,
    x:800,
    rotation: 360,
    scale: 0.5,
});

gsap.from(".box1", {
    duration: 4,
    x: 800,
    rotation: -360,
    scale: 0.5,
});

gsap.fromTo(".box2",{
    x:200,
    opacity: 0,
},{
    duration: 4,
    x:700,
    opacity: 1,
});