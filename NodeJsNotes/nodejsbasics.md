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

## Reading And Writing 
- We can not use Javascript to read and write files.But nodejs provides API to read and write files.
- To work with files in NodeJs we need to import the FileSystem module.
```
  /* ----- READ AND WRITE DATA TO FILES ---------*/
//we need to import file system module first
const fs = require("fs")
//the below method read the data from the file and returned that , store it in the variable
let textIn = fs.readFileSync("./files/input.txt",'utf-8');
console.log(textIn)

let content = `Data read from input Text : ${textIn} \n Date Created ${new Date()}`

//If the file does not exist physically in the specified path , First Nodejs will create the file and write the data.
fs.writeFileSync("./files/output.txt",content)
```

## Reading And Writing Files Asynchronously
```
/* ----- READ AND WRITE FILES ASYNCHRONOUSLY ----*/
const fs = require("fs")
fs.readFile('./files/start.txt','utf-8',(err,data)=>{
    console.log(data)
    fs.readFile(`./files/${data}.txt`,'utf-8',(err1,data1)=>{
        console.log(data1)
        fs.readFile("./files/append.txt",'utf-8',(err2,data2)=>{
            console.log(data2)
            fs.writeFile("./files/output.txt",`${data1}\n\n ${data2} \n\n ${new Date()}`,()=>{
                console.log("File written successfully")
            })
        })
    })
})
```

## Create a Simple webserver
- To create the webserver in NOdejs need to import the package "http"
- To build a new server in nodejs we need to do two things. First need to create the server and the second is need to start the server.

```
/* ---- CREATE A SIMPLE WEBSERVER ----*/

//STEP1 : Import the http package
const http = require("http")

//STEP2 : CREATE THE SERVER
//The callback function of the below method will call everytime when a new request hits the server. 
const server = http.createServer((req,res)=>{
    //by using the below END method we can send response back to the client
    res.end("Hello!!")
    console.log("a new request receieved")
})


//STEP3 : START THE SERVER
server.listen(8000,'127.0.0.1',()=>{
    console.log('server has started!')
})

```

## How WEB works
![Screenshot 2023-11-22 190455](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/06b555bc-c023-4a8b-b60d-e638df5c8bfd)

![Screenshot 2023-11-22 190651](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/9442b9ee-ac01-48b3-9656-ea7dc4f9673e)

## How Request and Response Works
- If the response html file has any other css or script files are included , then internally the client send the requests to get the files and finally build the response htnl basing on the consolidated response.

  ![Screenshot 2023-11-22 194628](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/5bb28aad-6ffd-4762-894c-6aa6bd2a1c44)


```
/* ---- CREATE A SIMPLE WEBSERVER ----*/

//STEP1 : Import the http package
const http = require("http")
const fs = require("fs")

//We want to send the html file as the response
//First we need to read the file using fs module
const html = fs.readFileSync('./template/index.html','utf-8')

//STEP2 : CREATE THE SERVER
//The callback function of the below method will call everytime when a new request hits the server. 
const server = http.createServer((req,res)=>{
    //by using the below END method we can send response back to the client
    // res.end("Hello!!")
    //we can also send html response as well
    //res.end('<h1>This is Home Page</h1>')
     
    //send the html file as response
    res.end(html);
    console.log("a new request receieved")
})


//STEP3 : START THE SERVER
server.listen(8000,'127.0.0.1',()=>{
    console.log('server has started!')
})

```

## index.html

```
<html>
    <head>Node APP</head>
    <link href='./Styles/style.css' rel="stylesheet" type="text/css">
    <body>
        <h3>Welcome to Node APP</h3>
        <p>
            This is simple application to understand
            how the web and request and response works in general.
        </p>
    </body>
    <script src="./Scripts/script.js"></script>
</html>

```

## style.css

```
h3{
    font-family: 'Courier New', Courier, monospace;
    color: black;
}

p{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

```

## script.js

```
alert("Welcome to Node APP")

```


