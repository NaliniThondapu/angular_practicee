## How to install Node, angular and typescript

- Download the Node software and then install

```
npm install -g typescript -- to intstall typescript globally
tsc -v -- to know the typescript version
tsc filename.ts -- it will convert the .ts file into .js file , then we need to run the .js file for the result
npm install -g @angular/cli -- to install angular client
npm install -g @angular/cli@16.0.0 --- to istall angular client specified version
C:\Users\nalin\AppData\Roaming\npm  -- need to add this path under user level variables
npm uninstall -g @angular/cli -- to unstall angular client
node -v --- to know the mode version
node filename.js -- will run the js file to get the result
ng version -- to know the angular client version

----- create and start the angular app ------
ng new project-name -- to create the new angular project
cd project-name --- need to change the cursor to our project
ng serve -- to start the application by default it will run on 4200 port

```

## Typescript Compiler
- The TypeScript compiler (tsc) converts the instructions written in TypeScript to its JavaScript equivalent.
- It was developed by Microsoft.


## TypeScript
- It is an object oriented programming language which is used to develop web applications(front-end).
- Over a period of time it is also supported in backend application development
- It is a super set of javascript

### Uses
- Strong checking
- Auto generation of JS code from TS code
- Comipler - typescript
- Object oriented

## Variables
- local and global variables
- const is used to create the constants
- In case of constants , it the value is a primitive type values can not be reassigned and or add.
- Where as in case of non primitive types(Object, arrays ...) we can not reassigned but values can be added to arrays

### syntax

```
var variableName:datatype = value
```

## Example

```
//variables
var username:string = "nalini"
var age:number = 35
var iscertified:boolean = false
//any means we can store any type of data into this variable(like string , number, boolean ...etc)
var varname:any = "123"

console.log(varname) //123
console.log(username) //nalini
console.log(age) //35
console.log(iscertified) //false

//initialize the arrays
var array:number[] =[1,2,3,4];
console.log(array) //[1,2,3,4]

//create the objecttype variable
var obj:{} = {}

```

## DataTypes

```
//string
var user:string="nalini"
//number
var password:number=123
//boolean
var isDone:boolean =true
//any
var anydata:any;
anydata =100;
anydata="hello"
anydata=false

//array
var data:string[] = ["nalini","123"]
var scores:number[]=[12,45,67.56]
//it can store any kind of data
var data1:any = [145,"s",true,[1,2,3],{key:[1,2,34]}]

//tuple
var d:[string,number,boolean] = ["hello",123,false]

//object
var x:object = {
    a:100,
    b:200
}

```
## OOps
-  It is the process of represnting the real time entities into programming to provide the solution for a problem in the form of an application.

## Class ,variables and methods

```
class customer{
    name:string
    accountnumber:number
    accountbalance:number
    mobileno:number

     withdraw(){
        console.log("withdraw")

    }
}

var cust1  =new customer()
cust1.name = "nalini"
cust1.withdraw()

```


## Constructor

- If we want to execute some functionality while object initialisation itself , we can use the constructor.
- To create an object , we can use the constructor

```

class test{

    name:string

    constructor(name){
        this.name = name;
        console.log("Test class constructor")
    }

    testM1(){
        console.log("Test method")
    }

}

var testObj = new test("nalini")
testObj.testM1()
```

## Inheritance
- It is the ability to extend the parent class functionalities to the child classes.

## Polymorphism
- It is the ability of an entity to provide multiple functionalities based on different inputs is known as polymorphism.
- In TypeScript,we implement polymorphism using method overloading and method overriding.

```

//method overloading
class Login {

    authenticate(email: string, password: string);
    authenticate(mobileno: number, password: string);

    authenticate(input1:string | number , input2:string){
        if(typeof input1 == "number"){
            console.log("Login with mobile number")
            return;
        }else{
            console.log("Login with email")
        }
    }
}

var login = new Login()
login.authenticate(9550788106,"1234")

```

## Interface
- An interface can only have uninitialised variables and unimplemented methods.
- For an interface we can not create an object
- An interface need to be implemented by a class using implements keyword
- If a class implements an interface , it should provide the implementation for all the methods of an interface.

```

interface userinterface{
    name:string
    mobileNumber:number

    m1();

}

class userObject implements userinterface{
    name = "nalini"
    mobileNumber = 12345

    m1() {
        console.log(this.name + " "+ this.mobileNumber)
    }
}

var user2:userinterface= new userObject();
user2.m1()

```

## Abstract classes
- this class also contains unimplemented methods and un initialised variables along with the normal implemented methods.
- On abstract classes we cannot create any object.

```
interface car {
    noOfwheels: number
    mode: string

    moveforward()
    havebreaks()
}

abstract class bmw implements car {
    noOfwheels = 4;
    abstract mode: string;
    moveforward() {
        console.log("yes will move forword");
    }

    abstract havebreaks();   

}

class implementclass extends bmw{

    mode = "automatic"

    havebreaks() {
        console.log(true);
        console.log(this.mode)
        console.log(this.noOfwheels)

    }

}

var obj4:car = new implementclass()
obj4.havebreaks();

```

## Encapsulation
- Encapsulation means to restrict the unauthorized access 
- In type script ,it is achieved by Modifiers
## Access Modifiers
- public --default
- private
- static
- readonly


```
class charecter{
    public username:string // this can be accessed directly by a class or a subclass as well
    private _name:string // this can accessed with in this class only
    static uname:string // it can be inherited by a class , but actuval value will remains same in the parent class
    readonly uname1:string //it can be inherited but cannot be modified
}
```

## Enums
- Enum is used to group a set of constants into a single unit
    
 ```
enum configurations{
    name = "nalini",
    password = "1234",
    email = "abc@gmail.com"
}

```

## Type Inference
- The type script infers the type of the variable based on the data assigned to the variable.

 ```
 let name = "John"; // The variable 'name' is inferred as a string type.
let age = 25; // The variable 'age' is inferred as a number type.
let isEmployed = true; // The variable 'isEmployed' is inferred as a boolean type.

```
## TypeCompatibilty
- we can give alias names to the data types.
- This allows to create custom types as well.
- This has the following types

- ## UnionTypes
- This allows multiple types into one.we can declare a variable with union type , it can hold values of different types

 ```
 let myvar : number | string
myvar = 123 //valid
myvar = "nalini" //valid

```

- ## Intersection Types
- Intersection types allow you to combine multiple types into a single type that has all the properties and methods of each constituent type. The resulting type will have all the members of the individual types.

```
interface A{
    propA:number
}

interface B{
    propB:String
}

type IntersectionType = A & B

let myobject : IntersectionType = {
    propA :10,
    propB :"Nalini"
}

console.log(myobject) //{ propA: 10, propB: 'Nalini' }

```

-  ## Type Guards
-  Type guards are conditional statements or functions that narrow down the type of a variable within a specific code block. 

```
function doSomething(value : string | number){
    if(typeof value == 'number'){
        console.log(value.toFixed(2))
    }else{
        console.log(value.toUpperCase())
    }
}

doSomething(123.3545) //123.35
doSomething("nalini") //NALINI

```
- ## Conditional Types 
- Conditional types allow you to define types that depend on a condition
- Conditional types use the **extends** keyword to define type branches.

```
type isString<T> = T extends string ? true : false
let value1 :isString<"nalini">

```

- ## Mapped Types
- Mapped types allow you to transform the properties of an existing type to create a new type. You can iterate over the properties of an existing type and modify their types, add new properties, or remove existing properties

```
Readonly: The Readonly mapped type transforms all properties of an object to be read-only.

interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>;
// ReadonlyPerson is { readonly name: string; readonly age: number;
```

## Modules
 -  In ES modules, you can use the export and import keywords to define and consume module functionality.

```
// File: mathUtils.ts
exports.add = (a, b) => a + b;

// File: app.ts
const mathUtils = require('./mathUtils');
console.log(mathUtils.add(2, 3)); // Output: 5

```

```
// File: mathUtils.ts
export function add(a, b) {
  return a + b;
}

// File: app.ts
import { add } from './mathUtils';
console.log(add(2, 3)); // Output: 5

```
