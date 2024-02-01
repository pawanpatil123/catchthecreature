var arr = [{username: "harsh123", dp: "img2.webp",im: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmV1dGlmdWxsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
{username: "priyanka", dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww", im: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmV1dGlmdWxsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
{username: "ankita", dp: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww", im: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmV1dGlmdWxsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
{username: "ankita", dp: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww", im: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmV1dGlmdWxsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
{username: "ankita", dp: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww", im: "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmV1dGlmdWxsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
]
var cul=""
arr.forEach(function(elem,idx){
    
cul+=`  <div id="story">
<img id=${idx} src=${elem.dp} alt="">
</div>`
})
var storiyan =document.querySelector('#storiyan')
var fulldiv = document.querySelector('#full')
var growth = document.querySelector('#growth')
var grow=0;

storiyan.innerHTML=cul;
storiyan.addEventListener('click',function(dets){
fulldiv.style.display="block"
// console.log(arr[dets.target.id].im)
fulldiv.style.backgroundImage=`url(${arr[dets.target.id].im})`


var int =setInterval(function(){
    if(grow<=99)
    {
        console.log(grow++)
        var hero = grow++;
        growth.style.width= `${hero}%`;
    }
},100)


setTimeout(() => {
    grow=0
    clearInterval(int);
    fulldiv.style.display= "none"

    
}, 5000);
})
