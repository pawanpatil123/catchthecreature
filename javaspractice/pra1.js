// var btn=document.querySelector('button')
// var img=document.querySelector('img')

// btn.addEventListener('click',function(){
//     img.style.top="50%"
//     img.style.left="50%"
//     img.style.transform="translate(-50%,-50%)"

// })

// var up=document.querySelector('#up');
// var down=document.querySelector('#down');
// var img=document.querySelector('img')

// up.addEventListener('click',function(){
//     img.style.scale="2"
// })

// down.addEventListener('click',function(){
//     img.style.scale="1"
// })


var h =document.querySelector('h1');
var inc =document.querySelector('#inc');
var dec =document.querySelector('#dec');
var five =document.querySelector('#five');
var ran = document.querySelector('#ran');
var a=0
inc.addEventListener('click',function(){
a=a+1;
h.innerHTML=a
})
dec.addEventListener('click',function(){
a=a-1;
h.innerHTML=a
})
five.addEventListener('click',function(){
a=a+5;
h.innerHTML=a
})

ran.addEventListener('click',function(){
var num=Math.floor(Math.random()*100)
a=a+num
h.innerHTML=a
})