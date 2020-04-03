"use strict";

//To jest do pwa nie edytuj tutaj nic ...

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}



const counter = document.querySelector('.water__glass--counter');
const add = document.querySelector('.water__add');
const remove = document.querySelector('.water__remove');

// Licznik szklanek

// i = 0;
// add.addEventListener('click', (e) =>{
//   if(i > 10){
//     counter.innerHTML = {i}++;
//   };
// })

// remove.addEventListener('click', (e) =>{
//   if(i > 10){
//     counter.innerHTML = {i}--;
//   };
// })
const sumUp = document.querySelector('.water__sum');

sumUp.innerHTML = `Czas na łyk wody!`;

counter.innerHTML = 0;

add.addEventListener('click', (e) => {
  if(counter.innerHTML < 10){
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    };
  localStorage.setItem('counter', counter.innerHTML);
  sumUp.innerHTML = `Ilość szklanek wody na dziś: ${counter.innerHTML}`;
})

remove.addEventListener('click', (e) => {
  if(counter.innerHTML > 0){
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    };
   localStorage.setItem('counter', counter.innerHTML);
   sumUp.innerHTML = `Ilość szklanek wody na dziś: ${counter.innerHTML}`;
})

// sumUp.innerHTML = `Czas na łyk wody!`;

if (localStorage.getItem('counter')){
  counter.innerHTML = localStorage.getItem('counter');
}

// Funkcja nieużyta

// sumUp.innerHTML = `wypiłeś ${counter.innerHTML} szklanek wody`;

// function description() {
// if (counter.innerHTML = 1){
//   sumUp.innerHTML = `wypiłeś ${counter.innerHTML} szklankę wody`;
// }
// else if(counter.innerHTML = 0 ){
//   sumUp.innerHTML = `wypiłeś ${counter.innerHTML} szklanek wody`;
// }
// else if(counter.innerHTML > 1){
//   sumUp.innerHTML = `wypiłeś ${counter.innerHTML} szklanki wody`;
// }
// else{
//   sumUp.innerHTML = `wypiłeś ${counter.innerHTML} szklanek wody`;
// }
// }