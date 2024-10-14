const t1=performance.now();
let fragment=document.createDocumentFragment();

for(let i=1;i<=100;i++){
let para =document.createElement('p');
para.textContent="This is para " + i +"abc";
//no reflow and np repaint for the below line 
fragment.appendChild(para);
}
//the below line takes 1 reflow and 1 repaint 
document.body.appendChild(fragment);
const t2=performance.now();
console.log("TIme Taken is "+ (t2-t1));




