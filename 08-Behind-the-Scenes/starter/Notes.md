![difference between compilation VS interpretation](./Screenshot%202023-06-22%20at%2011.16.13.png)

# modern just-in-time compilation of JavaScript

## scope chain

- scoping: where can we access a certain variable and where not
- lexical scoping: scoping is controlled by placement of functions and blocks in the code
- scope:
  space or enviroment in which a certain variable is declared( global/function/block scope)
- scope of a variable:
  region of code where a certain variable can be accessed
- 3 types of scope
- global scope
- function scope/local scope: variables are accessible only inside of the function
- block scope
- variables declared by const/let are only accessible inside the function/block
- var is an exception, it is not block scoped but function scoped!!!

## variable look-up

- JS first look for varibles in the current scope. if not found,it will look up for variables in the outer scopes
- scope has access to variables from all outer scopes
- for sibling scopes, they have no access to each other's variables

## scope chain vs call stack

- scope chain: order in which functions are written in the code
- call stack: order in which functions are called

![a summary img](./Screenshot%202023-06-24%20at%2015.44.31.png)

## scoping in practice

In strict mode, functions are block scoped. So, if you call a function which is written inside of a block, you would get an error

- you can have the same name for different variables in different functions

## hoisting in javascript

hoisting: makes some types of variables accessible in the code before they are declared
before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object

- let and const are NOT hoisted!
- Var hoisting is just a byproduct
  result: undefined
- fucntion expression
  In JavaScript, a function expression is a way to define a function by assigning it to a variable. Unlike function declarations, which are hoisted to the top of their scope, function expressions are not hoisted(var is an exception), meaning they are only available after the line of code where they are defined.

> var multiply = function(a, b) {
> return a \* b;
> };

- arrows
  const addExp=(a,b)=> a+b
  const and let are NOT hoisted while var IS!
- function declaration- HOISTED!

> function greet(name) {
> console.log("Hello, " + name + "!");
> }

EXAMPLE:

> greet("John"); // Output: Hello, John!

function greet(name) {
console.log("Hello, " + name + "!");
}

- why TDZ?
  Access a variable before it is declared is a bad practice

- wht hoisting?
  . using functions before actual declaration

## Hoisting and TDZ in practice

- undefined is a falsy value, so if(undefined) =- inf(false)
- hoisting can incur errors!

### best practices

- avoid using var
- use const in most cases
- if needed, then use let
- declare your variables first and use after your variables

## this ketword

- this keyword/variable: takes the value of the 'owner' of the function in which the this keyword is used
- this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called
  this keyword points to

1. Method call: this =<Object that is calling the method>
2. event listener this = DOM element the handler is attached to
   example:

> document.querySelector("#myButton").addEventListener("click", function() {
> console.log(this); // 'this' refers to the clicked DOM element
> });

![this keyword](./Screenshot%202023-06-24%20at%2018.52.11.png)
[method]

> const jonas = {
> name: 'Amber',
> year: 1989,
> calAge: function () {

    return 2037 - this.year;

},
};
console.log(jonas.calAge());

## The this keyword in practice

1. Object in javascript
   An object can be created using two different syntaxes: object literals and the new keyword with a constructor function.

Object Literals:
An object literal is defined using curly braces {} and can contain zero or more key-value pairs.

> var person = {
> name: "John",
> age: 25,
> profession: "Developer"
> };

In the above example, the person object has properties such as name, age, and profession, with corresponding values assigned to them.
Constructor Function:
Objects can also be created using constructor functions and the new keyword. Constructor functions are regular functions that are used to initialize and create objects.
javascript

> function Person(name, age, profession) {
> this.name = name;
> this.age = age;
> this.profession = profession;
> }

var person = new Person("John", 25, "Developer");
In this example, the Person function serves as a constructor for creating person objects. The new keyword is used to instantiate a new object based on the constructor function, and the properties are assigned using the this keyword.
Objects in JavaScript are dynamic, which means you can add, modify, or delete properties at runtime. You can access the properties of an object using dot notation (object.property) or bracket notation (object["property"]).

## regular functions VS arrow functions

1. var creates a property in window object
2. never use arrow function as a method becasue this keywork in arrow function is from the parent function

# Primitives Vs. Objects(reference types)
Primitives: Number String Boolean undefined Null Symbol BigInt
Objects: everything else except for primitives. Objects are created by object literal, arrays, functions
## JS engine 
composed of two parts:
call stack+ heap
call stack: code is executed here
heap: where objects are stored in memory
![call stack+heap](./Screenshot%202023-06-27%20at%2022.18.47.png)
![an illustration diagram shows why objects in head are immutable](./Screenshot%202023-06-27%20at%2022.33.12.png)
## Practice
- Object.assign() // a shallow copy
**it can only copy the first level objects but does not copy the inner objects such as an array inside of an object literal** So, the copied object still points at the old address of the inner object
const Jess2 = { firstName:'Jess',
lastName:'william',
age:27,}
const jessicopy=Object,assign({},Jess2);
jesscopy.lastName='mike'
// Jess2 and jesscopy are two different objects stored in heap. Changing the reference value of one object will not imfluence the other