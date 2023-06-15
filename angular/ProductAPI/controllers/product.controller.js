var dbcon = require("../config/db_connection")

//It is a pool of connections
var connection = dbcon.getConnection();

//this will open the connection
connection.connect();

//import the express
var express = require("express")
var router = express.Router();

//Read Endpoint

//first paramter is url here i am using "/"
//second param is req and res arrow function
//the query method also has two prams first one is query and second one callback function
router.get("/", (req, res) => {
  console.log("Inside the api")
  connection.query("use mydb")
  connection.query("select * from product", (err, records, recordFields) => {
    if (err) {
      console.error("Error while fetching the data", err)
    } else {
      res.send(records)
    }
  })
})

//get the product by id
router.get("/:id", (req, res) => {
  console.log("Inside the api")
  connection.query("use mydb")
  connection.query("select * from product where id =" + req.params.id, (err, records, recordFields) => {
    if (err) {
      console.error("Error while fetching the data", err)
    } else {
      res.send(records)
    }
  })
})

//add the product
//for this post we need to use the body parser
//that was added in server.js
router.post("/", (req, res) => {
  console.log("Inside the api")
  var id = req.body.id
  var name = req.body.name
  var description = req.body.description
  var price = req.body.price
  connection.query("use mydb")
  connection.query("insert into product values(" + id + ",'" + name + "','" + description + "'," + price + ")", (err, result) => {
    if (err) {
      console.error("Error while inserting the data", err)
    } else {
      res.send({ insert: "success" })
    }
  })
})

//update the product
router.put("/", (req, res) => {
  console.log("Inside the api")
  var id = req.body.id
  var name = req.body.name
  var description = req.body.description
  var price = req.body.price
  connection.query("use mydb")
  connection.query("update product set name=" + "'" + name + "', description=" + "'" + description + "'" + "where id=" + id, (err, result) => {
    if (err) {
      console.error("Error while inserting the data", err)
    } else {
      res.send({ insert: "success" })
    }
  })
})

//delete the product by id
router.delete("/:id", (req, res) => {
  console.log("Inside the api")
  connection.query("use mydb")
  connection.query("delete from product where id =" + req.params.id, (err, records, recordFields) => {
    if (err) {
      console.error("Error while deleting the data", err)
    } else {
      res.send({ response: "success" })
    }
  })
})

module.exports = router
