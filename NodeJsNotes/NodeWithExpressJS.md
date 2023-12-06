## What is ExpressJs
- Express JS is a free and open-source web application framework for NODEJS.
- It provides builtin classes and functions which we can use to develop web applications.
- It is completely build on NODEJS.
- It allows us to write NODEJS application faster and simpler.
- With express we can organize NODEJS code in MVC architecture.

## Example

```
//IMPORT PACKAGE
//The express package returns a function need to call explicitly to get the object
const express = require('express')
let app = express()

//ROUTE = HTTP METHOD(GET/POST)+URL
// TO handle the get requests we can use "GET" method.
//Here the first arg "/" is route url(localhost:3000/)
app.get('/',(req,res)=>{
    //if we want to send text/html response back we need to use send method
    // res.status(200).send("Hello from express server")

    //sending html response
    // res.status(200).send("<h1>Hello from express server<h1>")

    //to send JSON response we need to use "JSON" method instead of "SEND" method
    res.status(200).json({message:'Hello World',status:200})

})

//HANDLE POST REQUEST
app.post('/',()=>{
    
})

//create the server
const port = 3000;
app.listen(port,()=>{
    console.log("Server has started")
})
```
## Web API

![Screenshot 2023-12-06 164926](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/d61ac276-a4ce-4210-8c64-55421e5b13cf)

![Screenshot 2023-12-06 164355](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/c22aec32-a427-4e46-8893-91b8a54f0100)


## Handle GET API
```
//IMPORT PACKAGE
//The express package returns a function need to call explicitly to get the object
const express = require('express')
let app = express()
const fs = require("fs")
//First Read the data from the file and need to convert into Java script object by using JSON.parse
let movies = JSON.parse(fs.readFileSync("./data/movies.json"))

//handle GET request
app.get('/api/v1/movies', (req, res) => {
    //we need to format to json json first the movies data and then sendit
    res.status(200).json(
        {
            status: "success",
            count: movies.length,
            //the below format means we are envolping the json data
            data: {
                movies: movies
            }
        }
    )

})

//create the server
const port = 3000;
app.listen(port, () => {
    console.log("Server has started")
})
```

## Handle POST REQUEST
```
//IMPORT PACKAGE
//The express package returns a function need to call explicitly to get the object
const express = require('express')
let app = express()
const fs = require("fs")
//First Read the data from the file and need to convert into Java script object by using JSON.parse
let movies = JSON.parse(fs.readFileSync("./data/movies.json"))


// get the middleware to pass the request body
//this "express.json()" middleware will add the request body to the request object
//A middleware is just a function that can modify the incoming request data 
app.use(express.json())

//Handle POST Request
//we can able to create the new movie object
app.post('/api/v1/movies', (req, res) => {

    //POST request means we have to send the body object
    //but the req parameter does not have body parameter
    //The solution is we need to use middleware to send the request body
    console.log(req.body);

    const newId = movies[movies.length - 1].id + 1;

    //the below assign method will create the new object by merging two existing Objects together
    const newMovie = Object.assign({ id: newId }, req.body)
    //the above new movie need to Movies array
    movies.push(newMovie);
    //write the newMovie to the file
    //first we need to convert javascript object to JSON and then write
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie
            }
        })

    })
    // res.send("New Movie got created")

})

//create the server
const port = 3000;
app.listen(port, () => {
    console.log("Server has started")
})
```
## Handle Route Parameters

```
//IMPORT PACKAGE
//The express package returns a function need to call explicitly to get the object
const express = require('express')
let app = express()
const fs = require("fs")
//First Read the data from the file and need to convert into Java script object by using JSON.parse
let movies = JSON.parse(fs.readFileSync("./data/movies.json"))


//GET Request  - /api/v1/movies/id
//Get movie by Id
//the Url may have multiply route params
//in the below ap req id,name and x route params
//:x? this means , x parameter is optional
// app.get('/api/v1/movies/:id/:name/:x?',(req,res)=>{
app.get('/api/v1/movies/:id', (req, res) => {
    //we have to know which id is entered the user in the route param to get that perticular movie
    //The req object , it has property called "params" and that params is an object it has all the route parameters
    //the id value is stored as object and need to convert into integer
    console.log(req.params);
    //below will convert the string into integer
    const movieId = +req.params.id;
    console.log(movieId)

    //FIND THE MOVIE BASED ON ID
    let movie = movies.find(movie => movie.id === movieId)
    console.log(movie)

//SEND THE ERROR MESSAGE BACK IF MOVIE NOT HAVE
   if(!movie){
        return res.status(404).json({
            status:"Fail",
            message:`Movie with ${movieId} not Found`
        })
    }

    //SEND THE MOVIE IN THE RESPONSE
    res.status(200).json({
        status: "success",
        data: {
            movie: movie

        }
    })

})

//create the server
const port = 3000;
app.listen(port, () => {
    console.log("Server has started")
})
```
