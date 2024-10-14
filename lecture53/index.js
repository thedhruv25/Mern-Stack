// function changeText(event){
//     console.log(event);
// let fpara=document.getElementById('fpara');
// fpara.textContent="Hello Dhruv"
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click' , changeText);
// // fpara.removeEventListener('click' , changeText);




// let anchorElement=document.getElementById('fanchor');
// fanchor.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent="bhai kitna padega bs kr"

// });

// let paras = document.querySelectorAll('p');
let mydiv=document.getElementById('wrapper');
function alertpara(event){
  if(event.target.nodeName=='SPAN')
    alert("You have clicked on " + event.target.textContent);
}
mydiv.addEventListener('click' ,alertpara);

// for(let i=0;i<paras.length;i++){
//     let para =paras[i];
//     console.log("Event Listner added ");
//     para.addEventListener('click' ,alertpara);
// }