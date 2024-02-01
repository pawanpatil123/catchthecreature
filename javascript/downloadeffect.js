var growth= document.querySelector('#growth');
var btn = document.querySelector('button');
    var grow=0;
    var perc = document.querySelector('h2')

btn.addEventListener('click',function(){
//loop

var int=setInterval(function(){
      if(grow<=100)
      {
var hero = grow++
          growth.style.width = `${hero}%`;
         perc.innerHTML= hero+"%";
    // console.log(grow++)  
    }
},50)

setTimeout(() => {
    btn.style.backgroundColor="green";
    btn.style.scale=1
    btn.innerHTML="Downloaded"
    clearInterval(int);
}, 5000);
});