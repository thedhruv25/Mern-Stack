// async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data =   await response.json();
//     console.log(data);
// }

// getData();

//SCENARIO
//prepare url / apiendpoint ->sync
// await // fetch data -> network call -> async
//process data ->async




const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url ="https://jsonplaceholder.typicode.com/posts";
const options ={  method: "POST",
    body: JSON.stringify({ username: "Dhruv " }),
    headers: myHeaders,
  }
  async function getData(){
    const url ="https://jsonplaceholder.typicode.com/posts/101";
    const response = await fetch(url);
    let data=await response.json();
    console.log( "get data is :" , data);
  }

  async function postData(){
    const response = await fetch(url,options);
    let data=await response.json();
    console.log( "Post  data is :" , data);
  }

  async function  processData(){
   await  postData();
   await  getData();
  }
  processData();

