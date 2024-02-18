gsap.from("#part1 img",{
  y:-400,
  opacity:0,
  delay:1,
  duration:3,
  stagger:0.3,
  yoyo:true,
  repeat:-1,
  
})
gsap.to("#part2 img",{
    width:"100%",
// height:"90%",
scrollTrigger:{
    trigger:"#part2",
    scroller:"body",
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    // markers:true,
    duration:4,
    pin:true,
}
})
gsap.to("#part3 h1",{
transform:"translateX(-40%)",
scrollTrigger:{
    trigger:"#part3",
    scroller:"body",
    start:"top 0%",
    end:"top -100%",
    scrub:2,
    // markers:true,
    pin:true
}
})