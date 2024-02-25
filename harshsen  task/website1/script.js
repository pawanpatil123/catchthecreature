var tl = gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".page1",
        start:"top top",
        pin:true,
        markers:true,
        scrub:2,
    },
});

tl.to(".boxcontainer",{
    x: -2000,
});

var tl2= gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".boxcontainer",
        start:"top 50%",
        markers:true,
        scrub:2
    },
})

tl2.to('#img1',{
    x:300,
},'elem')
.to('#img2',{
    x:300,
},'elem')
.to('#img3',{
    x:300,
},'elem')
.to('#img4',{
    x:300,
},'elem')
.to('#img5',{
    x:300,
},'elem')
.to('#img6',{
    x:300,
},'elem')
.to('#img7',{
    x:300,
},'elem')
.to('#img8',{
    x:300,
},'elem')
var flag=0
var box=document.querySelectorAll('.boxes');
box.forEach(function(elem){
    elem.addEventListener('click',()=>{
        if(flag===0)
        {
        elem.style.scale="100vh"
elem.style.width="100%"
elem.style.zIndex="999"
elem.style.transition="all ease 5s"
flag=1
}
else{
    elem.style.scale="60vh"
elem.style.width="20%"
elem.style.zIndex="999"
elem.style.transition="all ease 3s" 
flag=0
}


})
})