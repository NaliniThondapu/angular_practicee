## Middleware
- By default expressJS does not add the request body to the request object.
- We need to use below middleware to add the requestBody to request object.

```
// get the middleware to pass the request body
//this "express.json()" middleware will add the request body to the request object
//A middleware is just a function that can modify the incoming request data 
app.use(express.json())
```
- In express JSON , the client sends the request to the express APP and the app will send the response back to client.
- This is called request and response cycle.
- In order to use middlewar we need to use "use" method.
```
app.use(express.json())
```

![Screenshot 2023-12-07 212432](https://github.com/NaliniThondapu/angular_practicee/assets/36626668/fd03a70c-8d45-493a-9c27-e97f969d30b2)

## Create the custom middleware
- For every middleware need to pass three arguments
- 
