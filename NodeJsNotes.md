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
## create a Simple webserver
- It is capable of accepting the requests and sending back the responses.

## Example
```
//to create the webserver in Nodejs first we need to import the http module
const http = require('http')


//Step1 : CREATE A SERVER
//we need to pass callback function. This call back function will executes everytime
//a new request hit the server
//when the new request hits the server this callback function receieves two params
//request and response objects

//this method returns the server object
const server =  http.createServer((request,response)=>{
  console.log("A New req is receieved")
  console.log(request)
  //we can send back the response to the request
  response.end("Hello response from the server")

})


//STEP2: START THE SERVER
//It aacepts two params one is port number and the second one is host
//The third parameter is optional,this call back executes as soon as the server start listening the requests
server.listen(8000,'127.0.0.1',()=>{
  console.log("Server has started")

})

```

## Output
```
Need to type the below URL in the browser to hot the request

http://127.0.0.1:8000/

```

## Brief About how Web Actually works
- First the client sends the request and the server sends back response to the browser. This is called client-server architecture.
- On the client , in the browser we can type the domain name , the browser sends that domain name to DNS server and get the original IP and port.
- The domain name is not real address of our application. DNS will convert that into correct port and Host and will set back to the browser.Now it got created the connection between client and server via TCP/IP.
  ![Imag1](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/15cd4607-14af-4483-800b-d146bc9274aa)
  ![img2](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/f678deb6-c1c4-4908-9185-c20eb423f843)
  ![img3](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/7a4a8764-49de-470d-8d6b-a8ad3f3a4883)
![img4](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/5489a16d-a523-4300-898b-6dc4391e51ae)
![img5](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/7eaac553-d00c-450b-b77f-3e89b6a75016)

- TCP/IP are communication protocls that define how data traverse through the web.

## Example

## createwebserver.js

```
//to create the webserver in Nodejs first we need to import the http module
const http = require('http')


//Step1 : CREATE A SERVER
//we need to pass callback function. This call back function will executes everytime
//a new request hit the server
//when the new request hits the server this callback function receieves two params
//request and response objects

//this method returns the server object
const fs = require('fs')
const html = fs.readFileSync('./Template/index.html','utf-8');
const server =  http.createServer((request,response)=>{
  console.log("A New req is receieved")
  console.log(request)
  //we can send back the response to the request
  // response.end("Hello response from the server")

  //to send the html file as response first we need to read the file using fs module
  response.end(html)

})
//STEP2: START THE SERVER
//It aacepts two params one is port number and the second one is host
//The third parameter is optional,this call back executes as soon as the server start listening the requests
server.listen(8000,'127.0.0.1',()=>{
  console.log("Server has started")

})

```

## style.css
```
h3{
  font-family: 'Courier New', Courier, monospace;
  color: #232323;
}

p{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

```
## script.js
```
alert("welcome to Node App")

```

## index.html

```
<html>
  <head>
    <title>Node App</title>
    <link href="./styles/styles.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <h3>Welcome to NODE APP</h3>
    <p>
      This is simple Node application to understand.
      How the web req and response works in general.
    </p>
  </body>
  <script src="./scripts/script.js"></script>
</html>
```

## Output


![img6](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/fcee366b-2a9c-4397-abfd-ad865ad4d368)

![img7](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/e03a7492-a43f-488b-b730-f2c7ca69ccea)

## What is Routing
- Routing defines the way in which the client requests are handled by the application end points.

