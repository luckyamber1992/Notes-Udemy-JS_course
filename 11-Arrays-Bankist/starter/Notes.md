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
