

let src={
    ht:50,
    wt:80,
    age:45
};

let src2={
    name:"Ram",
    gender:"male"
}

//OBJECT CLONING  BY SPREAD OPERATOR

// let dest ={...src};
// // let dest =src; (both refrences  are changing)
// src.age=90;

// console.log("src" , src);
// console.log("dest", dest);


// //OBJECT CLONING  BY ASSIGN OPERATOR

// let dest =Object.assign({} ,src ,src2);
// src.wt=78;
// console.log("src" , src);
// console.log("dest", dest);


// //OBJECT CLONING  BY ITERATION
let dest ={};
for(let key in src){

    let newKey= key;
    let newVal=src[key];
    dest [newKey]=newVal;
}
src.ht=70;
console.log("src" , src);
console.log("dest", dest);


