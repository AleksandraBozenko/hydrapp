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


counter.innerHTML = 0;
add.addEventListener('click', (e) => {
  if(counter.innerHTML < 10){
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    };
  localStorage.setItem('counter', counter.innerHTML);
})

remove.addEventListener('click', (e) => {
  if(counter.innerHTML > 0){
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    };
  localStorage.setItem('counter', counter.innerHTML);
})

if (localStorage.getItem('counter')){
  counter.innerHTML = localStorage.getItem('counter');
}