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

//import the express module
var express = require("express")
var router = express.Router();


```









