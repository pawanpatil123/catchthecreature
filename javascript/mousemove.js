var circle = document.querySelector("#circle")
document.addEventListener('mousemove',function(val){
circle.style.left = val.x+"px";
circle.style.top = val.y+"px";
console.log(val)
})