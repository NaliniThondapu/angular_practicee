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
        count: movies.length,
        data: {
            movies: movies
        }
    });
});

//POST - request(app/v1/movies)
// we want to create new Movie object
app.post('/api/v1/movies', (req, res) => {
    

})

//CREATE THE SERVER
const port = 3000;
//THE callback function of listen method will call as soon as the server gets started
app.listen(port, () => {
    console.log("Server has started")
});

//ROUTE = HTTPMETHOD + URL
//This get method is used to handle the get request.First param is root url.
//By using we can send either Text or Html response.
// app.get("/", (req, res) => {
//     // res.status(200).send("Hello from Express server")
//     // res.status(200).send("<h4>Hello from Express server<h4>")
//     //If you want to send JSON as responsewe need to use json() instead of send
//     res.status(200).json({message: 'Hello From the server' , staus: 200})

// })

