let mydiv=document.querySelector('#mydiv');
let newElement=document.createElement('span');
newElement.textContent="Aaj 7 October h ";

mydiv.insertAdjacentElement("beforeend",newElement)

// let parent=child.parentElement;
let parent=document.querySelector("#mydiv");
let child=document.querySelector('#fpara');
parent.removeChild(child);