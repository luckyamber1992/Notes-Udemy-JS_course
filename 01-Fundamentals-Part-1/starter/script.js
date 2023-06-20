
    // let js ='amazing'
    // if (js === 'amazing') alert('javascript is fun!')
    // console.log(10+20)
    // let firstName='Johans'
    // console.log(firstName)
    // console.log(typeof true)
    
// let age  = 30;
// age =10;

// const birthYear =1991
// birthYear =2

// operators
// const ageJonas =2000 - 1992
// const ageK= 2000- 1998
// console.log(ageJonas, ageK)
// console.log(ageJonas*2, ageK*2)
// assignment operators
// let x =10 + 5
// x += 10
// x+=4
// x++// x = x+1
// x--//x = x-1
// comparison operators
// const isFullAge = ageJonas >=10
// console.log(isFullAge)

// const now = 2037;
// const age_Jonas = now -1992;
// const ageSarah = now -2018
// console.log(now - 1991> now -2018)
// const firstName='John'
// const job = 'teacher'
// const birthYear=1992
// const year =2037
// const john = "I'm " + firstName + ',a ' +(year-birthYear) +' years old'
// // another way of writing this to avoid spaces missing
// const jonasNew = 'Im ${firstName},a new ${year - birthYear} years-old ${job}!'
// console.log(jonasNew)
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);
//backquote key is above tab key,use option+the key above tab key to find it
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// use backticks for a string all time
// console.log(`just a regular string`)
//multiple lines
// console.log(`string
// multiple
// lines` )

// Taking decisions
// const age =15
// const isOldEnough = age >=18

// if (isOldEnough) {
//     console.log('sarah can start driving license')
// } else{
//     const yearsLeft = 18 -age;
//     console.log(`wait another ${yearsLeft} years`)
// }
// const birth_Year =1991
// let century 
// if (birth_Year<= 2000){
//     century = 20
// }else{
//     century =21
// }
// console.log(century)
// challenge 2
// let massMark=78
// let heightMark=1.69
// let massJohn=92
// let heightJohn=1.95
// let bmiMark=massMark/heightMark**2
// let bmiJohn=massJohn/heightJohn**2
// if (bmiJohn>=bmiMark){
//     console.log(`John's bmi${bmiJohn} is higher than Mark's${bmiMark}`)
// } else{
//     console.log(`mark's ${bmiMark} higher than Johns ${bmiJohn}`)
// }

// type conversion 
// const inputYear='1992'
// const  naN = 'not'
// console.log(Number(inputYear),inputYear)
// console.log(Number(naN))
// console.log(typeof NaN)
// console.log(String(23),23)
// type coercion
// console.log(`"I am" + 23 +"years old"`)
// falsy values
// console.log(Boolean(0))
// const money = 2;
// if (money){console.log('save it!')}
// else{console.log('get a job')}
// let height=0 
// if(height){
//     console.log('defined')
// }else{console.log('undefined!')}
// Equality operators
/*const age='18'
if (age=== 18)console.log('you just became an adult')
if (age == 18) console.log('loose equality operator!')*/

// const favoriate =prompt('what is your favoriate number?')
// console.log(favoriate)
// console.log(typeof favoriate)
// if (favoriate==10){
//     console.log('cool')
// }
// boolean logics
// const hasDriverLicense = true //A
// const hasGoodVision = true //B
// console.log(hasDriverLicense&&hasGoodVision)
// console.log(hasDriverLicense|| hasGoodVision)
// console.log(!hasGoodVision) 
// const SarahDrive=hasDriverLicense && hasGoodVision
// if (SarahDrive){console.log('Drive permitted!')}
// else{console.log('you cannot drive')}
// const isTired = true
// console.log(hasDriverLicense&&hasGoodVision&&!isTired)

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// case 1
// const ave_Dolphins= (96+108+89)/3
// const ave_Koalas=(88+91+110)/3
// if (ave_Dolphins>ave_Koalas)
// {console.log('The winner goes to Dolohins')}
// else if (ave_Dolphins<ave_Koalas){console.log('the winner is Koalas')}
// else{console.log('a draw!')}
// case 2
// const ave_Dolphins= (97+112+101)/3
// const ave_Koalas=(109+95+123)/3

// if (ave_Dolphins>=100&&ave_Dolphins>ave_Koalas){console.log('Dolphins wins')}
// else if (ave_Koalas>=100 && ave_Koalas>ave_Dolphins){console.log('K wins')}
// else if (ave_Dolphins===ave_Koalas){console.log('a draw!')}
//case 3
// const ave_Dolphins= (97+112+101)/3
// const ave_Koalas=(109+95+106)/3
// if (ave_Dolphins>=100&&ave_Dolphins>ave_Koalas){console.log('Dolphins wins')}
// else if (ave_Koalas>=100 && ave_Koalas>ave_Dolphins){console.log('K wins')}
// else if (ave_Dolphins===ave_Koalas&&ave_Dolphins>100 && ave_Koalas>100){console.log('a draw!')}
// The switch statement
// const day= 'Monday'
// switch(day){
//     case 'Monday':
//         console.log('Plan course structure')
//         console.log('Go to coding mmetup')
//         break
//     case 'Tuesday':
//         console.log('Prepare theory videos')
//         break
//     case 'wednesday':      
//     case 'Thursday':
//         console.log('Ahah!') 
//         break 
//     default:
//         console.log('Not a valid day')
//     }

// if (day === 'wednesday'||'Thursday'){
// }
// else if (day === 'Thursday'){
// }else{console.log('Ahah')}
//! switch statement is not used often anymore

// statements and expressions
// statememnts do not produce values, they perform actions
// expressions are like: 2+4 / true&& false

//028 The conditional(Ternary)operator
// const age =20;
// age >=18 ? console.log('I like to drink wine'):
// console.log('I like to drink water')

// const drink = age >=18 ? 'wine':'water'
// console.log(drink)
// let drink2
// if (age>=18){
//     drink2='wine'
// }else{
//     drink2='water'
// }
// console.log(`drink2 is ${drink2}`)
// console.log(`I like to drink ${age>=18 ? 'wine':'water'}`)


// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// my version
// const bill =430;
// console.log(bill>50&& bill<300 ? `The bill is ${bill}, tip was ${bill*0.15}, the total value is ${bill+bill*0.15}`:`The bill is ${bill}, tip is ${bill*0.2}, and the sum is ${bill+bill*0.2}`)

// Answer
// const bill =275
// const tip = bill<=300&& bill>=50? bill*0.15:bill*0.2
// console.log(`The bill is ${bill}, tip was ${tip}, the total value is ${bill+tip} `)
