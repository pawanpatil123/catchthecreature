var btn=document.querySelector("button");
var img =document.querySelector("#img")
btn.addEventListener("click",function(){
   var w= Math.random()*100;
   var h= Math.random()*100;
   var rot= Math.random()*360;

   img.style.left=w+"%";
   img.style.top=h+"%";
   img.style.rotate =rot+"deg"
})