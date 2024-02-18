var t1 =gsap.timeline();
t1.to("#full",{
right:0,
duration:0.5
})
t1.from("h1",{
x:100,
duration:1,
opacity:0,
stagger:0.3
})
t1.pause();
var menu =document.querySelector("#menu")
var cross =document.querySelector("#cross")

menu.addEventListener("click",function(){
    t1.play();
})
cross.addEventListener("click",function(){
    t1.reverse();
})