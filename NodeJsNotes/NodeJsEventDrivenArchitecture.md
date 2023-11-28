## EventDriven Architecture
- In this we have three main palyers
- EventEmitter,EventListenet and Event handler.
- EventEnitter emits the event when something importent got happened in the app.
- When the event emits or raised  that was listened by event listener.
- That event listener calls the callbackfunction , which was handled the event. That callback function is called event handler.

  ![Screenshot 2023-11-28 181013](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/7f198449-0ac5-49ee-bb10-bcc9af7d4f27)

  ## Example App.js

```
 //create the request event to handle the routes instead of calling the create server method

const server = http.createServer();

server.on("request",(req,res)=>{
    //parse the url to get the query parameters
    // let x = url.parse(req.url, true);
    // console.log(x)

    //in the below path is alias name for pathname
    let { query, pathname: path } = url.parse(req.url, true);

    //The below req.url method will returns the path  after the domain eg: www.xyz.com/home it returns /home

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

## Emitting and Handling Custom events
- To work with this we need to export "events" package from NODEJS
- This package is core package of Nodejs.

## Example
## app.js
```
/* EMITTING and HANDLING CUSTOM EVENTS */
// the events package will gives us EventEmitter Class
const events = require("events")

// let myEmitter = new events.EventEmitter();

//instead of creating emitter calss directly we can use our custom module user.js
const user = require("./Modules/user")
let myEmitter = new user();

//using on method we can listen the event
myEmitter.on('userCreated', () => {
    console.log("Anew user got created")
})

myEmitter.on('userCreated', () => {
    console.log("Anew user is added in the DB")
})

//how can we pass the req or res objects for the custom events
myEmitter.on('userCreated', (id,name) => {
    console.log(`Anew user:${name} with ID : ${id} is added in the DB`)
})

//using the above emitter we can emit named events
// myEmitter.emit('userCreated');

myEmitter.emit('userCreated',101,'Nalini');
```

## user.js
```
const events = require('events')
module.exports = class extends events.EventEmitter {
    constructor() {
        super();
    }
}
```
