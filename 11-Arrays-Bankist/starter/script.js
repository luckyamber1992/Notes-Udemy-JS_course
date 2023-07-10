'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// 142 Simple array methods
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2)); // get the last elements
// console.log(arr.slice(1, -1));
// console.log(arr.slice());
// console.log(Object.assign([], arr));
// console.log(new Set([...arr]));
// // SPLICE( it mutates the array by deleting the chosen element)
// // splice(start,deleteCount,item1,item2,itemN)
// arr.splice(-1);
// console.log(arr);
// // practice
// const months = ['Jan', 'March', 'April', 'June'];
// // console.log(months.splice(1), months);
// console.log(months.splice(0, 1, 'May'), months);
// // REVERSE--it mutates the original arr
// console.log(arr.reverse());
// // CONCAT
// const arr2 = ['Nov', 'Dec'];
// const letters = arr.reverse().concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// //JOIN
// console.log(letters.join('-'));

// //143 The new at methods
// console.log(arr.at(0)); //-->arr[0]
// // geting the last arr element
// console.log(arr[arr.length - 1]);
// console.log(months.slice(-1)[0]);
// // getting the last element in a string
// console.log('jonas'.at(0));

// //144 Looping arrays
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // compare for of loop and foreach loop
// for (const movement of movements) {
//   // if (movement > 0) {
//   //   console.log(`you deposited ${movement}`);
//   // } else {
//   //   console.log(`you withdrew ${Math.abs(movement)}`);
//   // }
//   // movement > 0 && console.log(`You deposited ${movement}`);
//   // movement < 0 && console.log(`You withdrew ${Math.abs(movement)}`);
// }
// // forEach
// console.log(`---foreach loop---`);
// movements.forEach(function (movement, i, arr) {
//   console.log(arr);
//   movement > 0 && console.log(`Movement${i + 1},You deposited ${movement}`);
//   movement < 0 &&
//     console.log(`Movement${i + 1},You withdrew ${Math.abs(movement)}`);
// });
// console.log();
// // Continue or Break do not work in forEach loop
// // if you need to stop the loop in certain iteration, you need to use For of loop

// // 145 forEach with Maps and Sets
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// // loop through a map object
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });
// //set
// const newSet = new Set(['USD', 'EU', 'YUAN']);
// newSet.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });
// newSet[1]; //undefined

// 146 Project
// Data

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc, sort = false) {
  // the first step: empty the container and then add new elements
  // use innerHTML as a selector to empty html content
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// 148 Coding challenge
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const checkDogs = function (dogsJulia, dogsKate) {
//   const JuliaCopy = dogsJulia.slice();
//   JuliaCopy.splice(0, 1);
//   JuliaCopy.splice(-2, 2);
//   console.log(JuliaCopy);
//   const fullList = [...JuliaCopy, ...dogsKate];
//   fullList.forEach(function (dog, i) {
//     console.log(
//       `Dog number ${i + 1} is an ${
//         dog > 3 ? 'adult' : 'still a puppy'
//       }, and is ${dog} years old"`
//     );
//   });
// };
// checkDogs(dogsJulia, dogsKate);

// 149 Data transformation_map,filter,reduce
// map()
const eurToUsd = 1.1;
// const movementUSD = account1.movements.map(function (mov) {
//   return mov * eurToUsd;
// } );
// replacing the call back function above with an arrow function
const movementUSD = account1.movements.map(mov => mov * eurToUsd);

const newMovement = [];
console.log(movementUSD);
for (const mov of account1.movements) {
  newMovement.push(mov * 1.1);
}
console.log(newMovement);
const movementsDescriptions = account1.movements.map(
  (mov, i) =>
    `Movements ${i + 1}:You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions.join(' \n'));
// 151 Computing username
const user = 'Steven Thomas Williams';
// return stw
//forEach
const arr = [];
// userName.forEach( function ( name )
// {
//   arr.push( name[ 0 ] )
// } );
// console.log(arr.join(''));
// Map()

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}; // compute the first initials for each user in the account arr
createUsernames(accounts);
console.log(account1);

// Event handler to user login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // prevent page reload
  e.preventDefault();
  console.log(`login`);
  // find the account of the user
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Dispaly UI and msg
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // clear the user input
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); //remove focus
    updateUI(currentAccount);
  }
});

// calculate balance
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//152 The filter method// only the values pass the condition will be returned into a new arr
const deposits = account1.movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

// const withdrawals = accounts.map( acc => acc.movements.filter( mov => mov < 0 ) );
const withdrawals = accounts.map(function (acc) {
  // return acc.movements.filter(mov => mov < 0);
  return acc.movements.filter(function (mov) {
    return mov < 0;
  });
});
console.log(withdrawals);
// 153 reduce method
const balance = account1.movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
// Maximum value( find the maximum value in the arr)
// const max = account1.movements.reduce( ( acc, mov ) =>
// {
//   if ( acc > mov ) { return acc; }else {return mov}
// }, account1.movements[ 0 ] );
// version 2
const max = account1.movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  account1.movements[0]
);
console.log(max);
// 154 Conding challenge#2
//convert dog age to human age
// calculate the average of dogs
// const calcAverageHumanAge = function (arr) {
//   const ageConversion = arr.map((age, i) => {
//     if (age > 2) {
//       return age * 4 + 16;
//     } else {
//       return 2 * age;
//     }
//   });
//   const adultDog = ageConversion.filter(dogAge => dogAge >= 18);
//   const aveAge = Math.trunc(
//     adultDog.reduce((acc, age) => acc + age, 0) / adultDog.length
//   );
//   return aveAge;
// };
// const calcAverageHumanAge = arr =>
//   arr
//     .map(age => {
//       return age <= 2 ? 2 * age : 16 + age * 4;
//     })
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => {
//       console.log(arr);
//       return acc + age / arr.length;
//     }, 0);
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// 155 The magic of chaining methods
// convert euro into usd
const depositUSD = account1.movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(depositUSD);
// display IN;OUT;INTEREST
const calDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements
    .filter(mov => mov <= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  // interest(only interest>1 will be included)
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// 156 Coding challenge
//Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// SEE line282
// 157 The find Method
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// 159 Implementing transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  // add negative movements to current user;add positive movements to recipients
  // step1: check the current user if having enough balance
  //step2: check whether the input number is positive
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiveAcc &&
    receiveAcc.userName !== currentAccount.userName
  ) {
    console.log(`--valid--`);
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
});
const updateUI = function (acc) {
  displayMovements(acc);
  //Display balance
  calcPrintBalance(acc);
  //Display summary
  calDisplaySummary(acc);
};
// 160 The findindex method
// close account==delete the current user account in the arr
btnClose.addEventListener('click', function (e) {
  // prevent form submission
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === inputCloseUsername.value
    );
    console.log(index);
    //delete acc
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
    // clear close input
    inputCloseUsername.value = inputClosePin.value = '';
  }
});
// 162 Some and every()
// check if there is any num>0 in the arr
const positiveDeposit = account1.movements.some(mov => mov > 0);
console.log(positiveDeposit);
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    currentAccount.movements.push(amount);
    // update ui
    updateUI(currentAccount);
  }
});
//every()---return true only if all elements satisfy the condition
console.log(account1.movements.every(mov => mov > 0));
// 163 flat and flatMap()
//remove the nested arr and flaten the array
const arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(arrFlat.flat(1));
// the flat() only goes one level deep// flat(2) goes two levels deep
// Practice: retrieve all movement elements
// const allMov = accounts.map(acc => acc.movements);
// const movFlaten = allMov.flat();
// console.log(movFlaten);
// // calculate the sum of all movements
// const overallBalance = movFlaten.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
// use chaining to turn all the code above into one line
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
// flatMap() --- it can only go ONE level deep!
const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
// 163 Sorting arrays
// sort() converts everything into a string ,sort them according to alphabetic order and returns an arr
const owners = ['deby', 'jack', 'yamy', 'aby'];
owners.sort();
console.log(owners);
// sort numbers
// console.log(account1.movements);
// account1.movements.sort(
//   (a, b) => a - b
// {
//   if (a > b) return 1;
//   if (a < b) return -1;
// }
// );
console.log(account1.movements);
// realize the sort function
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
// 164 More ways of creating and filling arrays
// create an empty array
const x = new Array(5);
console.log(x);
//x.fill()
x.fill(2, 1, 4); // 4 is the index of the position not included
console.log(x); //
[null, 2, 2, 2, null];
// Array.from
const y = Array.from({ length: 7 }, () => 2);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
const diceRoll = Array.from({ length: 100 }, (_, n) => n + 1);
console.log(diceRoll);
//get movements from user interface
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
} );
// When Array.from() is called with an array-like object or iterable as the first argument, it converts that object into a new array.
// const arrayLike = { length: 4, 0: 'a', 1: 'b', 2: 'c', 3: 'k' };
// const arr_ = Array.from(arrayLike, element => element.toUpperCase());
// console.log(arr_); // Output: ['A', 'B', 'C']
