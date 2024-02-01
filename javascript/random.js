var btn= document.querySelector("button")
var box= document.querySelector("#box")

btn.addEventListener("click",function(){
var a1 = Math.random() * 255
var a2 = Math.random() * 255
var a3 = Math.random() * 255

box.style.backgroundColor= `rgb(${a1},${a2},${a3})`
console.log(a1,a2,a3);
})