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
