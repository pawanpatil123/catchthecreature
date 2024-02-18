var h1Text=document.querySelector('h1').textContent;

var splittedtext= h1Text.split("");
var clutter="";
splittedtext.forEach(function(elem){
clutter += `<span>${elem}</span>`
})

document.querySelector('h1').innerHTML=clutter;

var t1=gsap.timeline({
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start: "top 0",
        end: "top -100%",
        scrub:true,
        pin: true
    }
})

t1.from("#main",{
backgroundColor:"black",
duration:5
})
gsap.from("h1 span",{
x:400,
stagger:2,
duration: 4,
// opacity:0

})
t1.to("h1 span",{
color: "red",
duration:1,

stagger:5

})

// gsap.to("h1 span",{
//    y:500
// })