var t1 =gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:true,
        pin: true
    }
})
t1.from("#left",{
    x: -500,
    rotate:-45,
    duration:1,
    opacity:0,
   

},"anim")
t1.from("#right",{
    x: 500,
    rotate:45,
    duration:1,
    opacity:0,
  
},"anim")

t1.to("#cicle",{
    scale:70,
    duration:20,
    delay:1
    
},"anim")