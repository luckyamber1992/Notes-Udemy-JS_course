'use strict';
// console.log( document.querySelector( '.message').textContent );
// what is DOM?
// It is the structured representation of HTML documents. It allows JS to access HTML elements and styles to
// manipulate them, i.e., CHANGE text,HTML attributes and CSS styles
/* 
DOM interact with JS through web API
*/
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number😛';
// DOM manupulation: select Score and NUmber
// document.querySelector( '.number' ).textContent= 13;
// document.querySelector( '.score' ).textContent = 2;

// Set the value
// document.querySelector( '.guess' ).value = 23;
// check the input value
// console.log( document.querySelector( '.guess' ).value );
// 073 Handling click events
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//     console.log( guess, typeof guess );
//     // check if there is a value, if NOT, guess ==0; send a msg as a response
//     if ( !guess )
//     {
//        document.querySelector('.message') .textContent = 'No number!'
//     }
// });
// 074 Implementing the game logic
// define a random number for game comparison
// const SecretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   // check if there is a value, if NOT, guess ==0; send a msg as a response
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//   }
//   // when player wins
//   else if (guess == SecretNumber) {
//     document.querySelector('.message').textContent = 'Correct guess';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = SecretNumber;
//     // update highscore
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess > SecretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you fail the game';
//     }
//   } else if (guess < SecretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you fail the game';
//     }
//   }
// });

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Guess a number!');
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
// 078 refactoring code-the dry principle
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // check if there is a value, if NOT, guess ==0; send a msg as a response
  if (!guess) {
    displayMessage('No number!');
  }
  // when player wins
  else if (guess == SecretNumber) {
    displayMessage('Current guess');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = 'SecretNumber  🏆';
    // update highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 0) {
      displayMessage(guess > SecretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You fail the game');
    }
  }
});
