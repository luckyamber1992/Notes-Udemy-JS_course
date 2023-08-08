'use strict';
// function calAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// }
// const firstName = 'John';
// calAge(1991);
// 095 hoisting and TDZ
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1992;
// var x = 1;
// let y = 2;
// const z = 3;
// var creates a x object which is a global window object
// console.log(x === window.x);->true
// console.log(y === window.y);->false
// console.log(z === window.z);->false
const jonas = {
  name: 'Amber',
  year: 1989,
  calAge: function () {
    return 2037 - this.year;
  },
};
console.log(jonas.calAge());

const mary = {
  year: 1992,
};
mary.calAge = jonas.calAge;
mary.calAge();
