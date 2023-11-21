## What Is Nodejs
 - NODE JS is a javascript runtime,  built on google opensource V8 engine.
 - Before 2009 javascript first only capable of running inside the browser only.
## Where we need to use NODEJS and Where Not
- Node applications are so fast and scalable , because it is single threaded , event driven and non-blocking.
- It is perfect for building fast and scalable data intensive application.
- For example like video streaming , video buffering type of applications like Netflix, Uber, paypal were developed using this.
- Where as video convertions , image manipulations type of applocattions were not developed by using Nodejs because it needs heavy server side processing.
## REPL in NODEJS
- REPL means Read(Read user input) , Eval(Evaluate the user input),Print(Print the result) , Loop(return and wait for new input).
- REPL is simply an environment which allows us to execute javascript of more specifically Nodejs code.
- We start this by executing "node" command in the terminal.
- Underscrore(_) is the special variable which stores the previous expression result in REPL environemt.

## Sample Node JS program
```
//we do not have any built in functions in Nodejs to read the data from the terminal
// we can use the "readline" module provided by Nodejs to read the data from the terminal

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// The below method needs two params one is the prompt message which we need to display to the user
// and the second one is callback function which will once the user clicks the enter after entered the input.
rl.question("Please enter your name:", (name) => {
    console.log("You entered:" + name)
    //we also need to close the interface
    //this close method is nothing but event 
    rl.close();
})

//we can perform an event once the close method of interface is called
rl.on("close",()=>{
    console.log("Process got closed")
    process.exit(0);

})

```
