## What is NodeJs
- It is a Javascript runtime , built on Googles open source v8 engine.
- It is a program which includes the v8 java script engine and additional APIs that provides capabilities to run the javascript out side the browser.
## Uses
- The Nodes Js applications are so faster and so scalable is because it is a single threaded , and based on event driven and Non-blocking event module.
- It is perfect for building fast and scalable , data intensive application.
- It is useful to build front end as well end development.(Same technology across entire stack).
## REPL 
- It is a env which allows us to execute the javascript code especially node js code.
- To open this repl window, we need to run the below command in terminal.
- Underscore(_) is the  special variable which can store the result of previous expression.
  ```
  C:\Users\nalin>node
  ```
- R = read user input
- E= evaluate user input
- p= print or output the result
- l=return and wait for new input

## Node Js Basics
## How to Output some on the terminal and how to read Inputs from the terminal
- To import the modules in Node js we need "require()" module.
## Example
```
const readline = require('readline')
//this readline module is used to read the input from the terminal.

//this interface accepts object which is combination of inout and output params
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//this requires two params one is message and second one is callback function
//which accepts the input.
rl.question("Please enter your name:", (name) => {
  console.log("You entered:" + name);
  //we must close the interface
  //This is also type of close event
  rl.close();
})

//If required we can do some operations after the close event triggered
rl.on('close', () => {
  console.log("Interface closed");
  process.exit(0);
})


```

## Output

```
PS C:\Nalini\angular_practice\angular_practicee\NodeJs\src\app\NodeJsBasics> node app.js
Please enter your name:Nalini Shiva
You entered:Nalini Shiva
Interface closed
```

## Read and Writing the Files synchronously
- we need to use 'Filesystem(fs)' module to read and write files in NodeJs
## Example
```
//to read or files from node js we need fs module
//first we need to import

const fs = require('fs')
//by using this method we read a file synchronously
//we need to pass of the path of the file
let text = fs.readFileSync('./files/input.txt', 'utf-8')
console.log(text)


//write the data to file
let fileContent = `My Name is Nalini \n Date created ${new Date()}`
//If the file does not exists first node will create the file and write the data to that file.
fs.writeFileSync('./files/output.txt',fileContent)

```
## Reading and Writing files Asynchronously
## Asynchronous Nature Of NODE JS
- Synchronous execution means the code will execute line by line.
- If any line of the code takes more time to complete that , then the execution of next line is blocked.

  ## Example
  ```
  //to read or files from node js we need fs module
//first we need to import

const fs = require('fs')

//read file asynchronously
//this function will execute the in the background

fs.readFile('./files/start.txt', 'utf-8', (err, data) => {
  console.log(data)
  fs.readFile('./files/input.txt', 'utf-8', (error2, data1) => {
    console.log(data1)
    fs.readFile('./files/append.txt', 'utf-8', (error3, data2) => {
      console.log(data2)
      //to write the data asynchronously we need to use writefile method
      //here we are calling a callback function from inside of another callback function this is called callback hell
      fs.writeFile('./files/output.txt', `${data1} ${data2} date created ${new Date()}`, () => {
        console.log("File Written successfully")
      })
    })
  })
})
console.log("Reading file...")

```




