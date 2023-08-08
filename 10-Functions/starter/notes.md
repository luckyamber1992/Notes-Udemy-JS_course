# Default parameters
> const createBooking = function(flightNum,numPassenger=1,price=199*numPassengers)
# how passing arguments works? Value VS. Reference
## JS 浅拷贝、深拷贝以及和python深浅拷贝的区别
- js primitives
有以下几种：string，number，undefined，null，symbol，boolean。
- js 非primitives
有以下几种：object literal，function
在复制时，上面两者的区别在于，对于primitives的复制，是整体的复制，即：复制体本身是一个独立的整体，对复制体的修改不会改变primitives本身
而对象是‘通过引用’进行存储和复制的。这里引用的意思是变量指向对象的内存地址。 变量存储在call stack中而对象存储在heap中
- 通过引用来比较两个对象是否指向同一个地址
> let a ={}
> let b =a //复制引用
> alert(a==b)//当输出结果为true的时候表示两者引用了同一个对象
## 克隆与合并（Object.assign())
- 方法一：loop
let user={
    name:'john',
    age:30
};
let clone={} // 新的空对象
// 将user中所有的属性拷贝到其中
for (let key in user){
    clone[key]=user[key];
}
- Object.assign
Object.assign(dest,[src1,src2]) // src1,src2会把所有的参数属性拷贝到第一个dest中
复制object
let clone =Object.assign({},user)
- spread operator
clone={...user}
**以上复制对象的方法都是浅拷贝，如果对象内部嵌套对象/function，复制的对象无法独立复制嵌套对象**
## Python 存储对象和变量的方法

Python stores its variables and objects in memory, using a combination of a stack and a heap.

Stack:
Python uses a stack to store local variables and function call information. Each time a function is called, a new frame is created on the stack, which contains information such as local variables, function arguments, and the return address. When a function completes execution, its frame is popped off the stack. This mechanism allows Python to keep track of function calls and manage local variables efficiently.
Heap:
Python uses a heap to store objects, including data structures, objects created from classes, and other complex data types. The heap is a region of memory that is used for dynamic memory allocation. When an object is created in Python, memory is allocated on the heap to store the object's data.
Objects in Python are referenced by variables, which are essentially pointers to the objects in memory. When a variable is assigned to an object, it stores the memory address where the object is located in the heap. Multiple variables can reference the same object, creating aliases or references to the object.
Python employs a garbage collector to automatically manage memory and deallocate objects that are no longer in use. The garbage collector periodically scans the heap to identify objects that are no longer reachable, i.e., not referenced by any variable. It then reclaims the memory occupied by those objects, making it available for future allocations.
# First-class Vs. Higher-order functions
## first-class functions
- JS treats functions as first-class citizens
- functions are values
- functions are another type of object

# functions receive Callback functions
- / /g:select all string
const str = 'Hello, hello, hello!';
const pattern = /hello/g;
const matches = str.match(pattern);
console.log(matches); // Output: ["hello", "hello", "hello"]
# closure
a function always has access to the variable environment of the execution context 
in which it was created
- console.dir() which shows you the closure of the function you pass to console.dir()
- the closure has priority over the scope chain !