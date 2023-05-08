# ES6 Features
- ECMAScript 2015 was the second major revision to JavaScript.
- ECMAScript 2015 is also known as ES6 and ECMAScript 6.

### let Keyword
- The let keyword is used to decalre the variables with block scope.

```
// Global variables
var a = 100;
var b = 20;

function f1(input1, input2){
    // local/private variable
    var c = 300
    var arr = [2,2,3,5]

    for(let el of arr){
        // Block level variable
        let temp;
        temp = el * 3;
        console.log(temp);
    };
    
    console.log(temp);
}

f1(20,30);

```

### const keyword
 - The const keyword is used to declare the constants. This is similar to let , except the value can not be reassigned.

```
// Const - premitive
const x = 23;
x = 20; //not possible

// Const - non-premitive
const arr = [2,2,3,5];
arr.push(25) //possible
arr = [] //not possible

```

## Arrow Functions
- Arrow functions allows us to create the functional expressions.

```
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;

var sqr = (a)=> {retuen a*a};
console.log(sqr(9)); //output is 81

//arrow function with multiple lines
// multi line arrow function
// var output = (uname, pwd) => {
//     if(uname == "abc" && pwd == "abc123"){
//         return 'valid'
//     }else{
//         return 'invalid'
//     }
// };

// console.log(output('abc','abc13'));

// Arrow single line without () and {}
// var cube = a => console.log(a*a*a);
// cube(10);


// default parameter and arrow
// var x = (a=90) => {return a};
// console.log(x(100));

```

## Default Parameters
- The ES6 allows function parameters to have default values

```
function add(a, b = 10) {
    return a + b;
}

//in this case it took default value for b if the param did not pass
console.log(add(10));

//In this passed a and b both sent it took the params only not default values
console.log(add(10, 20));

```

## Rest Parameters(Spread Operator)
- Need to check the examples for interview questions.

**syntax**:

-  ...variableName

```
function f1(a,b,...restParams){ //Rest Parameters
    console.log(a); //10
    console.log(b); //20
    console.log(arguments) //0:10,1:20,2:30,3:40,4:50 argumnets holds an object
    console.log(restParams) // 30,40,50 (left over parameters other than a,b value)
    // console.log(a,b,c,d) // this will throw an error 'c' not defined
}

//passing individual params
//f1(10,20,30,40,50)

//passing an arry
var arr =[10,20,30,40,50,60]
console.log(arr) // output is [ 10, 20, 30, 40, 50, 60 ]
console.log(...arr) // outut is 10 20 30 40 50 60(individual values)

f1(arr);
// In this case entire array can be treated as only one object
//a ---> [ 10, 20, 30, 40, 50, 60 ]
//b -- > undefined
//arguments ---> [Arguments] { '0': [ 10, 20, 30, 40, 50, 60 ] }
//restParams --> []

f1(...arr) //spread operator
// In this case array values are spreaded to the params
//a ---> 10
//b -- > 20
//arguments ---> [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50, '5': 60 }
//restParams --> [ 30, 40, 50, 60 ]

```

## String Interpolation
- String interpolation is a great programming language feature that allows injecting variables, function calls, arithmetic expressions directly into a string. 
- String interpolation was absent in JavaScript before ES6. String interpolation is a new feature of ES6, that can make multi-line strings without the need for an escape character.
- In JavaScript, the template literals (strings wrapped in backticks ` `) and ${expression} as placeholders perform the string interpolation.

 ```
 function myInformation(fname, lname, country) {
    return `My Name is ${fname} ${lname} . ${country} is my favorite place`
}

console.log(myInformation("nalini", "thondapu", "India"));
//output is "My Name is nalini thondapu . India is my favorite place"

function greet() {
    return "hello";
}

console.log(`${greet()} I am a Student`)
//output is "hello I am a Student"

function isEven(x) {
    console.log(`${x} is ${x % 2 == 0 ? 'even' : 'odd'}`)
}

isEven(10)
//output is "10 is even"

```

## Custom Interpolation

```

var employees = [
    {
        name:"Ravi",
        role: "software developer",
        revised_role: "senior software engineer",
        manager: "kiran"
    },
    {
        name:"Rajesh",
        role: "Junior software developer",
        revised_role: "software engineer",
        manager: "Anil"
    },
    {
        name:"Anil",
        role: "test engineer",
        revised_role: "senior test engineer",
        manager: "Ramesh"
    }
];

for(let obj of employees){
    console.log(`
    Dear ${obj.name},

    You are promoted, and role has been revised from ${obj.role} to ${obj.revised_role}.

    Thanks,
    ${obj.manager}
    `)
}

```

## Symbol
- A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.
- It represents a unique "hidden" identifier that no other code can accidentally access.

```
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let id = Symbol('id');
console.log(typeof id) //symbol
person[id] = 140353;
console.log(person[id]) //140353
console.log(typeof person[id]) //number
console.log(person.id) //undefined
person[id] = "nalini";
console.log(person[id]) //nalini

// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false

//Symbols are not included in for...in Loop

let personId = Symbol("id");

let person1 = {
    name: "Jack",
    age: 25,
    [personId]: 12
};

// using for...in
for (let key in person1) {
    console.log(key); //name , age
}

```

