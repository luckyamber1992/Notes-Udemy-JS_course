'use strict';
const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};
//1. new {} is created
//2. function is called, this={}
//3. {} linked to prototype
//4.function automatically return {}

// Prototypes
Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};
const jonas = new Person('john', 1990);
// any objects have access to its prototype
//check the prototype of an object
console.log(jonas.__proto__);
console.log(Person.prototype === jonas.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas));

// add properties not just methods to prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);
//Note: species is not owned by jonas
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3];
console.log(arr.__proto__.__proto__.__proto__);
//不建议这么做
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

//coding challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
car1.accelerate();
car2.accelerate();
car1.brake();
//ES6 CLASSES
// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //this will be added to the .prototype property
  calAge() {
    console.log(2037 - this.birthYear);
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  //Static method
  //Static methods,are accessed on the class itself.
  static hey() {
    console.log('hey there');
    console.log(this);
  }
}
// const Jess = new PersonCl('Jess', 1996);
// console.log(Jess);
// console.log(Jess.__proto__ === PersonCl.prototype);

//1. classes are NOT hoisted; 2. classes are first-class citizens; 3.classes are executed in strict mode

// getters and setters
// getters
const account = {
  owner: 'Jonas',
  movements: [1, 2, 3],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
//use latest as a property
console.log(account.latest);

account.latest = 5;
console.log(account.movements);

const jessica = new PersonCl('jessie K', 1998);
console.log(jessica.fullName);
// static method
const Mike = new Person('mike', 1992);
const jack = new Person('jack', 1989);
console.log(Mike instanceof Person);
// Person.hey = function () {
//   console.log(`${this},hey!`);
// }; //this keyword is the Person constructor function
PersonCl.hey();
const yi = new PersonCl('yi Yang', 1992);
console.log(yi);
//Object.create
const Personproto = {
  calAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const stev = Object.create(Personproto);
console.log(stev);
stev.name = 'steven';
stev.birthYear = 2002;
console.log(stev.__proto__ === Personproto);
const sarah = Object.create(Personproto);
// coding challeneg
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 10;
console.log(ford);
//218 Inheritance between classes
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//link prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and I study ${this.course}`);
};
const Mikie = new Student('mike', 2020, 'CS');
Mikie.introduce();
Mikie.calAge();
console.log(Student.prototype);
console.log(Person.prototype);
console.log(Mikie.__proto__ === Student.prototype);
console.log(Mikie.__proto__.__proto__);
console.log(Mikie instanceof Student);
console.log(Mikie instanceof Person);
console.log(Mikie instanceof Object);
console.log(Student.prototype);
console.log(Person.constructor);
console.log(Student.prototype.__proto__ === Person.prototype);
// create student.prototype.__proto__ the prototype property of Person
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
//coding challenge 3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h, charged of ${this.charge}%`
  );
};

const tesla = new EV('tesla', 100, 20);
console.log(tesla);
tesla.brake();
tesla.accelerate();
