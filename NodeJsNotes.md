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
- we can make our application to respond to different URLS with different responses using routing.
- Routing basically means implementing different actions basing on different URLS.
- Some times URLS have route parameters (ww.nodeapp.com/home/101) here 101 is the parameters and also have query string.
  ## Types of URLs
  - File Based Url (request for the content of of perticular file from the server like www.nodeapp.com/index.html)
  - Resource Based URL(Request for the resource like www.nodeapp.com/home)
 ## Create Routing
 ## Example
 ```
const http = require('http')
//for every new request the below callback function will execute.
//In this we need to check which URL the user has entered basing on the request object which has URL parameter
//basing on the URL we can send back the response

//STEP1: CREATE THE SERVER
const server = http.createServer((request, response) => {
  let path = request.url;
  if(path == '/' || path.toLocaleLowerCase() == '/home'){
    response.end("You are in Home Page")
  }
  else if(path.toLocaleLowerCase() == '/about'){
    response.end("You are in about Page")
  }
  else if(path.toLocaleLowerCase() == '/contact'){
    response.end("You are in contact Page")
  }

  //FALL BACK ROUTE -- the route which will be called when none of the other routes  can handled the URL which the User entered.
  else{
    response.end("ERROR 404 :PAGE NOT FOUND")
  }

})
//START THE SERVER
server.listen(8000,'127.0.0.1',()=>{
  console.log("Server has started")

})

```

## Sending HTML response
## Example
## index.html

```
<!DOCTYPE html>
<html>
    <head>
        <title>Node App</title>
        <style>
            *{
                margin: 0px;
                padding: 0px;
                box-sizing: border-box;
            }
            body{
                background-color: #232323;
            }
            .main-content{
                width: 80%;
                padding: 10px 40px;
                background-color: #343434;
                border-radius: 5px;
                margin: 20px auto;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                color: #fff;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
            a{
                color: #fff;
                text-decoration: none;
                font-size: 14px;
                font-weight: bold;
                margin: 3px 10px;
            }
            .navbar{
                padding: 4px 30px 10px 0px;
                border-bottom: #232323 3px solid;
            }
            .page-content{
                text-align: center;
                padding-top: 40px;
            }
            .products-list{
                padding: 10px 10px;
                margin: 2px auto;
                color: #fff;
                border-bottom: #232323 1.5px solid;
            }
            .products-detail{
                display: flex;
            }
            .product-image{
                width: 140px;
                height: 140px;
                border-radius: 5px;
                padding: 10px 10px;
                margin: 0px 10px;
            }
            .product-specs{
                text-align: left;
                margin: 0px 10px;

            }
            span{
                color: #FF5733;
            }
            p{
                font-size: 12px;
                margin: 2px 0px 2px 0px;
            }
            h5,h4,h3,h2{
                margin: 10px 0px 10px 0px;
            }
            .product-info{
                width: 20%;
                padding: 5px 0px;
                text-align: left;
            }
            .btn{
                padding: 6px 20px;
                border-radius: 3px;
                border: none;
            }
            .btn-primary{
                background-color: #16A085;
            }
            .btn-secondary{
                background-color: #FF5733;
            }
			.btn-back{
				padding: 6px 20px;
                border-radius: 15px;
                border: none;
				background-color:#FF3131;
				color: white;
			}
			.product-page{
				padding: 20px 50px;
			}
			.product-desc{
				display: flex;
				width: 100%;
			}
			.product-desc-image{
			    margin-right: 20px;
			}
			.product-details-info{
				margin-left: 40px;
				text-align: left;
			}
			.product-desc-p{
				margin-top: 4px;
				font-size: 14px;
			}
			.product-desc-details{
				text-align: left;
				margin: 20px 0px;
			}
			.product-details-desc{
				margin-top: 60px;
				font-size: 16px;
			}
        </style>
    </head>
    <body>
        <div class="main-content">
            <div class="navbar">
                <a href="Home">Home</a>
                <a href="Products">Products</a>
                <a href="About">About</a>
                <a href="Contact">Contact</a>
            </div>
            <div class="page-content">
                 <!-- The below one is the place holder will update basing on the URL-->
                {{%CONTENT%}}
            </div>
        </div>
    </body>
</html>

```

## routing.js
```

const http = require('http')
const fs = require('fs')
const html = fs.readFileSync('./Template/index.html','utf-8');
//for every new request the below callback function will execute.
//In this we need to check which URL the user has entered basing on the request object which has URL parameter
//basing on the URL we can send back the response

//STEP1: CREATE THE SERVER
const server = http.createServer((request, response) => {
  let path = request.url;
  if(path == '/' || path.toLocaleLowerCase() == '/home'){
    //the below replace method will replace the place holder which is present in the index.html
    response.end(html.replace('{{%CONTENT%}}','Your are in Home Page'))
  }
  else if(path.toLocaleLowerCase() == '/about'){
    response.end(html.replace('{{%CONTENT%}}','Your are in About Page'))
  }
  else if(path.toLocaleLowerCase() == '/contact'){
    response.end(html.replace('{{%CONTENT%}}','Your are in Contact Page'))
  }

  //FALL BACK ROUTE -- the route which will be called when none of the other routes  can handled the URL which the User entered.
  else{
    response.end(html.replace('{{%CONTENT%}}','ERROR 404 : PAGE NOT FOUND'))
  }

})


//START THE SERVER
server.listen(8000,'127.0.0.1',()=>{
  console.log("Server has started")

})


```

## Setting Headers for Response

## routing.js

```
const http = require('http')
const fs = require('fs')
const html = fs.readFileSync('./Template/index.html','utf-8');
//for every new request the below callback function will execute.
//In this we need to check which URL the user has entered basing on the request object which has URL parameter
//basing on the URL we can send back the response

//STEP1: CREATE THE SERVER
const server = http.createServer((request, response) => {
  let path = request.url;
  if(path == '/' || path.toLocaleLowerCase() == '/home'){
    //setting the headers to the Response
    //the first argument is status code success or failure
    //the second argument has list of headers of object type
    response.writeHead(200,{
      'Content-Type':'text/html',
      //we can also set our custom headers
      'my-header':'Hello World'
    })
    //the below replace method will replace the place holder which is present in the index.html
    response.end(html.replace('{{%CONTENT%}}','Your are in Home Page'))
  }
  else if(path.toLocaleLowerCase() == '/about'){
    response.writeHead(200)
    response.end(html.replace('{{%CONTENT%}}','Your are in About Page'))
  }
  else if(path.toLocaleLowerCase() == '/contact'){
    response.writeHead(200)
    response.end(html.replace('{{%CONTENT%}}','Your are in Contact Page'))
  }

  //FALL BACK ROUTE -- the route which will be called when none of the other routes  can handled the URL which the User entered.
  else{
    response.writeHead(404)
    response.end(html.replace('{{%CONTENT%}}','ERROR 404 : PAGE NOT FOUND'))
  }

})


//START THE SERVER
server.listen(8000,'127.0.0.1',()=>{
  console.log("Server has started")

})


```

## Output

![1](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/29d73458-f688-45c3-adc4-5d6ff572868b)

![img1](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/d616968e-109f-426b-aa4b-424afacaa108)

![img9](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/4fba70d3-a346-47a0-b8eb-95c5c39c4b33)


## Work with JSON DATA

## Example routing.js
```
const http = require('http')
const fs = require('fs')
const html = fs.readFileSync('./Template/index.html', 'utf-8');
const products = fs.readFileSync('./data/products.json', 'utf-8');


//STEP1: CREATE THE SERVER
const server = http.createServer((request, response) => {
  let path = request.url;
  if (path.toLocaleLowerCase() == '/products') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(products);
    //read the products.json file and send that back as response
    //if we the below file reading logic here for every request the file reading will happen
    //to imporve the performence we can read only once and store it in  the variable and reuse the same
    // fs.readFile('./data/products.json', 'utf-8', (error, data) => {
    //   response.end(data)
    // })

  }

  //FALL BACK ROUTE -- the route which will be called when none of the other routes  can handled the URL which the User entered.
  else {
    response.writeHead(404)
    response.end(html.replace('{{%CONTENT%}}', 'ERROR 404 : PAGE NOT FOUND'))
  }

})


//START THE SERVER
server.listen(8000, '127.0.0.1', () => {
  console.log("Server has started")

})

```

## Convert the JSON into HTML
## Example Routing.js

```
const http = require('http')
const fs = require('fs')
const html = fs.readFileSync('./Template/index.html', 'utf-8');
//JSON parse method will convert the JSON into java script object
const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
const productsListHtml = fs.readFileSync('./Template/products-list.html', 'utf-8');

//here we can iterate the products and replace with the values
//the map method returns the array of product htmls which has place holders replaced with json values
let producthtmlarray = products.map((prod) => {
  let output = productsListHtml.replace('{{%IMAGE%}}', prod.productImage);
  output = output.replace('{{%NAME%}}', prod.name);
  output = output.replace('{{%MODELNAME%}}', prod.modeName);
  output = output.replace('{{%MODELNO%}}', prod.modelNumber);
  output = output.replace('{{%SIZE%}}', prod.size);
  output = output.replace('{{%CAMERA%}}', prod.camera);
  output = output.replace('{{%PRICE%}}', prod.price);
  output = output.replace('{{%COLOR%}}', prod.color);

  return output;
})


//STEP1: CREATE THE SERVER
const server = http.createServer((request, response) => {
  let path = request.url;
  if (path.toLocaleLowerCase() == '/products') {
    //here we are joining array of htmls as one
    let productResponseHtml = html.replace('{{%CONTENT%}}', producthtmlarray.join(','));
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end(productResponseHtml);
  }
  //FALL BACK ROUTE -- the route which will be called when none of the other routes  can handled the URL which the User entered.
  else {
    response.writeHead(404)
    response.end(html.replace('{{%CONTENT%}}', 'ERROR 404 : PAGE NOT FOUND'))
  }

})
//START THE SERVER
server.listen(8000, '127.0.0.1', () => {
  console.log("Server has started")

})

```

## Parse Query String from URL
- A query string is a key value pair after a question mark of the url.
- For this we need to import "url" package.
- This url has parse method to parse that url

## Example
```

const url = require('url')

//STEP1: CREATE THE SERVER
const server = http.createServer((request, response) => {
  //the below parse method is used to parse the URL to extrac the query string values
  //if the second param is true then only it will parse
  //otherwise not
  //the first one "query" it has query params with key and value pairs
  //the second one pathname is, resource name like ex: http://localhost:8000/Products?id=100 here /products is the resource name.
  //here pathname:path path is the alias name for pathname
  let { query, pathname: path } = url.parse(request.url, true);
  if (path.toLocaleLowerCase() == '/products') {
    if (!query.id) {
      //here we are joining array of htmls as one
      let productResponseHtml = html.replace('{{%CONTENT%}}', producthtmlarray.join(','));
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.end(productResponseHtml);
    } else {
      response.end("This is the produc with ID:" + query.id)
    }
  }
  //FALL BACK ROUTE -- the route which will be called when none of the other routes  can handled the URL which the User entered.
  else {
    response.writeHead(404)
    response.end(html.replace('{{%CONTENT%}}', 'ERROR 404 : PAGE NOT FOUND'))
  }

})
//START THE SERVER
server.listen(8000, '127.0.0.1', () => {
  console.log("Server has started")

})
```

## create the reusable function
- In the below example we can use the function to convert the json data into html.
   
## Example
  ```
  const http = require('http')
const fs = require('fs')
const url = require('url')
const html = fs.readFileSync('./Template/index.html', 'utf-8');
//JSON parse method will convert the JSON into java script object
const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
const productsListHtml = fs.readFileSync('./Template/products-list.html', 'utf-8');

//here we can iterate the products and replace with the values
//the map method returns the array of product htmls which has place holders replaced with json values

function replacehtml(template, product) {
  let output = template.replace('{{%IMAGE%}}', product.productImage);
  output = output.replace('{{%NAME%}}', product.name);
  output = output.replace('{{%MODELNAME%}}', product.modeName);
  output = output.replace('{{%MODELNO%}}', product.modelNumber);
  output = output.replace('{{%SIZE%}}', product.size);
  output = output.replace('{{%CAMERA%}}', product.camera);
  output = output.replace('{{%PRICE%}}', product.price);
  output = output.replace('{{%COLOR%}}', product.color);
  output = output.replace('{{%ID%}}', product.id);

  return output;

}
//STEP1: CREATE THE SERVER
const server = http.createServer((request, response) => {
  if (path.toLocaleLowerCase() == '/products') {
    if (!query.id) {
      let producthtmlarray = products.map((prod) => {
        replacehtml(productsListHtml, prod);

      })
      let productResponseHtml = html.replace('{{%CONTENT%}}', producthtmlarray.join(','));
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.end(productResponseHtml);
    } else {
      //get the product by id
      let product = products[query.id]
      let productresphtml = replacehtml(productsListHtml,product)
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      let productResponseHtml = html.replace('{{%CONTENT%}}', productresphtml);
      response.end(productResponseHtml);
    }
  }
  //FALL BACK ROUTE -- the route which will be called when none of the other routes  can handled the URL which the User entered.
  else {
    response.writeHead(404)
    response.end(html.replace('{{%CONTENT%}}', 'ERROR 404 : PAGE NOT FOUND'))
  }

})
//START THE SERVER
server.listen(8000, '127.0.0.1', () => {
  console.log("Server has started")

})
```
## Create the custom module
- A module is just another java script file, from where we can export some values.
- Those exported values can be imported into another scriptfile.
- In Node JS each script file is a module.

## Example
Below js is our own js file that is module. We imported that into userdefinedmodule.js file.
## replacehtml.js
```
    //module.exports means we can able to import into another js
module.exports = function replacehtml(template, product) {
  let output = template.replace('{{%IMAGE%}}', product.productImage);
  output = output.replace('{{%NAME%}}', product.name);
  output = output.replace('{{%MODELNAME%}}', product.modeName);
  output = output.replace('{{%MODELNO%}}', product.modelNumber);
  output = output.replace('{{%SIZE%}}', product.size);
  output = output.replace('{{%CAMERA%}}', product.camera);
  output = output.replace('{{%PRICE%}}', product.price);
  output = output.replace('{{%COLOR%}}', product.color);
  output = output.replace('{{%ID%}}', product.id);

  return output;

}
```
## userdefinedmodule.js
```
//we are importing our own module.
const replaceHtml = require('./modules/replacehtml')
```

## Event Driven Architecture
- In this we have three main players.
- Those are EventEmitter, EventListener,EventHandler
- Event emitter emits the named event when something happens in the app.
- when an event is emitted the event can be picked by eventlistener.These event listeners will tehn fire a call back function that was attached to event listener.
- This call back function is called as event handler.

![Uploading 2.png…]()




