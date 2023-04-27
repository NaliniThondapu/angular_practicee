## ControlStatements

 In java script we have three types of control ControlStatements

 - ### Sequential: 
      Sequential statements executes from top to bottom == if, if-else, switch
- ### Iterative:
     These are used to execute a set of instructions repeatedly based on conditions -- while , do-while loops for a given number of times
       or elements - for , for-each
- ### Jump:
    These are used to jump contorl from one place to another -- continue , break and return
    
 ## Sequential statements
 
 ```
 if syntax:
    if(test-condition)
 ```
 
 ```
 if-else syntax:
    if(test-condition){
        //logic
    }else{
        //code
    }
```

```

if, elseif & else syntax:
  if(test-condtion1){
    //code
  }else if(condition2){
    //code
  }else{
    //code
  }
```

##   Iterative statements

```
for syntax:
     for(let i=0 ; i<10 ;i++){
        //code
     }
```

## "for of"   and "for in" are as part of ES6(Ecma script6)

 - To loop through arrays , using for-of is easy compare to normal for loop
  
 ```
   var arr = [1,2,3,44]
    for(const element of arr){
      console.log(element)
    }
 ```
 
 -  where as for-in is used to iterate the objects.

```
  const obj = {a:1, b:2, c:3};

  for( const property in object){
    //here we used template laterals to build the string(like ${property}: ${obj[property]}) instead of + operator to concat
    // the template laterals were build using backticks(``)
    console.log(`${property}: ${obj[property]}`)
  }
```

## while

### Syntax
```
while(test-condition){
      //code
     }
 ```
 #### Example
 ```
 var i=10;
     while(i<=10){
      console.log(i);
      i++;
     }
```

## do-while

### syntax

```     
 do{

}while(test-condition)

```

#### Example
```
var isServerInitialised = false;
var i=0;

do{
  if(!isServerInitialised){
    console.log(isServerInitialised);
    isServerInitialised=true;
  }
 console.log(i);
i++;
}while(i<=10)
```

## Jump statements
These are used to jump control from one place to another.

## continue
    This one we can used for to skip the interation
    
  #### Example
  
  ```
  for(var i=0;i<=10;i++){
  if(i==2 || i==4){
    continue;
  }
  console.log(i)
  }  
```
## return
  It is used to terminate the function
  
 ### Example 
 ```
 function f1(){
  var a=10;

  if(a<20){
    console.log(a);
    return;
    console.log(a-2); // this will not execute after return
  }

  console.log(a+20);
}

```
## break

    It is used to terminate the block
    
 ### Example
 
 ```
 function cricketFormat(){
  var noOfOvers = 50;

  switch(noOfovers){
    case 20:
       console.log("T20"); break;
    case 50:
      console.log("One Day");break;
      default:
    console.log("None")
  }
}
```

## setTimeOut
 - To delay the execution of code we can use setTimeOut
 -  setTimeOut will accept functions like arrow, aninymous functions
 ### Example
 
 ```
 function f1(){
  console.log("Hello");

  setTimeOut(()=>{
    console.log("Hello with setTimeOut"); //this log will print after 3000MilliSeconds
  },3000);

  console.log("Settimeout block");// this log will execute immediately it will not wait for above Settimeout
  // Inside the settimeout statements only will excute after the 3000ms others will execute as useual.
  // setTimeOut will accept functions like arrow, aninymous functions

}

f1()
```

## setInterval
- For every certain amount of time the code will execute.

### Example

```
setInterval(()=>{
  console.log("Set Interval");
},1000);
// The code inside the setInterval will execute after every 1000ms.
//Mostly this setInterval will use to update digital clock
```

## ClearInterval
  - This method clears the timer set with the setIntervalmethod.

### Example
 - In the below example , when will click on the "stop the time" button it will clear the timer setin the setInterval.

```
<html>
<body>

<h1>The Window Object</h1>
<h2>The setInterval() and clearInterval() Methods</h2>

<p id="demo"></p>

<button onclick="myStop()">Stop the time</button>

<script>
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStop() {
  clearInterval(myInterval);
}
</script>

</body>
</html>

```





