'use strict';

// Data needed for first part of the section
const weekD = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  [weekD[0]]: {
    open: 12,
    close: 22,
  },
  Tue: {
    open: 11,
    close: 23,
  },
  Sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
  Fri: {
    open: 1,
    close: 2,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,
  orderDelivery: function ({
    starterIndex: str = [],
    mainIndex,
    time,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[str]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`here is ur pasta with ${ing1}, ${ing2}, and ${ing3}`);
  // },
  // this can also be written as
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is ur pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza: function (mainM, ...otherM) {
    console.log(mainM, otherM);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'new avenue',
  mainIndex: 1,
  starterIndex: 1,
});
// // the spread operator
// // old method
// // const arr = [7, 8, 9];
// // const badArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badArr);
// // // using spread operator
// // const newArr = [1, 2, ...arr];
// // console.log(`newArr`, newArr);

// // const newM = [...restaurant.mainMenu, 'brocli'];
// // console.log(newM);
// // // Iterables: str..
// // const J = 'missA';
// // const N_j = [...J, 's.'];
// // console.log(N_j);
// // const ingdients = [
// //   prompt(`let\' make ing1?`),
// //   prompt(`let\' make ing2?`),
// //   prompt(`let\' make ing3?`),
// // ];
// // console.log(ingdients);
// // restaurant.orderPasta(...ingdients);
// //spread operator works on Objects
// // const newRestaurant = { ...restaurant, founder: 'Mike' };
// // console.log(newRestaurant);
// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.founder = 'Jack';
// // console.log(restaurantCopy);
// // rest pattern
// // const [a, b, ...others] = [1, 2, 3, 4];
// // console.log(a, b, others);
// // rest pattern-objects
// // const { fri, ...weekdays } = restaurant.openingHours;
// // console.log( fri );
// // functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4);
// const x = [23, 23, 43];
// add(...x);
// restaurant.orderPizza('mushroom', 'apple', 'banana', 'orange');
// // object destructuring
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);
// // reassign property name
// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);
// // const { menu = 'default', openingHours: hrs = 'default' } = restaurant;
// // console.log(menu, hrs);
// //  mutating variables using a code block
// // let a = 1;
// // let b = 2;
// // const obj = { a: 23, b: 12, c: 12 };
// // ({ a, b } = obj);
// // console.log(a, b);
// //Nested objects
// // const {
// //   fri: { open, close },
// // } = openingHours;
// // console.log(open, close);

// // nested objects -reassign name
// // const {
// //   fri: { open: o, close: c },
// // } = restaurant.openingHours;
// // console.log(o, c);

// // const arr = [2, 3, 4];
// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);
// // switch main and secondary
// // method 1
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);
// // method2
// // [main, secondary] = [secondary, main];
// // console.log(`switch:`, main, secondary);
// // receive 2 return values from a function
// // console.log(restaurant.order(2, 0));
// // const [starter, maincourse] = restaurant.order(2, 0);
// // console.log(starter, maincourse);

// // const nested = [2, 3, [5, 6]];
// // // retrive 2 and [5,6]
// // const [i, , j] = nested;
// // console.log(i, j);
// // // retrive 2,6
// // const [c, , [a, b]] = nested;
// // console.log(c, b);
// // // set default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);
// // short circuiting
// console.log(`--or,||--`);
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log('' || '');
// console.log(true || 0);
// console.log(undefined || null);
// //判断variable是否存在
// const guest1 = restaurant.numGuest ? restaurant.numGuest : `no value:` + 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 23;
// console.log(guest2);
// // let num1 = 10;
// // const numCheck = num1 ? num1 : 10;
// // console.log(numCheck);
// let num = undefined;
// const guest3 = num || null;
// console.log(guest3);
// // And short circuiting
// console.log(`--and--`);
// console.log(0 && 'Jonas');
// // practical examples
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'brocoli', 'lettuce');
// // }
// // the if code block is the same as the code as follows
// restaurant.orderPizza &&
//   restaurant.orderPizza('mushrooms', 'brocoli', 'lettuce');

// // nullish : null and undefined (NoT include 0 and '')
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // logical assignment operator
// //or assignment operator
// const rest1 = {
//   numGuests: 0,
//   name: 'Jack',
// };
// const rest2 = {
//   name: 'mike',
//   owner: 'kelly',
// };
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// // console.log(rest1.numGuests);
// // console.log(rest2.numGuests);
// // nullish assignment operator (NoT work on 0 and ''!)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1.numGuests);
// console.log(rest2.numGuests);
// // and assignment operator
// // rest1.owner = rest1.owner && 'Anonymous';
// // rest2.owner = rest2.owner && 'Anonymous';
// rest1.owner &&= 'Anonymous';
// rest2.owner &&= 'Anonymous';
// console.log(rest1);
// console.log(rest2.owner);

// coding challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// TASKS
// TASK1
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
// The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
// Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus
//'Thiago', 'Coutinho' and 'Perisic'
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...player) {
  console.log(player);
  console.log(`${player.length} goals were socred!`);
};
printGoals(...game.scored);
//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary
//operator.
// const who_Wins = game.team1 < game.team2 ? game.team1 : game.team2;
// console.log(who_Wins);
game.team1 > game.team2 && console.log(`${game.team2} is more likely to win`);
game.team1 < game.team2 && console.log(`${game.team1} is likely to win`);

// The for loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item of menu) console.log(item);
// entries
// console.log(menu.entries());
for (const item of menu.entries()) {
  // console.log(`${item[0] + 1}:${item[1]}`);
  console.log(item);
}
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
// optional chaining
console.log(restaurant.openingHours?.Mon?.open);
// Example
const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
for (const day of days) {
  console.log(day);
  const check = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`check for available days:${day}day opens at ${check}`);
}
// methods - check if a method exists before calling it
console.log(restaurant.order?.(1, 2) ?? 'methods undefined!');
// Arrays
const users = [{ name: 'Jonas', email: 'sdf@132.com' }];
console.log(users[0]?.name ?? 'name not defined');
// loopig objects
// loop through keys
console.log(Object.keys(openingHours), Object.keys(openingHours).length);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
const properties = Object.keys(openingHours);
let openhr = `we open ${properties.length} days`;
for (const day of properties) {
  openhr += `${day},`;
}
console.log(openhr);
// property values
const value = Object.values(openingHours);
console.log(value);
let timeUpdate = [];
for (const time of value) {
  timeUpdate.push(time.open);
}
console.log(`open time at ${timeUpdate}`);
// entire object
const entries = Object.entries(openingHours);
console.log(entries);
// loop through objects using entry method
for (const [key, { close, open }] of entries) {
  console.log(`on ${key} day , we open at ${open} and close at ${close}`);
}
// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
//-------------------------------My answer---------------
// let i = 0;
// for (const p of game.scored) {
//   i += 1;
//   console.log(`Goal ${i} : ${p}`);
// }
// --------------------Standard answer

for (const [i, newPlayer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${newPlayer}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

let ave = 0;
for (const odd of Object.values(game.odds)) {
  ave += odd;
}
ave /= Object.values(game.odds).length;
console.log(ave);
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victor ${game[team]}`;
  console.log(`odd of ${teamStr} : ${odd}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
// const Game = {
//   team1: 'Bayern Munich',
//   team2: 'Borussia Dortmund',
// };

// // const team = 'team1';
// console.log(game[team]); // Outputs: 'Bayern Munich'
// SETS
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pizza']);
console.log(orderSet);
// --check for existant variable
console.log(orderSet.has('banana'));
//-----add elements
orderSet.add('Garlic');
//----delete elements
orderSet.delete('Pasta');
console.log(orderSet);
// delete all
// orderSet.clear()
// loop through set
const staff = ['waiter', 'waiter', 'waitress', 'chef', 'waiter', 'waiter'];
let staffUnique = new Set(staff);
console.log(staffUnique.size);
staffUnique = [...staffUnique];
console.log(staffUnique);
// ---counting how many letters in a name-----
console.log(new Set('hdjfjjf').size);
// MAP
const rest = new Map();
rest.set('name', 'Lily');
rest.set(1, 'new');
rest.set(2, 'update');
console.log(rest);
rest
  .set(true, 'we are open')
  .set(false, 'we are closed')
  .set('open', 11)
  .set('close', 21);
console.log(rest);
console.log(rest.get(true));
const time = 18;
console.log(rest.get(time > rest.get('open' && time < rest.get('close'))));
console.log(rest.has('name'));
console.log(rest.entries());
console.log(rest.delete(2));
console.log(rest.entries());
const arr = [1, 2];
rest.set(arr, 'test');

console.log(rest.get(arr));
// turn html into a map
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(document.querySelector('h1')));
// convert objects to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Map iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`result: ${key}:${value}`);
}

//make judgements about if the number you give is bigger than the key value in the question object.
// const answer = Number(prompt(`give a number: `));
// console.log(question.get(question.get('correct') === answer));
// convert map to array
// console.log(question);
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);

// const testset = new Set(['apple', 'apple', 'pear']);
// console.log(testset);
// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// const events = new Set([]);
// for (const [key, value] of gameEvents) {
//   events.add(value);
// }
// console.log(events);
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents.has(64));

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

const aveTime = [...gameEvents.keys()].pop() / gameEvents.size;
console.log(`An event happened, on average, every ${aveTime} minutes`);
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}:${value}`);
}
// STRINGS
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane.length);
// look for index of a letter in a string
console.log(airline.indexOf('T')); // ---> look for the firt occurrence
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('m'));
// slice method
// the number indicates where the slicing starts
console.log(airline.slice(4));
//the end value is NOT included
console.log(airline.slice(4, 7));

// look for the first word
console.log(airline.slice(0, airline.indexOf(' ')));
// look for the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
const checkMiddleseat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You got the middle seat`);
  } else {
    console.log(`You are Lucky`);
  }
};
checkMiddleseat('11B');
checkMiddleseat('2B');
checkMiddleseat('2A');
// uppercase or lowercase of a string
console.log(airline.toLocaleUpperCase());
console.log(airline.toLocaleLowerCase());
// practice: change jOnAS to Jonas
const passenger = 'jOnAS';
const passengerU = passenger.toUpperCase();
console.log(passengerU);
const passengerCorrect = passengerU[0] + passengerU.slice(1).toLowerCase();
console.log(passengerCorrect);
// write a function takes in any arbitary passenger name and returns the correct one
const nameCorrection = function (nAme) {
  const correctOne = nAme[0].toUpperCase() + nAme.slice(1).toLowerCase();
  console.log(correctOne);
};
nameCorrection('kHHHa');
// check user input email
// trim method : removes whitespace
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.IO';
const lowerE = loginEmail.toLowerCase();
const trimEmail = lowerE.trim();
// simplified version
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);
// replacing parts of a string
const priceYuan = '288,97¥';
const priceUS = priceYuan.replace('¥', '$').replace(',', '.');
console.log(priceUS);
// the repalce() only replaces the first occurrence of the word
// replaceAll()
const notes = 'All passenger come to boarding door 23. Boarding door 23!';
console.log(notes.replaceAll('door', 'gate'));
// Booleans
const planeBoolean = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('A1'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('congrats');
}
// Practice: check if the passenger carries a gun/ knife
const checkGun = function (item) {
  if (
    item.toLowerCase().includes('gun') ||
    item.toLowerCase().includes('knife')
  ) {
    console.log(`You are NOT allowed to get onboard!`);
  } else {
    console.log(`welcome onboard`);
  }
};
checkGun('i have a gun');
// split(): it uses a symbol to convert a string into a list
console.log(`a.very.nice.string`.split('.'));
// destructuring
const [firstName, lastName] = 'Jonas Scheme'.split(' ');
console.log(firstName);
// join() method
const newname = ['mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newname);
// write a function to uppercase the first letter of all name in a string
const capitalizename = function (name) {
  // let nameUppercase = '';
  const nameList = name.split(' ');
  // Answer
  let namesUpper = [];
  for (const n of nameList) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
  // my version
  // for (const letter of nameList) {
  //   const letterU = letter[0].toUpperCase() + letter.slice(1) + ' ';
  //   console.log(letterU);
  //   nameUppercase += letterU;
  // }
  // console.log(nameUppercase);
};
capitalizename('jessica ann smith davis');
// Padding: to add up the length of a string
const msg = 'Go to gate 21!';
console.log(msg.padStart(25, '+').padEnd(28, '+'));
// const maskcREDITcrad = function (number) {
//   const str = number + ' ';
//   const lastFour = str.slice(0, -8).padEnd(str.length, '*');
//   console.log(lastFour);
// };

// mask the first few numbers
const maskcREDITcrad = function (number) {
  const str = number + '';
  const lastFour = str.slice(-4).padStart(str.length, '*');
  console.log(lastFour);
};
maskcREDITcrad(123568889909);
// Repeat method: repeat the same string for multiple times
const message2 = 'Bad weather... All departures Delayed... \n';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line \n ${'🏹\n'.repeat(n)}`);
};
planesInline(4);
// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// My answer
// const camelCase = function (text) {
//   const camelArr = [];
//   camelArr.push(...text.split('_'));
//   camelArr[1] = camelArr[1][0].toUpperCase() + camelArr[1].slice(1);
//   const newcamelCase = camelArr.join('');
//   console.log(newcamelCase);
// };
// camelCase('underscore_case');
// camelCase('first_name');
// camelCase('Some_Variable');
// camelCase('calculate_AGE');
// camelCase('delayed_departure');
// Standard answer
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}    ${'✅'.repeat(i + 1)}`;
//     console.log(output);
//   }
// });
// String exercise 2
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980; fao93766109; 12:05 + _Departure; fao93766109; lis2323639855; 12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
for (const [i, flight] of flights.split('+').entries()) {
  const newFlight = flight.split(';');
  newFlight[0] = newFlight[0].replaceAll('_', ' ').trim();
  newFlight[3] = newFlight[3].trim().replace(':', 'h');

  const from = newFlight[1].slice(0, 3).toUpperCase();
  const to = newFlight[2].trim().slice(0, 3).toUpperCase();
  //the variable defined above can actually be replace by destructuring method
  //const [type,from,to,time]= flight.split(';')
  const output1 = `${newFlight[0]} from ${from} to ${to} (${newFlight[3]})`;
  const output2 = i % 2 != 0 ? '🔴' + output1 : output1;
  console.log(output2.padStart(45, ' '));
}
//Done
