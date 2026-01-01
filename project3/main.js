//control properties

//duration-> kitni der tak chalega
//delay-> kitni der ke bad  chalgea
//repeat-> bar bar chlane ke lie infenite ke liye (-1) or specific ke liye normal number
//yoyo->repaeat animaton ko reverse mai chalane keliye

gsap.to(".ball",{
    y:-250,
    duration:1,
    delay:2,
    repeat:-1,
    yoyo:true,
    ease:"power1.inOut"
})

gsap.to(".shadow",{
    scaleX:0.5,
    duration:1,
    opacity:0.3,
    repeat:-1,
    yoyo:true,
    ease:"power1.inOut"
})



