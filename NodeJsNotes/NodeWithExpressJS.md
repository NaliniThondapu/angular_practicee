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
