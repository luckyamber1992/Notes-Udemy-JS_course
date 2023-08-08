'use strict';
// // const flight = 'LH234';
// // const jonas = {
// //   name: 'Jonas Schemedtamn',
// //   passport: 2338848,
// // };
// // const checkIn = function (flightNum, passenger) {
// //   flightNum = 'Lh765';
// //   passenger.name = 'Mr.' + passenger.name;
// //   if (passenger.passport === 2338848) {
// //     console.log(`${flightNum}, ${passenger.name} is cheked in`);
// //   } else {
// //     alert(`Wrong passport!`);
// //   }
// // };
// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);
// // the operation above is the same as doing:
// // const flightNum = flight; // 复制primitives
// // const passenger = jonas; // 复制引用

// // const newPassport = function (person) {
// //   person.passport = Math.trunc(Math.random() * 10000000);
// // };
// // newPassport(jonas);
// // checkIn(flight, jonas);

// // functions receive Callback functions
// const oneWrod = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// console.log(oneWrod('ss  ss'));

// const upperFirstword = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// console.log(upperFirstword('hello wORLD'));
// // Higher-order function
// const transformer = function (str, fn1, fn2) {
//   console.log(`Orginal string:${str}`);
//   console.log(`Transformed string: ${fn1(str)}`);
//   console.log(`Transformed string:${fn2(str)}`);
//   console.log(`Transformed by: ${fn1.name},${fn2.name}`);
// };
// transformer('Javascript is the best!!!', upperFirstword, oneWrod);
// // call back function used in event listener
// // const hi5 = function () {
// //   console.log('emoji');
// // };
// // document.body.addEventListener('click', hi5);
// // Functions that return a new function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };
// const greeter = greet('Hi');
// greeter('stev');
// greet('Hi')('Stev!');
// // rewrite greet function using arrow function
// const greet1 = greeting => name => console.log(`${greeting}, ${name}`);
// // The call and apply methods
// const ludjf = {
//   airline: 'LBH',
//   iataCode: 'Baidu.com',
//   bookings: [],
//   //book:function{}
//   //or
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} website at ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.airline} website at ${this.iataCode}`,
//       name_: `${name}`,
//       flightNumber: `${flightNum}`,
//     });
//   },
// };
// ludjf.book(222, 'Amber');
// console.log(ludjf.bookings);
// // make this keyword dynamically point to the object calls it
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const book = ludjf.book;
// // book(23, 'sara'); // Error msg: TypeError: Cannot read properties of undefined (reading 'airline')
// // this is becasue book is a copy of ludjf.book and this now points to the global object which is undefined!
// // solutions
// // call method
// book.call(eurowings, 23, 'Sarah'); // call method set this keywork points to the first argument we pass to the book function.
// book.call(ludjf, 233, 'mike');
// // Apply method-- Not used
// const flightData = [588, 'georage Cooper'];
// book.apply(eurowings, flightData);
// book.call(eurowings, ...flightData);
// // The bind method
// // bind does not work on the function but create a new fucntion which this keyword is bound to
// const bookEW = book.bind(eurowings);
// bookEW(23, 'William');
// console.log(eurowings);
// // a level up
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('lilu');
// // with Event listeners
// ludjf.planes = 300;
// console.log(ludjf);
// ludjf.buyPlane = function () {
//   console.log(this); // ludjf
//   this.planes++;
//   console.log(this.planes);
// };
// // ludjf.buyPlane()
// document
//   .querySelector('.buy')
//   .addEventListener('click', ludjf.buyPlane.bind(ludjf));
// // Partial application
// // const addTax = (rate, value) => value + value * rate;
// // const addVAT = addTax.bind(null,0.23);
// // console.log(addVAT(100));
// // Challenge: create a function and returns a function do what addvat does
// const addTAx = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// console.log(addTAx(0.23)(100));
// const addVaT = addTAx(0.23);
// console.log(addVaT(120));
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   // get the user input answer
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question} \n
// ${this.options.join('\n')}\n(Write option number)`)
//     );

//     //update the answers array
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);
//     this.disPlayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
// immediately invoked expression functions
// const runOnce = function () {
//   console.log(`Run Once!`);
// };
// runOnce();
// simpler version
// (function () {
//   console.log(`Run once`);
// } )();

// ( () => console.log( 'run once!' ) )();
// Closures

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
// Example2
const boardPass = function (n, wait) {
  // const perG = n / 3;
  setTimeout(function () {
    console.log(`has ${n} passenger`);
    console.log(`There are 3 groups, each with ${perG} people`);
  }, wait * 100);
  console.log(`starting in ${wait}`);
};
const perG = 100;
boardPass(3, 10);
// coding challenge2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('h1').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
