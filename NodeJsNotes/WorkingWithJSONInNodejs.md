## Read Json File And convert those into JavaScript objects and then map to the html

## products.html

```
<div class="products-list">
    <div class="products-detail">
        <div class="product-image">
            <img src={{%IMAGE%}} height="120" width="120">
        </div>
        <div class="product-specs">
            <h3>{{%NAME%}}</h3>
            <p><span>Model Name:</span>{{%MODELNAME%}}</p>
            <p><span>Model Number:</span>{{%MODELNO%}}/A</p>
            <p><span>Size:</span>{{%SIZE%}}</p>
            <p><span>Camera:</span>{{%CAMERA%}}</p>
        </div>
    </div>
    <div class="products-detail">
        <div class="product-info"><h4>{{%PRICE%}}</h4></div>
        <div class="product-info"><h4>{{%COLOR%}}</h4></div>
        <div class="product-info">
            <button class="btn btn-primary">Buy Now</button>
            <button class="btn btn-secondary">Show Details</button>
        </div>
    </div>
</div>
```

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
                width: 70%;
                padding: 10px 30px;
                background-color: #343434;
                border-radius: 10px;
                margin: 2px auto;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                color: #fff;
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
            h3{
                margin: 10px 0px 10px 0px;
            }
            .product-info{
                width: 30%;
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
                <h3>{{%CONTENT%}}</h3>
            </div>
        </div>
    </body>
</html>
```


## app.js

```
//STEP1 : Import the http package
const http = require("http")
const fs = require("fs")

//We want to send the html file as the response
//First we need to read the file using fs module
const html = fs.readFileSync('./template/index.html', 'utf-8')

//Below JSON parse method will convert JSOn objects into javascript objects
let products = JSON.parse(fs.readFileSync("./data/products.json", 'utf-8'));
let prodhtml = fs.readFileSync('./template/products.html', 'utf-8')

//Map the html place holders with JSON Data
let prodhtmlArray = products.map((prod) => {
    let output = prodhtml.replace("{{%IMAGE%}}", prod.productImage)
    output = output.replace('{{%NAME%}}', prod.name);
    output = output.replace('{{%MODELNAME%}}', prod.modeName);
    output = output.replace('{{%MODELNO%}}', prod.modelNumber);
    output = output.replace('{{%CAMERA%}}', prod.camera);
    output = output.replace('{{%PRICE%}}', prod.price);
    output = output.replace('{{%COLOR%}}', prod.color);
    return output;
})

const server = http.createServer((req, res) => {
    //The below req.url method will returns the path  after the domain eg: www.xyz.com/home it returns /home
    let path = req.url;
    if (path == '/' || path.toLocaleLowerCase() == '/home') {
        //set the staus code in the response as a header
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello , World'
        });
        //here we are replacing the placeholder of HTMl with required information
        res.end(html.replace('{{%CONTENT%}}', "You are in Home page"))
    } else if (path.toLocaleLowerCase() == '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello , World'
        });
        res.end(html.replace('{{%CONTENT%}}', 'You are in About Page'))
    } else if (path.toLocaleLowerCase() == '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'Hello , World'
        });
        res.end(html.replace('{{%CONTENT%}}', 'You are in contact Page'))
    } else if (path.toLocaleLowerCase() === '/products') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html.replace('{{%CONTENT%}}', prodhtmlArray))
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-header': 'Hello , World'
        });
        //this is the default route if user enters the wrong path or unmanaged path
        //If this is not mention our applications will hang
        res.end(html.replace('{{%CONTENT%}}', 'ERROR 404: PAGE NOT FOUND'))
    }
})

//STEP3 : START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started!')
})
```

## Parsing Query String From URL

- To get the query String parameters we need to parse the URL.
- For this need to import "url" package.

```
let url = require('url')
```

- Parse the URL using the below method

```
//If the second param is true will parse the Query String otherwise not.
  const server = http.createServer((req, res) => {
    //parse the url to get the query parameters
    let x = url.parse(req.url, true);
    console.log(x)

```
- The x object has so many fields like below

```
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?id=10',
  query: [Object: null prototype] { id: '10' },
  pathname: '/Products',
  path: '/Products?id=10',
  href: '/Products?id=10'
}
```
- If we want to get only specific parameters from x we need to like below

  ```
   //in the below path is alias name for pathname
    let {quey , pathname :path} = url.parse(req.url,true);
  ```

  ## Example
  ## app.js
```
//STEP1 : Import the http package
const http = require("http")
const fs = require("fs")
const url = require("url")

//We want to send the html file as the response
//First we need to read the file using fs module
const html = fs.readFileSync('./template/index.html', 'utf-8')

//Below JSON parse method will convert JSOn objects into javascript objects
let products = JSON.parse(fs.readFileSync("./data/products.json", 'utf-8'));
let prodhtml = fs.readFileSync('./template/products.html', 'utf-8')

//Map the html place holders with JSON Data
let prodhtmlArray = products.map((prod) => {
    let output = prodhtml.replace("{{%IMAGE%}}", prod.productImage)
    output = output.replace('{{%NAME%}}', prod.name);
    output = output.replace('{{%MODELNAME%}}', prod.modeName);
    output = output.replace('{{%MODELNO%}}', prod.modelNumber);
    output = output.replace('{{%CAMERA%}}', prod.camera);
    output = output.replace('{{%PRICE%}}', prod.price);
    output = output.replace('{{%COLOR%}}', prod.color);
    output = output.replace('{{%ID%}}', prod.id);
    return output;
})

const server = http.createServer((req, res) => {
    //parse the url to get the query parameters
    // let x = url.parse(req.url, true);
    // console.log(x)

    //in the below path is alias name for pathname
    let { query, pathname: path } = url.parse(req.url, true);

   if (path.toLocaleLowerCase() === '/products') {
        if (!query.id) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html.replace('{{%CONTENT%}}', prodhtmlArray))
        } else {
            res.end("You are In Product Page of ID = " + query.id)
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-header': 'Hello , World'
        });
        //this is the default route if user enters the wrong path or unmanaged path
        //If this is not mention our applications will hang
        res.end(html.replace('{{%CONTENT%}}', 'ERROR 404: PAGE NOT FOUND'))
    }
})

//STEP3 : START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started!')
})
```

## Creating a reusable function

## app.js

```
/STEP1 : Import the http package
const http = require("http")
const fs = require("fs")
const url = require("url")

//We want to send the html file as the response
//First we need to read the file using fs module
const html = fs.readFileSync('./template/index.html', 'utf-8')

//Below JSON parse method will convert JSOn objects into javascript objects
let products = JSON.parse(fs.readFileSync("./data/products.json", 'utf-8'));
let prodhtml = fs.readFileSync('./template/products.html', 'utf-8')
let prodDetailsHtml = fs.readFileSync('./template/product-details.html', 'utf-8')


//replace the above logic with the function
function replaceHtml(template, product) {
    let output = template.replace("{{%IMAGE%}}", product.productImage)
    output = output.replace('{{%NAME%}}', product.name);
    output = output.replace('{{%MODELNAME%}}', product.modeName);
    output = output.replace('{{%MODELNO%}}', product.modelNumber);
    output = output.replace('{{%CAMERA%}}', product.camera);
    output = output.replace('{{%PRICE%}}', product.price);
    output = output.replace('{{%COLOR%}}', product.color);
    output = output.replace('{{%ID%}}', product.id);
    output = output.replace('{{%ROM%}}', product.ROM);
    output = output.replace('{{%DESC%}}', product.Description);
    return output;
}

//SEND HTML RESPONSES FOR DIFFERENT ROUTES

const server = http.createServer((req, res) => {
    //parse the url to get the query parameters
    // let x = url.parse(req.url, true);
    // console.log(x)

    //in the below path is alias name for pathname
    let { query, pathname: path } = url.parse(req.url, true);

    if (path.toLocaleLowerCase() === '/products') {
        if (!query.id) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let prodhtmlArray = products.map((prod) => {
                return replaceHtml(prodhtml, prod)
            })
            res.end(html.replace('{{%CONTENT%}}', prodhtmlArray.join(',')))
        } else {
            //get the product from the array by id
            let product = products[query.id];
            res.end(html.replace('{{%CONTENT%}}', replaceHtml(prodDetailsHtml, product)))
            // res.end("You are In Product Page of ID = " + query.id)
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-header': 'Hello , World'
        });
        //this is the default route if user enters the wrong path or unmanaged path
        //If this is not mention our applications will hang
        res.end(html.replace('{{%CONTENT%}}', 'ERROR 404: PAGE NOT FOUND'))
    }
})

//STEP3 : START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started!')
})
```

## product-details.html

```
<div class="page-content">
    <div class="product-page">
	<div class="product-desc">
		<div class="product-desc-image">
			<img src={{%IMAGE%}} width="280" height="320">
		</div>
			<div class="product-details-info">
				<h1>{{%NAME%}}</h1>
				<h2 style="color: green;">${{%PRICE%}}</h2>
				<div class="product-desc-details">
					<h3">Product Details</h3>
					<p class="product-desc-p">{{%SIZE%}}</p>
					<p class="product-desc-p">{{%CAMERA%}}</p>
					<p class="product-desc-p"><b>Model Number</b>{{%MODELNO%}}</p>
					<p class="product-desc-p"><b>Model Name</b>{{%MODELNAME%}}</p>
					<p class="product-desc-p"><b>ROM</b>{{%ROM%}} GB</p>
				</div>
				<div class="product-details-desc">
					<h3>Product Description</h3>
					<p class="product-desc-p">
						{{%DESC%}}
					</p>
				</div>
			</div>
			<div>
				<a href="/products" class="btn-back">Back</a>
			</div>
		</div>
	</div>
 </div>
```

## Creating a Custom Module
- Each script file(.js file) in NodeJS is a seperate module.
- We have CORE modules and user defined modules.
- The modules which are provided by NodeJs are core modules.
  ## Eg
```
const http = require("http")
const fs = require("fs")
const url = require("url")
```
- The modules which were created by developer are user defined modules or custom modules.
- If we want to use this in other js files, first we need to import and use like below

```
//import our custom module to use that
const replaceHtml = require("./Modules/replacehtml")
```
  
## Example
## replacehtml.js
```
module.exports = function replaceHtml(template, product) {
    let output = template.replace("{{%IMAGE%}}", product.productImage)
    output = output.replace('{{%NAME%}}', product.name);
    output = output.replace('{{%MODELNAME%}}', product.modeName);
    output = output.replace('{{%MODELNO%}}', product.modelNumber);
    output = output.replace('{{%CAMERA%}}', product.camera);
    output = output.replace('{{%PRICE%}}', product.price);
    output = output.replace('{{%COLOR%}}', product.color);
    output = output.replace('{{%ID%}}', product.id);
    output = output.replace('{{%ROM%}}', product.ROM);
    output = output.replace('{{%DESC%}}', product.Description);
    return output;
}
```

## app.js

```
//STEP1 : Import the http package
const http = require("http")
const fs = require("fs")
const url = require("url")

//import our custom module to use that
const replaceHtml = require("./Modules/replacehtml")

//We want to send the html file as the response
//First we need to read the file using fs module
const html = fs.readFileSync('./template/index.html', 'utf-8')

//Below JSON parse method will convert JSOn objects into javascript objects
let products = JSON.parse(fs.readFileSync("./data/products.json", 'utf-8'));
let prodhtml = fs.readFileSync('./template/products.html', 'utf-8')
let prodDetailsHtml = fs.readFileSync('./template/product-details.html', 'utf-8')

const server = http.createServer((req, res) => {
    //parse the url to get the query parameters
    // let x = url.parse(req.url, true);
    // console.log(x)

    //in the below path is alias name for pathname
    let { query, pathname: path } = url.parse(req.url, true);
    if (path.toLocaleLowerCase() === '/products') {
        if (!query.id) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let prodhtmlArray = products.map((prod) => {
                return replaceHtml(prodhtml, prod)
            })
            res.end(html.replace('{{%CONTENT%}}', prodhtmlArray.join(',')))
        } else {
            //get the product from the array by id
            let product = products[query.id];
            let productInfo = replaceHtml(prodDetailsHtml, product);
            res.end(html.replace('{{%CONTENT%}}', productInfo))
            // res.end("You are In Product Page of ID = " + query.id)
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-header': 'Hello , World'
        });
        //this is the default route if user enters the wrong path or unmanaged path
        //If this is not mention our applications will hang
        res.end(html.replace('{{%CONTENT%}}', 'ERROR 404: PAGE NOT FOUND'))
    }
})
//STEP3 : START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started!')
})

```
