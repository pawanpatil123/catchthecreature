// var arr =[15,40,-30,75,-90,10]
// var cul=0;
// arr.forEach(function(elem){
// cul+=elem;
// })
// console.log(cul)

var arr= [{model:"i phone",price: 70000,color:"white",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvA2A2tyIkbdBKS_-VH3mqfPap782Crkwbw&usqp=CAU"},{model:"samsung s24",price:60000,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWrB1_3R6LKufTMh21D81ZS8RWSKn7Z3_-w&usqp=CAU"},{model:"one pluse",price:40000,color:"blue",image:"https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png"}]

var cul="";
arr.forEach(function(elem,index){
cul+=` <div class="card">
<img src="${elem.image}" alt="">
<h1>${elem.model}</h1>
<h2>price:${elem.price}</h2>
<h2>color: ${elem.color}</h2>
<button id="${index}" class="add">Add cart</button>
</div>`
})

// document.querySelector(".main").innerHTML=cul



var cart=[];

function addtocart(){
    document.querySelector(".card").addEventListener("click",function(dets)
    {
        // console.log(dets.target.classList.contains('add'))
        if(dets.target.classList.contains('add')){
            cart.push(arr[dets.target.id])
            console.log(cart)
        }
    })
    }



    function showcart(){
        var cul="";
      
    
            cart.forEach(function(elem){
                cul +=`
                <img src="${elem.image}" alt="">
                <h1>${elem.model}</h1>
                <h2>price:${elem.price}</h2>
                <h2>color: ${elem.color}</h2>
               
                </div>`
            })
    
            document.querySelector(".full").innerHTML=cul
     
    }
    


    addtocart()
    showcart()