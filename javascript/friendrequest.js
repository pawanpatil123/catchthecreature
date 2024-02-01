var btn = document.querySelector("button");
var statu = document.querySelector("#status")
var flag = 0;
btn.addEventListener("click",function(){
  if(flag==0)
  {
    statu.innerHTML="sending request..."; 
      setTimeout(() => {
          statu.innerHTML="Friends";
          statu.style.color="green";
          btn.innerHTML="Remove friend"
          
        }, 3000);
        flag=1;
    }
    else{
        statu.innerHTML="Stranger";
        statu.style.color="red";
        btn.innerHTML="Add friend"
        flag=0;
    }
})