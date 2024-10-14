
// let firstPromise =new Promise((resolve,reject )  =>{
//     console.log("Hello Jee");
//     // resolve(1001);
//     reject(new error("bhaiya error aara  h "));
// })

// // Asynchronous code 
// function sayMyName(){
//     console.log("my name is Dhruv ");
// }

// setTimeout(sayMyName,10000);




// THEN CATCH IN PROMISES 

// let promise1 = new Promise((resolve,reject) =>{
//   let solve=false;
//   if(solve){
//   resolve("Solve hogya bhai ");
//   }
//   else{
//     reject("Solve nhi hua bhai ");
//   }
// });

// promise1.then(message=>{
//     console.log("message is " + message );
// })
// .catch(error =>{
//     console.log("Error is " + error);
// })
// .finally(message =>{
//     console.log("mai to finlal hu chalunga hi pucca");
// })


// Handling Multiple Promises

let promise1 =new Promise((resolve,reject)=>{
    setTimeout(resolve ,1000,"first")
})
let promise2 =new Promise((resolve,reject)=>{
    setTimeout(resolve ,2000,"second")
})
let promise3 =new Promise((resolve,reject)=>{
    setTimeout(resolve ,3000,"third")
})
let promise4 =new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"fourth")
})
Promise.all([promise3,promise2,promise1,promise4])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log( error);
})