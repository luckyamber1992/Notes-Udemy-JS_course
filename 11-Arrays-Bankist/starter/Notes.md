# set 
set is not iterable
# Data transformation
## map method
- it loops over the original arr and put everything into a new arr
- Parameters
A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:
element
The current element being processed in the array.
index
array
The array map() was called upon.


# filter
filter returns a new arr containing the arr elements taht passed a specified test condition 
# reduce
reduce boils all arr elements down to one single value(adding all elements togetehr)
## Summary graph
![](./Screenshot%202023-07-07%20at%2018.13.54.png)
## forEach Vs. Map()
forEach does not return anything
map return a new arr
# reduce(arr,cur)
in each iteration, arr will be updated by the function argument passed to it
## CAUTIONS with using method chaining
- too much chaining could cause errors
- DO Not chain methods such as reverse or splice as they change the original array!
- AVOID changing array
# find
- it does NOT return a whole arr. Instead it returns the first element satisfies the condition 
- it can be used to retrieve data from an object by object property
- it is USUALLY used by seting a goal that only one element can meet to find that element
# The findindex method
- it returns the index of the element 
- it is often used with splice() which can be used to delete an element
# sort()
sort((a,b)=>a-b)
this functions compares a and b by using a-b. If a-b returns a positive value, a will be put
after b; if the opposite, b will be put after a
# new Array()
const x =new Array(5)
//return [
    null,
    null,
    null,
    null,
    null
]
# fill()
x.fill(1,3)//1 is the element to fill the array; 3 is the index at which position to fill the arr
# Array.from()
Array.from(iterable, mapFunction, thisArg)


# Summary 
- which array methods to use
![summary graph](./Screenshot%202023-07-10%20at%2022.11.07.png)

- .push
array.push(element1, element2, ..., elementN)
const array = [1, 2, 3];
array.push(4, 5);

console.log(array); // Output: [1, 2, 3, 4, 5]
- .unshift 
array.unshift(element1, element2, ..., elementN)
array.unshift( 1 );
console.log( array );
- .pop
const array = [1, 2, 3];
const removedElement = array.pop();
console.log(array); // Output: [1, 2]
console.log( removedElement ); // Output: 3
- .shift
remove the first element
- splice
array.splice(startIndex, deleteCount, element1, element2, ..., elementN)
array: The array on which you want to perform the splice operation.
startIndex: The index at which the splice operation should begin.
deleteCount (optional): The number of elements to be removed starting from the startIndex. If set to 0, no elements are removed.
element1, element2, ..., elementN (optional): Elements to be inserted at the startIndex.
- reverse
array.reverse()
It is used to reverse the order of elements in an array. The first element becomes the last, and the last element becomes the first.

- .sort
array.sort(compareFunction)
compareFunction (optional): A function that defines the sort order. If omitted, the elements are sorted in ascending, lexicographic order as strings.
string:

- .fill
array.fill(value, start, end)
start: the index at which to start filling the arr
end: exclusive
- .map
array.map(callback(currentValue, index, array) {
});

- .filter

array.filter(callback(element, index, array) {
  // Return true or false to indicate whether to include the element in the new array
});

- .slice
the .slice() method does not modify the original array or string but instead returns a new array or string containing the extracted portion.
array.slice(startIndex, endIndex);
- .concat
 It allows you to combine two or more arrays or strings and return a new array or string as the result.
 array1.concat(array2, array3, ..., arrayN);

- .flat
array.flat(depth);

- .flatMap
array.flatMap(callback(currentValue[, index[, array]])[, thisArg])

- indexOf
const fruits = ['apple', 'banana', 'orange', 'apple'];
console.log(fruits.indexOf('banana'));

- .findIndex
array.findIndex(callback(element[, index[, array]])[, thisArg])
The findIndex() method is another built-in JavaScript method that is used to find the index of the first element in an array that satisfies a given condition.

- .find
It is used to find the first element in an array that satisfies a given condition. It returns the element or undefined

- .includes
array.includes(searchElement[, fromIndex]) // output:true or false
- .some
It is used to check if at least one element in the array satisfies a specified condition. It returns a boolean value indicating whether the condition is true for any element in the array.
> const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((num) => num % 2 === 0);

console.log(hasEvenNumber);
// Output: true

- .every()
It returns a boolean value indicating whether the condition is true for every element in the array.

- forEach
it does not create a new arr, just loops through it

