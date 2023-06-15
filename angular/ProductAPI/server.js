//here "express" is a module
var express = require("express")
var bodyParser = require("body-parser")



//create an instance(object) of app is like the root for our application
var app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//or
//app.use(express.urlencoded({extended:false}))
//app.use(express.json())


var productAPI = require("./controllers/product.controller")
app.use("/api/products", productAPI)
app.listen(8080);
console.log("Server up and running on 8080")
