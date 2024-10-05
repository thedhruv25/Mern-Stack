// class Human{
//     age;
//     gender='male';
//     #ht=90;
//     wt=78;

//     constructor(newage , newweight, newheight){
//         this.age=newage;
//         this.#ht=newheight;
//         this.wt=newweight;
//     }
//     walking(){
//         console.log("He is walking");
//     }
//     eating(){
//         console.log("He is eating",this.#ht);
//     }
//     running(){
//         console.log("He is running");
//     }
//  //to ftech privtae field outside the class we use get and set 
//     get fetchHeight(){
//         return this.#ht;
//     }

//     set fetchHeight(val){
//         this.#ht=val;
//     }
// }

// let obj = new Human(50,60,70);
// console.log(obj.wt);
// obj.eating();

//DEFAULT PARAMETER

// function sayMyName(fname = "SHyan",lname="Singh"){
//     console.log( fname, " ", lname)
// }
// sayMyName("Ram");

//DEFAULT PARAMETER (OBJECT AND ARRAY PASSING)

// function solve(value=[10,20,30,40,50]){
//     function solve(value=["love" , "hello", "ji"]){
//     console.log("HELLO JI KAISA Ho" , value);
// }
// solve(undefined);


//DEFAULT PARAMETER (FUNCTION)

function getage() {
   return 90;
   
}
function utility(name="Rahul",age = getage()){
    console.log(name, " " ,age);
}

utility();