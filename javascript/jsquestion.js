// type 1.primitive=string,numbers,null,undefined,boolean 
//     2.reference=array,function,object 
// conditional = if else ternary switch
// game of braket=array[],scope{},funtion()

//sir questions:-
//Q.there an arrayy and contain it contains strings and number and only return number in new array
// var arr =[1,3,4,"piyush"]
// var ans= arr.filter(function(val){
//     if(typeof val === "string"){
//     return false
//     }
//     else return true
// })

// Q.add something to each element of array
// var arr =[1,2,3,4,"piyush"]
// var ans= arr.map(function(val){
//     return val+"something"
// })

//only return num
// var arr =[NaN,1]
// var ans= arr.filter(function(val){
//     if(isNaN(val) ===true){
//     return false
//     }
//     else return true
// })
     
// var arr = [{name: "iphone",available: true},{name: "ipad",available: false}]
// var ans = arr.filter(function(val){
//     if(val.available)
//     {
//         return true
//     }
//     else return false                                                                      
// })
// var ans = arr.filter(val=>val.available) shortcutway                                                                                           

//day 2 question on map
//Q 1.sqare the value of every element int the array
// var arr =[3,5,8,10]
// var ans= arr.map(function(val){
//     return val*val
// })


// var arr =["piyush patil"]
// var ans= arr.map(function(val){
//     return val.toUpperCase();
// })

//Q 2.transform an array of string mr add to each string
// var arr =["piyush","pawan"]
// var ans= arr.map(function(val){
//     console.log("Mr",val)
// return `mr.${val}`
// })


// var arr =[-5,-3,0]
// var ans= arr.filter(function(val){
//  return val>0
// })

// var arr = ["piyushpatil","pawan","om"]
// var ans= arr.filter(function(val){
//  return val.length>5
// })
//     console.log(ans)



//sarthak bhaiya all tasks
// 1
// var user = "ram";
// console.log(user);



// 2
// var a=23;
// var b=34;
// console.log("add",a+b);
// console.log("mutiplication",a*b);
// console.log("div",a/b);
// console.log("sub",a-b);

// 3
// var a=5,b=6,c=7;
// console.log("tringle",a*b*c);

//4
//var a = +prompt("enter a")//we can add+ then prompt accept int
// var b = +prompt("enter b")
// var sum = Number((a+b))
// alert(sum)
// if(a===b)
// {
//     console.log(b+sum)
// }
// else {
//     console.log(getout)

// }
//console.log("sum",sum)

//6
// var a = (prompt("enter your name"))
// console.log("hello",a)

//** conditional stataments**
//1
// var a = 3;
// var b =4;
// if(a>b)
// {
//   console.log(a);
// }else{
//   console.log(b);

// }

//2 
// var gender ="male";
// if(gender=="male"){
//     console.log("hello sir")
// }else{
//     console.log("hello mam")

// }

//4
// var num = +prompt("enter the num");
// if(num%2===0){
// console.log("even")
// }else{
// console.log("odd")

// }

//5
// var name =prompt("enter the num");
// var age =+prompt("enter the age");
// if(age>=18)
// {
// console.log("hello",name,"!you are valid voter")
// }else{
// console.log("hello",name,"!you can't cast the voter")
// }

//6
// var num1 =+prompt("enter the num1");
// var num2 =+prompt("enter the num2");
// var num3 =+prompt("enter the num3");
// if(num1>num2 && num1>num3)
// {
//     console.log("large",num1)
// }else if(num2>num1&&num2>num3){
//     console.log("large",num2)
// }
// else{
//     console.log("large",num3)

// }

//7 
// var unit =+prompt("enter the unit");
// if(unit>100){
// console.log(unit*10)
// }else if(unit>50){
//     console.log(unit*8)

// }else{
//     console.log(unit*7)
// }

// 8
// var salary =+prompt("enter the salary");
// if(salary>=100000){
// console.log(salary*30/100)

// }else if(salary>=70000){
//     console.log(salary*20/100)

// }else{
//     console.log(salary*10/100)
// }

//9
// var year =+prompt("enter the year");
// if(year%4===0)
// {
// console.log("It is leap year")
// }else{
// console.log("It is not leap year")
// }

//10
// var marks =+prompt("enter the marks");
// if(marks>90)
// {
// console.log("A+")
// }else if(marks>80&&marks<=90)
// {
// console.log("A")
// }
// else if(marks>70&&marks<=80)
// {
// console.log("B+")
// }else if(marks>60&&marks<=70){
//     console.log("B")
// }else if(marks>45&&marks<=60)
// {
//     console.log("C")
// }else if(marks>=33&&marks<=45){
//     console.log("D")
// }else{
// console.log("F")
// }


//**loops question
// Q1
// var n=  10;
// for( i=0; i<n; i++){
// console.log("hello world");
// }
// var i=0
// while(true){
//     if(i==n)
//     break;
    
//         console.log(i);
    
//     i++
// }
// Q2
// for(i=n; i>=1; i--)
// {
//         console.log(i);

// }

// Q3
// var num=5
// for(i=0; i<=10; i++)
// {
//         console.log(num*i);

// }

// Q3
// var sum=0
// for(i=0; i<=10; i++)
// {
//     sum = sum+i;
    
    
// }
// console.log(sum);


// ask a user bijli bill and if it is more than 100 unit calculate basis on 
// var unit = Number(prompt("enter a unit "))
// if(unit>100){
// console.log(unit*10);
// }
// else if(unit>70 && unit<100){
// console.log("unit more than 70",unit*8);

// }
// else{
// console.log("unit less 70",unit*5);

// }

//if multiple of 5 tha print zandu
// console.log("enter number")

// for(var a=0; a<=50; a++){
//     if(a%5==0){
//         console.log("zandu")
//     }
//     else{
//         console.log(a)
//     }
// }

// function greet(name,age){
// console.log(name,"you have left a year retirement", 60-age)
// }
// var name = "piyush"
// var age = 21;
// greet(name,age)

// Q.26
// for(var i=0; i<100; i++)
// {
//     if(i%3==0 && i%5==0){
//     console.log("sheriyans coding school");
 
//    }
//    else if(i%3==0){
//      console.log("sheriyans");
//    } 
//    else if(i%5==0)
//    {
//     console.log("coding");
    
//    }
// }

// Q28
// for(var i=0; i<100; i++){
// if(i%2==0){
// console.log("even",i);
// }
// else{
//   console.log("odd",i);
// }
// }

//Q29
// for(var i=0; i<100; i++){
// if(i%3==0  || i%5==0){
//   console.log(i);
// }
// }

//Q30
// var num = 12;
// for(var i=0; i<20;i++){
// if(num%i==0){
// console.log(i)
// }
// }

// Q31
// var num=50;
// var sum=0
// for(var i=0; i<50;i++){
//   if(num%i==0){
//     sum+=i
//   }
// }
// console.log(sum)

// Q32
// var num=6;
// var sum=0
// for(var i=1; i<100;i++){
//   if(num%i==0){
//     sum+=i
//   }
// }
// console.log(sum)

// Q33
// var nam = prompt("enter name")
// var sum="";
// var num = +(prompt("enter number"))
// for(var i=0; i<num; i++){
// sum+=nam  
// }
// console.log(sum)

//Q34
// var num = prompt("enter number")
// var digit = num.toString();
// for(var i=0; i<digit.length; i++){
// console.log(digit[i]);
// }

//Q35
// function isprime(numb)
// {

// var res=true;
// for(var i=2; i<numb; i++){
// if(numb%i ==0){
// res = false
// break;
// }
// }
// if(res){
//   console.log("prime");
// }
// else{
//   console.log("not prime");

// }
// if(count==2){
//   console.log("prime") 
// }else{
//   console.log("not prime")  
// }
// }

// var num =parseInt(prompt("enter number"));
// var a=isprime(num);

// Q36
// function greet(yourname){
//   console.log("hello!",yourname,"good morning")
// }
// greet("piyush")

//Q37
// function square(a){
//   console.log("square is ",a*a)
// }
// square(2)

//Q38
// function iseven(num){
// if(num%2==0){
//   return true;
// }
// else{
//   return false;
// }
// }
// console.log(iseven(5))

// Q39
// function countdown(num){
//   for(var i=num; i>=1; i--){
// console.log(i)
//   }
// }
// countdown(5)

//Q40
// var arr=["mango","banana","apple"];
// arr.forEach(function(ele){
// console.log(ele);
// })

// Q41
// var arr=["mango","banana","apple"];
// arr.forEach(function(ele){
//   if(ele==="mango"){
//     console.log("yes present");
//   }
// })

// Q42
// var arr=[];
// for(var i=0; i<=10; i++){
// if(i%2==0){
// arr.push(i);
// }
// }
// arr.forEach(function(ele){
//    console.log(ele);
  
// })

//Q43
// var arr=[1,2,3,4] 
// var sum=0;
// arr.forEach(function(ele){
// sum+=ele
// })
// console.log(sum)

//Q44
// var arr=["piyush","palavi","payal"] 
// var sum="";
// arr.forEach(function(ele){
// sum+=ele
// })
// console.log(sum)

//Q45
// var arr =[2,4,1,10,6,3]
// var max =-1;
// arr.forEach(function(ele){
// if(ele>max)
// {
//   max=ele;
// }
// })
// console.log(max)

//Q46
// var arr=[3,'a','a','a',2,3,'a','a',2,4]
 // var currentele;
// var maxfreqitem;
// var maxfreq=0;
// for(var i=0; i<arr.length; i++) {
//   let count =1;
//   // currentele=arr[i];

//   for(var j=i+1; j<arr.length; j++){
//   if(arr[j]===arr[i]){
//       count++;
//     }
//   }
//   if(count>maxfreq)
//   {
//     maxfreqitem=arr[i];
//     maxfreq=count;

// }
// }

// console.log(maxfreq)
// console.log(maxfreqitem)

//Q45
// var arr=[-3,8,7,6,5,-4,3,2,1];
// arr.sort(function(a,b){
// return a-b;
// });

// arr.forEach(function(ele){
 
//     console.log(ele);
// })

// Q48
// var arr=[2,3,4,5,6,7]
// var ans=arr.map(function(val){
// return val*val
// })

//Q49
// var arr=["piyush","harsh","rohit"]
// var ans=arr.map(function(val){
// return val.toUpperCase();
// })
// // Q50
// var arr=["piyush","harsh","rohit"]
// var ans=arr.map(function(val){
// return "Mr"+val;
// })

// Q51
// var arr=[3,5,30,6,7,20]
// var ans=arr.map(function(Celsius){
// return (Celsius * 9/5) + 32;
// })

// Q52
// var arr=[3,-1,4,-9,3,-8]
// var ans=arr.filter(function(val){
//     if(val>0)
//     {
//         return val;
//     }
// })

// Q53
// var arr=[1,2,3,4,5,6,7]
// var ans=arr.filter(function(val){
//     if(val%2==0)
//     {
//         return val;
//     }
// })

// Q53
// var arr=["piyushsccd","hars","rohi",]
// var ans=arr.filter(function(val){
//     if(val.length>=5)
//     {
//         return val;
//     }
// })

// Q54
// var arr=[1,2,3,4,5]
// var n=arr.length;
// for(var i=0; i<=n/2; i++)
// {
//    let temp=arr[i];
//    arr[i]=arr[n-i-1]
//    arr[n-i-1]=temp
// }
// var i=0;
// var j=arr.length-1
// while(i<=j){
//     let temp=arr[i];
//     arr[i]=arr[j]
//     arr[j]=temp 
//     i++;
//     j--;
// }

//***object questions */
// Q56
// var person={
// name: "piyush patil",
// age: 21,
// city: "Bhopal"
// }
// console.log(person.name)
// for(property in person){
//     console.log(property,":",person[property])
// }

//Q57
// var person={
// name: "piyush patil",
// age: 21,
// city: "Bhopal"
// }
// person.ocupation=20000
// console.log(person)

// Q58
// var calculate={
//     add: function(a,b){
//      return a+b;
//     },
//     sub: function(a,b){
//      return a-b;
//     },
//     div: function(a,b){
//      return a/b;
//     },
//     mul: function(a,b){
//      return a*b;
//     }
// }

// console.log(calculate.add(1,3))

// Q59
// var book1 ={
//     title: "maths",
//     author: "piyush",
//     year: "2022"
// }
// var book2 ={
//     title: "physics",
//     author: "tarun",
//     year: "2023"
// }
// var book3 ={
//     title: "chemestriy",
//     author: "harsh",
//     year: "2024"
// }
// var arr=[book1,book2,book3]
// arr.forEach(function(elem){
// console.log(elem.title)
// })

//Q60
// var arr=[1,2,3,4,5]
// var a = filterEvenNumbers(arr)
// console.log(a)

// function filterEvenNumbers (arr){
// var fil=arr.filter(function(elem){
// if(elem%2==0){
//     return elem
// }
// })
// return fil;
// }


//Q61
// var arr=[{name: "piyush",garde: [85,60,70]},
// {name: "tarun",garde: [40,30,60]},]
// var threashhold=80;
// function calavg(garde){
//     var sum=0;
//     for(var i=0; i<garde.length; i++){
//         sum+=garde[i]
//     }
//     return sum/garde.length
// }
// function passorfail(avarage,threashhold){
// if(avarage>=threashhold){

//     console.log("pass")
// }
// else{
//     console.log("fail")

// }
// }
// for(var i=0; i<arr.length; i++){
// var avarage=calavg(arr[i].garde)
// var passfail= passorfail(avarage,threashhold)
// console.log(avarage,passfail)
// }

// Q62
// var obj={name:"piyush patil",height: 23,weight: 40}
// function calculateBMI(obj){
//        var heightinmeter=obj.height;
//        var weightin=obj.weight;
//        const bmi =  weightin/(heightinmeter**2)
//        return bmi;
// }
// console.log(calculateBMI(obj))

//javascript prepare
//1. check the given value is array or not.
// function checkarray(arr){
// return Array.isArray(arr)
// }
// console.log(checkarray(1))
// console.log(checkarray([1,2,3]));

//2.cloned array pass
// function cloned(inp){
//     var coln=[...inp]//spread operater
//     return coln;
// }
// console.log(cloned([1,2,3,4,5,6,7]));

// q3 get first element of array
// function getelem(arr,get=1){
//     var  cloned= [];
// for(var i=0; i<get; i++){
    
//     cloned.push(arr[i])
// }
// return cloned
// }
// console.log(getelem([2,2,3,4]))

//q4 join all elem string in array
// function joinarr(inp){
//     var col=[...inp]
// return col.join('+')
// }
// console.log(joinarr(['piyush','tarun']));