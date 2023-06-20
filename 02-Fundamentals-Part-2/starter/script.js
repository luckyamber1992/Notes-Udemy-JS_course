//Activate strict mode
"use strict";
// let hasDriverLicense = false;
// const passTest = True;
// if(passTest) hasDriverLicense = true;
// 03-Functions
// create a function enables you to call this method as much as possible
// function logger(){
//     console.log('My name is Jonas')
// }
//calling/running/invoking function
// logger()
//a function should be able to take data and return data
// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice=`Juice with ${apples} apples and ${oranges}.`;
//     return juice
// }

// const aplle_juice=fruitProcessor(1,2)
// console.log(aplle_juice)
//Number is a built-in function which takes a string and convert it into a number
// const num = Number('23')
//034 Function Declarations vs. Expressions
// differences: function declaration can be defined after it is called
//Function declaration
// function calcAge1(birthYear){
//     const age = 2037 -birthYear
//     return age
// }
// function calcAge1(birthYear){
//     return 2037-birthYear
// }
// const age1 = calcAge1(1999)
// console.log(`The age is ${age1}`)
// OR
// const age1 = calcAge1(1992);
// function calcAge1(birthYear){
//     return 2023-birthYear
// }
// console.log(age1)

//Function expression(anonymous function)
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear
// }
// console.log(calcAge2(1992))
// 035 Arrow function
// const calAge3 = birthYear => 2037 - birthYear;
// const age3 = calAge3(1992)
// console.log(age3)
// year before retirement
// const yearsBeforeretirement=(BirthYear,firstNmae) => {
//     const age =2023-BirthYear
//     const retire = 65-age
//     return `${retire},${firstNmae}`
// }
// console.log(yearsBeforeretirement(1992,'lily'))

// 036 Functions calling other functions
// const cutPieces=function(fruit){
//     return fruit*4
// }
// const fruitProcessor=function(apple,orange){
//     const applePieces = cutPieces(apple)
//     const orangePieces= cutPieces(orange)
//     const juice=`juice with ${applePieces} plus ${orangePieces}`
//     return juice
// }
// console.log(fruitProcessor(2,3))
//037 reviewing functions
// const calAge = function(birthYear){
//     return 2037-birthYear
// }
// const yearbfretirement = function(name,birthYear){
//     const age = calAge(birthYear)
//     const retirement = 65 - age
//     if (retirement>0) {console.log(`${name} will be retired in ${retirement} years`);
//     return retirement}
//     else
//     {return -1;}
// }

// console.log(yearbfretirement('Lily',1912))
// 038 Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
//Data1
// const calcAverage = (score1,score2,score3)=>(score1+score2+score3) /3
// const scoreD = calcAverage(44,23,70);
// const scoreK = calcAverage(65,54,49);
// const checkWinner = function(avgDolhins,avgKoalas){
//     if(avgDolhins>= 2*avgKoalas){console.log(`D wins ${avgDolhins} vs ${avgKoalas}`)} else if (avgKoalas>=2*avgDolhins){
//         console.log(`K wins🏆`)
//     } else if (avgKoalas>=2* avgDolhins){console.log(`K wins ${avgKoalas} vs ${avgDolhins}`)}else{console.log(`no one wins`) }
// }
// checkWinner(scoreD,scoreK)

// 039 Arrays
// const friends = ['Mike','Steven', 'Peter']
// const years = new Array(1992,1991,1984)
// console.log(years.length)
// console.log(years[years.length-1])
// friends[2] = 'Jay'
// console.log(friends)
// array is mutable. But you cannot change all elements in an array
// friends =['hj','g','f'] // not accepted
// an array accepts another array inside of it
// an array also accepts a constat variable
// Exercise
// const calAge = function(birthYear){
//     return 2037 -birthYear
// }
// 040 Basic array Operators
//add elements
// const friends = ['Mike','Steven','Peter']
// friends.push('Jay')
// console.log(friends)
// friends.unshift('John')
// console.log(friends)
// //remove elements
// friends.pop() // pop last
// const popped=friends.pop()
// console.log(friends)
// console.log(popped)
// //remove from the beginning
// friends.shift()
// console.log(friends)
// // return the index of array element
// console.log(friends.indexOf('Steven'))
// // check whether one element is in the array
// console.log(`it is in =  ${friends.includes('Steven')}`)
// friends.push('Peter')
// console.log(friends.includes(23))
// //usage: for condition test
// console.log(friends)
// if (friends.includes('Peter')){
//     console.log(`YES`)
// }

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array)
//my version
// let tip
// const calcTip=function(bill){
//     if (bill>50 && bill<300){
//         tip = bill * 0.15;
//         return tip
//     } else{tip = bill*0.2; return tip}
// }
// console.log(calcTip(200))
// const bills=[125,555,44]
// console.log(calcTip(bills[0]))

// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// console.log(tips)
// const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
// console.log(totals)
// Answer
// const cal_Tip =function(bill){
//     return bill>50&&bill<=300? bill*0.15:bill*0.2;
// }
//Arrow function
// const calTips = bill => bill>=50&&bill<=300? bill*0.15:bill*0.2;
//042 Introduction to Objects
// const Jonas ={
//     firstName:'jonas',
//     lastNmae:'k',
//     age:2037-1992,
//     job:'teacher',
//     friends:['Mike','Peter','Steven']
// }
//Jonas is an Object, it has 5 properties
// in array, the elememnts are in order while in objects, they are not

//043 Dot vs Bracket notation
//calling elements
// method1
// console.log(Jonas.firstName)
//method2
// console.log(Jonas['firstName'])

// const nameKey='Name'
// console.log(Jonas['first'+nameKey])
// const interestedIn=prompt('what do you want to know about Jonas?')
// console.log(Jonas[interestedIn])
//add new key to an object
// Jonas.location = 'China'
// Jonas['twitter']='@jonas'
// console.log(Jonas)
// challenge
// console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends and his bestie is ${Jonas.friends[0]}`)

// 044 Object Methods
// const Jonas ={
//     firstName:'jonas',
//     lastNmae:'k',
//     birthYear:1998,
//     job:'teacher',
//     friends:['Mike','Peter','Steven'],
//     hasDriverLicence:true,
//     calculated_Age: function (){
//         this.age= 2037 - this.birthYear
//         return this.age},
//     getSummary:function(){
//         return `${this.firstName} is a ${this.calculated_Age()}-year old ${this.job}. He has ${this.hasDriverLicence? 'a' :'no'} license`
//     }
// }
//this keyword
//calculated_Age is a method
// console.log(Jonas.calculated_Age(1910))
// console.log(Jonas['calculated_Age'](1992))
// as birthyear is a key in Jonas. To avoid repeat yourself, you should use this to refer to Jonas, the object, to avoid filling birthyear mannually
// console.log(Jonas.calculated_Age())
// console.log(Jonas.getSummary())
// challenge
//'Jonas is a 46-year old teacher, and his a driver's licence'

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall
// const Mark_Miller={
//     fullName:'Mark Miller',
//     height:1.69,
//     kilo:78,
//     calcBMI:function(){
//         return this.bmi= this.kilo/this.height**2
//     }
// }
// const John_Smith={
//     fullName:'John Smith',
//     height:1.95,
//     kilo:92,
//     calcBMI:function(){
//         return this.bmi= this.kilo/this.height**2
//     }
// }
// Mark_Miller.calcBMI()
// John_Smith.calcBMI()
// if (Mark_Miller.bmi>John_Smith.bmi){
//     console.log(`mark's bmi ${Mark_Miller.bmi} is higher than John's bmi ${John_Smith.bmi}`)
// } else if (John_Smith.bmi>Mark_Miller.bmi){
//     console.log(`John's bmi ${John_Smith.bmi} is higher than mark's bmi ${Mark_Miller.bmi}`)}
// 046 iteration(the for loop)
// for loop keeps running while condition is TRUE
// for (let rep=1; rep<=10;rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
// }
// // 047 Looping arrays, Breaking and continuing
// const jonas = [
//     3,
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];
//   const types=[]
//   for(let i=0;i<jonas.length;i++){
//     console.log(jonas[i],typeof jonas[i])
//     // types[i]=typeof jonas[i]
//     // types.push(typeof jonas[i])
//     types.unshift(typeof jonas[i])
//   }
//   console.log(types)
// const age=[]
//   const years =[1991,2007,1969,2020]
//   for (let i=0;i<years.length;i++){
//     // age[i]=2023-years[i]
//     age.push(2023-years[i]);
//   }
// console.log(age)
// // continue and break
// console.log(`--ONLY STRINGS--`)
// for (let i = 0; i < jonas.length; i++) {
//    if (typeof jonas[i] !=='string') continue;
//     console.log (jonas[i], typeof jonas[i])
// }
// console.log(`--break with number--`)
// // when the loop hits the number, the loop terminates
// for (let i=0;i<jonas.length;i++){
//     if (typeof jonas[i] !=='number') break;
//     console.log (jonas[i], typeof jonas[i])
// }
// // 048 Lopping backwards and loops in loops
// console.log(`--counting down--`)
// for (let i=jonas.length -1;i>=0;i--){
//     console.log(i,jonas[i])
// }
// // a loop inside a loop
// for (let exercise=1;exercise<6;exercise++){
//     console.log(`--exericese ${exercise}`)
//     for (let rep=1;rep<6;rep++){
//         console.log(`Lifiting weight repetition ${rep}`)
//     }
// }

// // 049 The while loop
// for (let rep=1;rep<6;rep++){
//     console.log((`lifiting weights repetition ${rep}💥`))
// }
// console.log(`--while loop--`)
// let rep=1;
// while (rep<=10){
//     console.log(`While:lifiting weights🏆 ${rep}`);
//     rep++
// }
// roll a dice
// let dice = Math.trunc(Math.random()*6)+1
// console.log(dice)
// the following is an infinite loop
// while(dice !==2){
//     console.log(`you roll the dice ${dice}`)
// }
// while (dice !==6){
//     console.log(`you roll the dice ${dice}`);
//     dice = Math.trunc(Math.random()*6)+1;
//     if (dice===6){
//         console.log(`loop ended`)
//     }
// }

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86,52]
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   const tip = bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };
// console.log(`--tips--`);
// for (let i = 0; i < bills.length; i++) {
//   tips[i] = calcTip(bills[i]);
//   totals.push(calcTip(bills[i]) + bills[i]);
// }
// console.log(tips);
// console.log(`--total--`);
// 055 setting up VSCODE-- Extensions
//TODO:
//FIXME:
//
