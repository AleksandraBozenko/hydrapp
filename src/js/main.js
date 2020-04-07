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



//Licznik szklanek


add.addEventListener('click', (e) => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
  // localStorage.setItem('counter', currentValue);

})

remove.addEventListener('click', (e) => {

const currentValue = parseInt(counter.innerHTML);

  if(currentValue > 0){
    counter.innerHTML = currentValue - 1;
  //  localStorage.setItem('counter', currentValue);
    };
})


// if (localStorage.getItem('counter')){
//   counter.innerHTML = localStorage.getItem('counter', currentValue);
// }
