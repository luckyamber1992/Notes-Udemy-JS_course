# object destructuring
> const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],}
// restaurant is an object
const {pick any property you want to retrieve} =restaurant
clg(property name)
// property name reassign
const {property name:new name}=restaurant
# spread operator
- In ES6 it works on all iterables (such as strings, sets, maps Excludes objects)
- In ES18, it works on objects also
const newArr =[1,2,...arr] // the spread operator passes individual elements into the new array
## copy array
const mainM=[...restaurant.mainMenu]
// join 2 arrays
const menu = [...arr1, ...arr2]
# rest pattern and parameters
- it takes multiple arguments and pass them all into ONE array
const [a,b,...c]=[1,2,3,4,5]
const {sat,...weekdays}=Objects
# short circuiting
- it uses ant data type and returns any data type
- || or : if the first value is a trusy value, it returns this value
-  && 
# the nullish coalescing operator
- ??
- 0 and '' are not considered as null values or undefined when using this operator
# logical assignment operators
||=
example:
// 常规写法
rest1.abc =rest1.abc ||10
//logical assignment operator写法
rest1.abc ||=10

# The for loop- looping arrays
> const menu[...restaurant.startermenu,...restaurant.mainMenu];
> for (const item of menu) console.log(item)

# Enhanced object literals
> // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`here is ur pasta with ${ing1}, ${ing2}, and ${ing3}`);
  // },
  // this can also be written as
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is ur pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
> 
> const weekD = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  [weekD[5]]: {
    open: 12,
    close: 22,
  },
  [weekD[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
# optional chaining
check for variables you don't know if they exist can be tricky
> console.log(restaurant.openingHours.mon?.open)
- only if the variable before ? exists (NOT undefined and NULL), the later operation will be run
# looping obejcts
for (const day of Object.keys(openingHours)){
    console.log(day);
}
- entries
it returns the index number and the index itself
# Sets
- no duplicates in sets
> console.log(new Set(['apple', 'apple', 'pear']))
- check for set size
> console.log(orderSet.size)
- it has no retrieve function. If you need to retrieve elements, use Array!
# Maps
- maps keep key-value pairs
- difference with Objects:the keys in maps can be any data type while key in Objects are mostly string
- get method
## add new elements into a map
- set
- const variableName = new Map([[],[]])
## Maps iteration

# Summary
- sources of data
- web API: JSON data fromat example
## array Vs sets and objects Vs maps
![](../Screenshot%202023-07-01%20at%2021.12.38.png)

# Strings
JS converts string into a string object and call the methods on the string
all string 
.join() : takes a list and returns an array

# Suplement
- Arrow function 
Code example
> const multiply = (a,b) => a*b
> const getCode = str => str.slice(0,3)