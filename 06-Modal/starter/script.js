'use strict';
// create several variables for different classes
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btncloseModal = document.querySelector('.close-modal');
// const btnOpenmodal = document.querySelectorAll('.show-modal');
// console.log(btnOpenmodal);
// working with classes using JS
// for (let i = 0; i < btnOpenmodal.length; i++) {
//   console.log(btnOpenmodal[i].textContent);
//   btnOpenmodal[i].addEventListener('click', function () {
//     console.log('button cliked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }
//when click on overlay and close-button, they are bith hidden
// const display_hidden = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btncloseModal.addEventListener(
//   'click',
//   display_hidden
  //     function ()
  //     {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');}
);
// overlay.addEventListener('click', display_hidden);
// 081 keypress event
// keyboard events are global events. We usually listen on document!
// keydown, keyup, keypress are three types of keyboard events
// we define a function below and whenever the keydown event is triggered, JS will pass the event to the function.
// document.addEventListener('keydown', function (event) {
//   console.log('a key is pressed');
//   //   console.log(event);
//   //   console.log(event.key);
//   if (event.key === 'Escape') {
//     console.log('Esc pressed');
//     if (!modal.classList.contains('hidden')) {
//       display_hidden();
//     }
//   }
// });
//