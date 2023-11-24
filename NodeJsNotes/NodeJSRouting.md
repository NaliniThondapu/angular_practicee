## What is Routing
- It defines the way in which the client requests are handled by the application end points.
- We have different types of URLS to communicate with server to serve the response to the client.
- FileBasedURL (www.xyz.com/index.html)
- ResouceBasedURL(www.xyz.com/Home) ,In this "Home" is resouce in this we map a request URL to the request handler.That request handler handles the request ad send back the response.
- We can make our application to respond to didifferent urls with different responses using routing.
- Routing basically means implementing different actions for different URLS.
- These action can be implemented in different ays like creating the function etc.
- RouteParameter (www.xyz.com/Product/101)
- Query String(www.xyz.com/books?id=101&author=xyz)

  ## Send Text responses for different routes
  
```
 //STEP1 : Import the http package
const http = require("http")
 //STEP2 : CREATE THE SERVER
  const server = http.createServer((req, res) => {
    //The below req.url method will returns the path  after the domain eg: www.xyz.com/home it returns /home
    let path = req.url;
    if (path == '/' || path.toLocaleLowerCase() == '/home') {
        res.end("You are in the home page")
    } else if (path.toLocaleLowerCase() == '/about') {
        res.end("You are in the about page")
    } else if(path.toLocaleLowerCase() == '/contact'){
        res.end("You are in the contact page")
    }else{
        //this is the default route if user enters the wrong path or unmanaged path
        //If this is not mention our applications will hang
        res.end("Error 404 :Page Not Found")
    }
})

//STEP3 : START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started!')
})
```

## Send Html Responses for Different Routes

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
 //STEP2 : CREATE THE SERVER
  const server = http.createServer((req, res) => {
    //The below req.url method will returns the path  after the domain eg: www.xyz.com/home it returns /home
    let path = req.url;
    if (path == '/' || path.toLocaleLowerCase() == '/home') {
        //here we are replacing the placeholder of HTMl with required information
        res.end(html.replace('{{%CONTENT%}}','You are in Home Page'))
    } else if (path.toLocaleLowerCase() == '/about') {
        res.end(html.replace('{{%CONTENT%}}','You are in About Page'))
    } else if(path.toLocaleLowerCase() == '/contact'){
        res.end(html.replace('{{%CONTENT%}}','You are in contact Page'))
    }else{
        //this is the default route if user enters the wrong path or unmanaged path
        //If this is not mention our applications will hang
        res.end(html.replace('{{%CONTENT%}}','ERROR 404: PAGE NOT FOUND'))
    }
})

//STEP3 : START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started!')
})
```

## Setting Headers For Response
- The headers of response contains the some additional information like type of response, time , date etc.
```
 const server = http.createServer((req, res) => {
    //The below req.url method will returns the path  after the domain eg: www.xyz.com/home it returns /home
    let path = req.url;
    if (path == '/' || path.toLocaleLowerCase() == '/home') {
        //set the staus code in the response as a header
        res.writeHead(200,{
            'Content-Type' :'text/html',
            'my-header': 'Hello , World'
        });
        //here we are replacing the placeholder of HTMl with required information
        res.end(html.replace('{{%CONTENT%}}','You are in Home Page'))
    } else if (path.toLocaleLowerCase() == '/about') {
        res.writeHead(200,{
            'Content-Type' :'text/html',
            'my-header': 'Hello , World'
        });
        res.end(html.replace('{{%CONTENT%}}','You are in About Page'))
    } else if(path.toLocaleLowerCase() == '/contact'){
        res.writeHead(200,{
            'Content-Type' :'text/html',
            'my-header': 'Hello , World'
        });
        res.end(html.replace('{{%CONTENT%}}','You are in contact Page'))
    }else{
        res.writeHead(404,{
            'Content-Type' :'text/html',
            'my-header': 'Hello , World'
        });
        //this is the default route if user enters the wrong path or unmanaged path
        //If this is not mention our applications will hang
        res.end(html.replace('{{%CONTENT%}}','ERROR 404: PAGE NOT FOUND'))
    }
})
//STEP3 : START THE SERVER
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started!')
})
```


