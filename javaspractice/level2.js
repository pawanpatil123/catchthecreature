var arr = [

    { name: "pets of roses", image: "https://images.unsplash.com/photo-1615182787503-08365d1e7fae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXMlMjBib3VxdWV0fGVufDB8fDB8fHww" },
    { name: "Animals of town", image: "https://plus.unsplash.com/premium_photo-1673296129756-e45408e25250?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8fHww" },
    { name: "the crowd of city", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "fruits of planet", image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzfGVufDB8fDB8fHww" },
    { name: "web design", image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" }

];

function showcase(){
var cul=""
arr.forEach(function(obj){
cul +=`<div class="box ">
<img class="cursor-pointer" src="${obj.image}" alt="image">
<div class="caption"> </div>`
})
document.querySelector(".container").innerHTML=cul
}

searchin=document.querySelector("#searchinput")
function search(){
    searchin.addEventListener("focus",function(){
       
document.querySelector(".overlay").style.dispay="block"
    })
  searchin.addEventListener("blur",function(){
document.querySelector(".overlay").style.dispay="none"
    })

    searchin.addEventListener('input',function(){
        var filterarr=arr.filter(obj=>obj.name.toLowerCase().startsWith(searchin.value))
        var cul="";
       filterarr.forEach(function(obj){
        
        cul +=`<div class="res flex px-8 py-3">
        <i class="ri-search-line font-semibold mr-5"></i>
        <h3 class="font-semibold">${obj.name}</h3>
    </div>`

       })
       document.querySelector(".searchdata").style.dispaly="block";
       document.querySelector(".searchdata").innerHTML=cul;

    })
}

search();
showcase();