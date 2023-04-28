## Functions
- A function is a block of statements that takes an input(optional) , process it and provides some result
-  A function should always holds a single responsibility.

#### we can represent the function in four ways

- Function with parameters and with return type
- Function without parameters and with return type
- Function with parameters and with out return type
- Function without parameters and with out return type

#### syntax

```
function functionname(parameters){
  //code
}

```

### Example

```
function test(){
  console.log("Test function)
}
//calling the function like below
test()

```

## Function Arguments

```
function test(a,b){
    console.log(a)
    console.log(b)
    console.log(arguments)// arguments keyword is used to hold all the available arguments in an object.
  }

  test(10,20) 
  0/p:
  -----
  10
  20
  [Arguments]{'0':10,'1':20}
  
  ```
  
  ### Now i am passing 3 argumnets to the same above function
  
  #### In java script we can pass any number arguments it will not throw any error. This is also one type of interview question
  
  
  ```
  test(10,20,30)
  
  o/p:
  =====

  10
  20
  [Arguments]{'0':10,'1':20,'3':30}
 ```
 
 ## Duplicate Functions
   - In javascript duplicate functions are allowed.  It executes the latest implementation only while calling this.
  This is type of overriding.
  
  ### Example
  
  ```
   function f1(){
    console.log("I am a original function")
  }

    function f1(){
    console.log("I am a duplicate function")
  }

  f1()

  o/p
  ====
  I am a duplicate function
  ```
  
  ##   Anonymous Function
  
  -  A function with out a name is called an anonymous function.

### Example

```
 function f1(a){ // here function as a parameter
      a();
    }

    f1(function(){console.log("I am an anonymous function")});
  ```
  
## Function Expression

- If we can refer a function with a variable , then it is function expression.

### Example

```
    function f1(a){
      a();
    }

    var anonymousFun = function(){console.log("I am an anonymous function")};// This is a function expression.
f1(anonymousFun);
```

## First Calss Functions
- In java script every function is a first class function
- If we can pass a function as an argument to any other function or if we are returning any function is called , that is called as first class functions.

## Callback Functions

- If we are passing a function as an argument.

### Example

```
function callbackFunction(){
    var users = ["ravi","kiran","madhu"]
    
    // All the below are callback funcitions
    //In this for each user the function will call.
    users.forEach(function(user)->{
    console.log(user);
    });
    
    //by using arrow function
    users.forEach((user)=>{
       console.log(user);
    });
    
    users.forEach(user=>console.log(user))
    
}
```
### Example-2

```
function display(total){
  console.log(total);
}

function sum(a,b,callbackfn){
let total = a+b;
callbackfn(total);
}

sum(10,20,display)
```

## IIFE'S
 -  Immediately Invoked Function expressions are used to execute a function only once as soon as the application gets triggered as part of execution.
 - These are mainly used in initializing application/pages resources.
 - These functions will execute only once , as and when application starts execution.
 - The application has n-mumber of IIFE`s
 
### syntax

```
(
  function(){
    //code
  }
)()

```
### Example

```
(
  function(){
    console.log("I am an IIFE")
  }
)();

```


### Example2

### named IIFE
```
(
  function namedIIFE(){
    console.log("I am a namedIIFE");
  }
)();
```

### IIFE with parameters

```
(
  function iifeWithparam(a,b){
    console.log(a+b);
  }
)(10,20);
```

## Function Constructor
- It can be used to create the objects from a Template. Keys must be same in all the objects.

### Sample Object

```
  var emp1 = {
    name:"Rama",
    address:"Hyderabad",
    company:"xyzsolutions.com"
  }
  ```
  -  If we want build above type of objects of multiple employees ,instead of creating like above individually we can use function templates to create these of same types
  -  These looks like normal functions. so to differentiate the normal functions and function templates, the functionTemplate name is in all Capital letters in  real time environment.

### Example

```
  //Below "this" key word is nothing but Employee object
function EMPLOYEE(name,address,company){
  this.name = name;
  this.address = address;
  this.company = company;'
   //we can also apply functions also to add extra functionalities to the object inside the template.
  this.addDomain = function(){
    this.name.concat("@gmail.com");
}

var emp1 = new EMPLOYEE("nalini","Hyd","xyz solutions");
var emp2 = new EMPLOYEE("rama","Hyd","abc solutions");
console.log(emp1)
console.log(emp2)

```

- If we want add any extra functionalities to the object from the outside of the function construcotr we can use prototype.
- Prototype can be used to implement some extra capabilities to object dynamically.

### Example

```
EMPLOYEE.Prototype.addDomain = function(){
  return this.name.concat("gmail.com");
}

console.log(emp1.addDomain()) // Output is nalini@gmail.com

```

## call, apply , bind methods (This is very important for interviews please check the examples as well)
   -  These methods are used to inherit the functionalities from one object to another object.

- ### call()
- calling a function from one object to another object. Note: keys must be same in all the objects.

### Example

```
var emp1 = {
  name:"nalini", // the value is any thing like string , boolean,date, array ,object,function etc
  city:"hyd",
  details:function(){
    return this.name+" "+this.city;
  }
}

console.log(emp1.details()) // output is "ravi hyd"

 If we want to call the details function for the below object instead of duplicate the code in the second object,
  we can achieve this by using call method. we can achieve this only if keys must be same in both objects.

var emp2 = {
  name:"rama", // the value is any thing like string , boolean,date, array ,object,function etc
  city:"hyd"
}

console.log(emp1.details.call(emp2)) //output is "rama hyd"

```

- suppose in case of keys are not same will not get the expected result. It will not throw any error.

```
var emp3 = {
  names:"ramakrishna", // the value is any thing like string , boolean,date, array ,object,function etc
  city:"hyd"
} 

console.log(emp1.details.call(emp3)) //output is "undefined hyd"
```

## Apply
- Apply is also similar as call.
-  The difference is call will accepy only individual parameters where as apply will accept an array.

### Example

```
var emp1 = {
  name:"nalini",
  deatils:function(role,exp,certified){
    return this.name+" "+role+" "+exp+" "+certified;
  }
}

var emp2 ; {
  name:"rama"
}

console.log(emp1.deatils.call(emp2)) // the output is "rama undefined undefined undefined"
// why because we did not pass any arguments to the function

// If we pass arguments the output is like below
console.log(emp1.deatils.call(emp2,"developer",10,true)) // output is "rama developer 10 true"

//if we have many arguments adding manually is very difficult for every call time
// For this I want to pass these argumnets as an array like below


var args = ["developer",10,true]
console.log(emp1.deatils.call(emp2,args))// The ouput is "rama developer,10,true undefined undefined"
// why because in "call" method all the array values as treated as the first argument value thats why last two were undefined.
// This is because of call method accepts only individual arguments


//to avoid the above issue we can use apply method
var args = ["developer",10,true]
console.log(emp1.deatils.apply(emp2,args)) // the ouput is "rama developer 10 true"

```

## bind

-    This is also similar to call. call will execute as an when we define  , where as bind will execute when we call that explicitly.

### Example

```
var emp1 = {
  name:"nalini",
  deatils:function(role,exp,certified){
    return this.name+" "+role+" "+exp+" "+certified;
  }
}

var emp2 ; {
  name:"rama"
}

console.log(emp1.deatils.call(emp2,"dev",10,true));
// if we want to call the same call need to write same code 
console.log(emp1.deatils.call(emp2,"dev",10,true));
console.log(emp1.deatils.call(emp2,"dev",10,true));

//how many times we need to call this those many times need to write
//to avoid this will bind this function to variable and resuse the same for any no of times like below

const handler = emp1.deatils.bind(em2);

function f1(){
  console.log(handler())
}

f1(); //output is "rama developer 10 true"

function f2(){
  console.log(handler())
}

f2(); ////output is "rama developer 10 true"

```

## Closures
- These are nothing but nested functions.  These are allows us to create private functions.
- These private functions are limited to that perticular  parent function only not by other outside functions.

### Example

```
function f1(){
    var a =10;
    console.log(a);

    //private function
    function f2(){
      console.log(a+1)
    }
   }

   f1()
   f2() // getting error like " f2 is not defined"
   // why because f2() is accessible to f1() only not able to call from outside.
   
 ```

