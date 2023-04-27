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

