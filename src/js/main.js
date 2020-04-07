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
const key = new Date().toISOString().slice (0, 10);


if(!localStorage.getItem(key)){
  localStorage.setItem(key, 0);
  counter.innerHTML = '0';
} else{
  counter.innerHTML = localStorage.getItem(key);
}

//Licznik szklanek

add.addEventListener('click', (e) => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  counter.innerHTML = localStorage.getItem(key);
})

remove.addEventListener('click', (e) => {

const currentValue = parseInt(localStorage.getItem(key));

  if(currentValue > 0){
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
    counter.innerHTML = parseInt(localStorage.getItem(key));
    };
})

