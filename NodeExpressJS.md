
## ExpressJS
- It is a free and opensource web application framework for NODEJS.
- It helps us develop NODEJS application with minimal NODEJS code.
- It is completly build on Nodejs
- It is one of the most popular NODEJS framework
- With express we organize NODEJS code in MVC architecture.
- First create the project
- create the package.json using the below command
  ```
  npm init
  ```
 - It will ask below questions and we need to provide somw inputs. If none of it we provide it took default values.
   
 ```
 PS C:\Nalini\angular_practice\angular_practicee\NodeJsWithExpress> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejswithexpress) node-js-with-express
version: (1.0.0)
description:
entry point: (index.js) app.js
test command:                                                                                                                                                  
git repository:                                                                                                                                                
keywords:                                                                                                                                                      
author: Nalini                                                                                                                                                 
license: (ISC)                                                                                                                                                 
About to write to C:\Nalini\angular_practice\angular_practicee\NodeJsWithExpress\package.json:

{
  "name": "node-js-with-express",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Nalini",
  "license": "ISC"
}

Is this OK? (yes) yes
PS C:\Nalini\angular_practice\angular_practicee\NodeJsWithExpress>

```
- To install ExpressJS need to run the below command

```
npm install express
```
- As per the above configurations "app.js" is the entry point.
- In this we are going to create all the configurations related to express JS.

## Example

```
//IMPORT EXPRESS PACKAGE
//THIS IS THORD PARTY PACKAGE

const express = require("express")
//the below app is a object which has bunch of methods that we can use in NODEJS app
let app = express();

//CREATE THE SERVER
const port = 3000;
//THE callback function of listen method will call as soon as the server gets started
app.listen(port, () => {
    console.log("Server has started")
});

//ROUTE = HTTPMETHOD + URL
//This get method is used to handle the get request.First param is root url.
//By using we can send either Text or Html response.
app.get("/", (req, res) => {
    // res.status(200).send("Hello from Express server")
    // res.status(200).send("<h4>Hello from Express server<h4>")
    //If you want to send JSON as responsewe need to use json() instead of send
    res.status(200).json({message: 'Hello From the server' , staus: 200})

})

```
## Get Request
## Example

```
//IMPORT EXPRESS PACKAGE
//THIS IS THORD PARTY PACKAGE

const express = require("express")
const fs = require('fs')
//the below app is a object which has bunch of methods that we can use in NODEJS app
let app = express();

//read the movies json file
let movies = JSON.parse(fs.readFileSync('./data/movies.json'));
//GET- API(/api/movies)
app.get('/api/v1/movies', (req, res) => {
    res.status(200).json({
        status: "success",
        count:movies.length,
        data: {
            movies: movies
        }
    });
});

//CREATE THE SERVER
const port = 3000;
//THE callback function of listen method will call as soon as the server gets started
app.listen(port, () => {
    console.log("Server has started")
});

```

- API Method
  ```
  http://localhost:3000/api/v1/movies
  ```
## POST Request
