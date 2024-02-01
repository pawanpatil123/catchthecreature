var menubar =document.querySelector('#menu');
var fullscr =document.querySelector('h2');
var flag=0;
fullscr.addEventListener("click",function(){
if(flag==0){
    fullscr.innerHTML='<h2><i class="ri-close-line"></i></h2>';
    menubar.style.top=0;
    flag=1;
}
else{
    menubar.style.top="-100%";
    fullscr.innerHTML='<h2><i class="ri-menu-line"></i> </h2>';
    flag=0;
   
}
})