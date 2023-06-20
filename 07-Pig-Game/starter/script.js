'use strict';
// define variables
let currentScore;
let activePlayer;
let holdScore;
let scores;
let playing;
// define functions
const switchPlayer = function () {
  // switch to the other palyer
  // create a variable to hold the current player
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // switch background color
  //toggle: add class if not present; remove class if present
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
// selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const diceElement = document.querySelector('.dice');
// starting conditions
diceElement.classList.add('hidden');
score0EL.textContent = 0;
score1EL.textContent = 0;

// select rolldice button and generate a random dice number
rollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // dispaly the dice number with img
    diceElement.src = `dice-${dice}.png`;
    diceElement.classList.remove('hidden');
    // compare if dice number is 1,if true,switch player
    if (dice !== 1) {
      currentScore += dice;
      // dispaly current score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0EL.textContent = currentScore; // assume player 0 is the active player
    } else {
      switchPlayer();
    }
  }
});
// hold button function：点击hold的时候，score会加上currentscore并且display
holdDice.addEventListener('click', function () {
  if (playing) {
    // update the score value of current active player
    // disable the rool dice button
    // if not, switch player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if socre >=100, the winner goes to the current player
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // remove player-active class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
// New game function
// My Version 👇
// newGame.addEventListener('click', function () {
//   playing = true;
//   scores = [0, 0];
//   diceElement.classList.add('hidden');
//   currentScore = 0;
//   score0EL.textContent = currentScore;
//   score1EL.textContent = currentScore;
//   current0EL.textContent = currentScore;
//   current1EL.textContent = currentScore;
//   if (
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.contains('player--winner')
//   ) {
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.remove('player--winner');
//   }
//   if (!player0.classList.contains('player--active')) {
//     player1.classList.remove('player--active');
//     player0.classList.add('player--active');
//   }
//   activePlayer = 0;
// });

// Answer👇
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0EL.textContent = currentScore;
  score1EL.textContent = currentScore;
  current0EL.textContent = currentScore;
  current1EL.textContent = currentScore;
  diceElement.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
// do not call init function, JS will call it!
newGame.addEventListener('click', init);
// Finished!
