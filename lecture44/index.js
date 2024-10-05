// OBJECT CREATION

// let obj={
//     name:"Dhruv",
//     age:25,
//     gender:"male",
//     greet :function(){
//   console.log("AAj hum seek rhe h arrays in js");
//     }
// }


//  FOR IN 
// for(let key in obj){
//     console.log(key, " " ,obj[key]);
// }


// console.log(obj);
// obj.greet();

// console.log(typeof(obj));


// ARRAY CREATION

// let arr=[1,2,3,4,5,6,7,8];
// //array constructor
// let brr= new Array('love',34,true,7);
// brr.push(67);
// console.log(brr);
// brr.pop();
// console.log(brr);

// brr.shift();
// console.log(brr);
// brr.unshift(56);
// console.log(brr);

// console.log(brr.slice(0,2));
// brr.splice(0,2,'hello'); //0,2 pe hello se replace krdia
// console.log(brr);
// brr.splice(2,0,'fello'); // remove nhi hua2 index pe bs isert kra h 
// console.log(brr);


// console.log(arr);


//MAP CREATION 

// let arr=[10,20,30,40];

// arr.map((number,index) => {
//    console.log(number*number,index);

// })


//FILTER

   // let arr=[1,2,3,4,5,6,7,8,,10];

   // let evenArray=arr.filter((number) =>{

   //     return number%2==0;
// if(number%2==0){
//     return true;
// }
// else{
//     return false;
// }

    //})
    //console.log(evenArray);
    

    //REDUCE 

//     let arr=[10,20,30,40];

//     let ans=arr.reduce((acc,curr) =>{
// return acc+curr;
//     },0)
//     console.log(ans);


//SORT

// let arr=[10,4,60,89,9,2,18,7];
// arr.sort();

// console.log(arr);
// console.log(arr.indexOf(2));

//FOR EACH

// let arr=[10,20,30,40,50,60];

// let length=arr.length;
// console.log("length is ",length);


// for(let index=0;index<length;index++){
//     console.log(arr[index]);
// }
// let ans=arr.forEach((value,index) => {
//     console.log("value is " , value , "index is" ,index);
    
// });


//FOR OF

// let arr=[10,20,30,40];

// for(let val of arr){
//     console.log(val);
// }


//ARRAYSWITH FUNCIONS

let arr=[10,20,30,40];

function getsum(arr){
let sum=0;
    arr.forEach((value) =>{
        sum=sum+value;
})
    return sum;
}
//     let n=arr.length;
//     let sum=0;
// for(index=0;index<n;index++){
//     sum=sum+arr[index];
    
// }
// return sum;
//}
let totalsum=getsum(arr);
console.log(totalsum);