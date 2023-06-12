## First created the table in MYSQL

- Using the below commnda created the new table **product** in mySQL
- We need below three modules to work with ExpressJS with MySQL

```
express
mysql
body-parser
```

```
use mydb

create table product(id int,name varchar(20),description varchar(20),price int)

select * from product

```
## create the project

```
ng new ProductAPI

```

## Need to add above mentioned modules to our project
- use the below commands

```
 npm add express --save
 npm add mysql --save
 //some time mysql will get Error: ER_NOT_SUPPORTED_AUTH_MODE error in that case use mysql2
 npm add mysql2
 //to uninstall any package command like below
 npm un mysql2
 
 //any previlize error
 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES

//to start node server
node server (here server is nothing but not a command our server.js file name)
 
 npm add body-parser --save
```

- Once added it will show under denpencies of package.json like below

```
{
  "name": "product-api",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.18.2",
    "mysql": "^2.18.1",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  }
}

```

## create the DB connection

- To establish the connection we need to use two files
- The first file will create the connection and return it
- The second file willstore the connection informtion it will used by first file.
- create the **config** folder under the project and inside that need to create these two files.

```
db_connection.js
db_properties.js
```

## Need to write below in db_properties.js

```
//this object can be used at any where
module.exports = {
  host: 'localhost',
  user: "root",
  password: "test",
  dbName: "mydb"
};

```

## Need to write below in db_connection.js

```
var dbProps = require("./db_properties");
var mysql = require("mysql")

module.exports = {
  getConnection: () => {
    return mysql.createConnection({
      host: dbProps.host,
      user: dbProps.user,
      password: dbProps.password,
      dbname: dbProps.dbName
    })
  }
}



```

## create the controller
- This will host our restful API
- this will use **dbconnection** module and also **routes** module to create the routes.
- create the **controllers** folder under our project(folder name is also our choice best one is controllers)
- Under this folder need to create **product.controller.js** file(filename is anything)


## product.controller.js

```
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
connection.query("use mydb")
  connection.query("select * from product", (err, records, recordFields) => {
    if (err) {
      console.err("Error while fetching the data")
    } else {
      res.send(records)
    }
  })
})

module.exports=router

```

## start NodeJs server
-create **server.js** which will act as a bootstarp our application to kick start of our application.


## server.js

```
//here "express" is a module
var express = require("express")



//create an instance(object) of app is like the root for our application
var app = express();

var productAPI = require("./controllers/product.controller")
app.use("/app/products", productAPI)
app.listen(8080);
console.log("Server up and running on 8080")

```

## get the product by id API

## product.controller.js
```
//get the product by id
router.get("/:id", (req, res) => {
  console.log("Inside the api")
  connection.query("use mydb")
  connection.query("select * from product where id ="+req.params.id, (err, records, recordFields) => {
    if (err) {
      console.error("Error while fetching the data",err)
    } else {
      res.send(records)
    }
  })
})
```

## add the product API

## product.controller.js
```
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

```

## server.js
```
//here "express" is a module
var express = require("express")
var bodyParser = require("body-parser")



//create an instance(object) of app is like the root for our application
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//or
//app.use(express.urlencoded({extended:false}))
//app.use(express.json())


var productAPI = require("./controllers/product.controller")
app.use("/api/products", productAPI)
app.listen(8080);
console.log("Server up and running on 8080")

```

## update and delete APIs
## product.controller.js

```
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

```

## In case of any CORS related error while accessig these APIs from angular need to run the below commands. These commnds need to run on NODE side API project
## refer the linke for the CORS(cross origin request sharing) error
## https://www.angularjswiki.com/angular/origin-http-localhost4200-has-been-blocked-by-cors-policy-in-angular-error/

```
> npm install cors --save

var cors = require('cors');
app.use(cors());
```







