var menubar =document.querySelector('#menu');
var fullscr =document.querySelector('button');
var flag=0;
fullscr.addEventListener("click",function(){
if(flag==0){
    
    // menubar.style.top="10%";
menubar.style.transform="translateY(10%)"
    flag=1
}
else{
    // menubar.style.top="-100%";
menubar.style.transform="translateY(-100%)"

    flag=0;
   
}
})