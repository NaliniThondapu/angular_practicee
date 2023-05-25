// Default parameters

function add(a, b = 10) {
    return a + b;
}

//in this case it took default value for b if the param did not pass
console.log(add(10));

//In this passed a and b both sent it took the params only not default values
console.log(add(10, 20));

//rest parameters(spread Operator)

function f1(a, b, ...restParams) {
    console.log(a); //10
    console.log(b); //20
    console.log(arguments) //0:10,1:20,2:30,3:40,4:50 argumnets holds an object
    console.log(restParams) // 30,40,50 (left over parameters other than a,b value)
    // console.log(a,b,c,d) // this will throw an error 'c' not defined
}

//passing individual params
//f1(10,20,30,40,50)

//passing an arry
var arr = [10, 20, 30, 40, 50, 60]
console.log(arr) // output is [ 10, 20, 30, 40, 50, 60 ]
console.log(...arr) // outut is 10 20 30 40 50 60(individual values)

f1(arr);
// In this case entire array can be treated as only one object
//a ---> [ 10, 20, 30, 40, 50, 60 ]
//b -- > undefined
//arguments ---> [Arguments] { '0': [ 10, 20, 30, 40, 50, 60 ] }
//restParams --> []

f1(...arr)
// In this case array values are spreaded to the params
//a ---> 10
//b -- > 20
//arguments ---> [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50, '5': 60 }
//restParams --> [ 30, 40, 50, 60 ]

//String Interpolation
// In JavaScript, the template literals (strings wrapped in backticks ` `) and ${expression} as placeholders perform the string interpolation.

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

//custom Interpolation
var employees = [
    {
        name: "Ravi",
        role: "software developer",
        revised_role: "senior software engineer",
        manager: "kiran"
    },
    {
        name: "Rajesh",
        role: "Junior software developer",
        revised_role: "software engineer",
        manager: "Anil"
    },
    {
        name: "Anil",
        role: "test engineer",
        revised_role: "senior test engineer",
        manager: "Ramesh"
    }
];

for (let obj of employees) {
    console.log(`
    Dear ${obj.name},

    You are promoted, and role has been revised from ${obj.role} to ${obj.revised_role}.

    Thanks,
    ${obj.manager}
    `)
}

//symbol
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

//Map
const fruits = new Map([
    ["apples", 50],
    ["banana", 20],
    ["oranges", 698]
])

//get the element value
console.log(fruits.get("apples")) //50

//set the new element and update the existing
fruits.set("mangoes", 400)
console.log(fruits.get("mangoes")) //400

//delete removes the element
fruits.delete("apples");
console.log(fruits) //Map(3) { 'banana' => 20, 'oranges' => 698, 'mangoes' => 400 }

//clear() removes all the elements from the map
//has() check the elemet exist in the map or not
console.log(fruits.has("apricots")) //false

//typeof identifies the type of variable
//instanceof 
console.log(typeof fruits)//object
console.log(fruits instanceof Map)//true

//foreach
fruits.forEach(function (value, key) {
    console.log(value + ":" + key)
})
// 20:banana
// 698:oranges
// 400:mangoes

//entries
for(let entry of fruits.entries()){
    console.log(entry)
}
//[ 'banana', 20 ]
// [ 'oranges', 698 ]
// [ 'mangoes', 400 ]

//keys get all the keys
console.log(fruits.keys()) //[Map Iterator] { 'banana', 'oranges', 'mangoes' }

//values get all the values
console.log(fruits.values())//[Map Iterator] { 20, 698, 400 }

//create objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits1 = new Map();

// Add new Elements to the Map here the keys are objects
fruits1.set(apples, 500);
fruits1.set(bananas, 300);
fruits1.set(oranges, 200);
//here apples are objects thats why did not add double quotes
console.log(fruits1.get(apples)) //500


//set Object
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

console.log(letters) //Set(3) { 'a', 'b', 'c' }

//Math new methods
//Math.trunc(x) returns the integer part of x:
console.log(Math.trunc(4.6)) //4
console.log(Math.trunc(-4.2));    // returns -4

//Math.sign(x) returns if x is negative, null or positive:
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1
//Math.cbrt(x) returns the cube root of x:
Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5

//Math.log2(x) returns the base 2 logarithm of x:
Math.log2(2);    // returns 1
//Math.log10(x) returns the base 10 logarithm of x:
Math.log10(10);    // returns 1

console.log(Number.EPSILON) //2.220446049250313e-16
console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits2.entries();

for (let x of f) {
  console.log(x)
}

