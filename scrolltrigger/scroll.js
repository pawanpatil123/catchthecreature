gsap.from("#part1 img",{

y:300,
    rotate:720,
scale:0,
opacity:0,
duration:4,
delay:1,

})
gsap.from("#part2 img",{
// rotate:720,
x:-300,
opacity:0,
duration:5,
delay:1,
// scrollTrigger:"#part2 img" 
scrollTrigger:{
    trigger:"#part2 img",
    scroller:"body",
    // markers:true,
    start:"top 20%",
    end:"top 10%",
    scrub:2
}
})
gsap.from("#part3 img",{
x:300,
// scale:0,
opacity:0,
duration:5,
delay:1,
// scrollTrigger:"#part2 img" 
scrollTrigger:{
    trigger:"#part3 img",
    scroller:"body",
    // markers:true,
    start:"top 40%",
    end:"top 20%",
    scrub:2
}
})