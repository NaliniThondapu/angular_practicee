const http = require('http')
// const fs = require('fs')
// const url = require('url')
// const html = fs.readFileSync('./Template/index.html', 'utf-8');
// //JSON parse method will convert the JSON into java script object
// const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
// const productsListHtml = fs.readFileSync('./Template/products-list.html', 'utf-8');

// //here we can iterate the products and replace with the values
// //the map method returns the array of product htmls which has place holders replaced with json values
// let producthtmlarray = products.map((prod) => {
//   let output = productsListHtml.replace('{{%IMAGE%}}', prod.productImage);
//   output = output.replace('{{%NAME%}}', prod.name);
//   output = output.replace('{{%MODELNAME%}}', prod.modeName);
//   output = output.replace('{{%MODELNO%}}', prod.modelNumber);
//   output = output.replace('{{%SIZE%}}', prod.size);
//   output = output.replace('{{%CAMERA%}}', prod.camera);
//   output = output.replace('{{%PRICE%}}', prod.price);
//   output = output.replace('{{%COLOR%}}', prod.color);
//   output = output.replace('{{%ID%}}', prod.id);

//   return output;
// })


// //STEP1: CREATE THE SERVER
// const server = http.createServer((request, response) => {
//   //the below parse method is used to parse the URL to extrac the query string values
//   //if the second param is true then only it will parse
//   //otherwise not
//   //the first one "query" it has query params with key and value pairs
//   //the second one pathname is, resource name like ex: http://localhost:8000/Products?id=100 here /products is the resource name.
//   //here pathname:path path is the alias name for pathname
//   let { query, pathname: path } = url.parse(request.url, true);

//   // let path = request.url;
//   if (path == '/' || path.toLocaleLowerCase() == '/home') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'Hello World'
//     })
//     response.end(html.replace('{{%CONTENT%}}', "You are in Homepage"))
//   }
//   else if (path.toLocaleLowerCase() == '/about') {
//     response.writeHead(200)
//     response.end(html.replace('{{%CONTENT%}}', 'Your are in About Page'))
//   }
//   else if (path.toLocaleLowerCase() == '/contact') {
//     response.writeHead(200)
//     response.end(html.replace('{{%CONTENT%}}', 'Your are in Contact Page'))
//   } else if (path.toLocaleLowerCase() == '/products') {
//     if (!query.id) {
//       //here we are joining array of htmls as one
//       let productResponseHtml = html.replace('{{%CONTENT%}}', producthtmlarray.join(','));
//       response.writeHead(200, {
//         'Content-Type': 'text/html'
//       });
//       response.end(productResponseHtml);
//     } else {
//       response.end("This is the produc with ID:" + query.id)
//     }
//   }
//   //FALL BACK ROUTE -- the route which will be called when none of the other routes  can handled the URL which the User entered.
//   else {
//     response.writeHead(404)
//     response.end(html.replace('{{%CONTENT%}}', 'ERROR 404 : PAGE NOT FOUND'))
//   }

// })

const fs = require('fs')
const server = http.createServer()
//START THE SERVER
server.listen(8000, '127.0.0.1', () => {
  console.log("Server has started")

})

//because of this approach the NODE will read the entire fiel and keep that in memory.It causes the performence issue.
// server.on('request', (req, res) => {
//   //we are reading the large file data and send the same in the response
//   fs.readFile('./files/largefile.txt', (error, data) => {
//     if (error) {
//       res.end("Some thing went wrong")
//       return;
//     }
//     res.end(data);
//   })

// })

// //to avoid the above problem we need to use streams
// server.on('request', (req, res) => {
//   let rs = fs.createReadStream('./files/largefile.txt');

//   rs.on('data', (chunk) => {
//     res.write(chunk)
//   })
//   //instead of calling end method we can raise an event
//   res.on('end',()=>{
//     res.end();
//   })

//   rs.on('error', (error) => {
//     res.end(error.message);
//   })

// })


//Using pipe method
// server.on('request', (req, res) => {
//     let rs = fs.createReadStream('./files/largefile.txt');

//     //for pipe we need pass the writable stream
//     //Here the response is the writable stream
//     //This pipe method allows us pipe the output of a readable stream write into the input of a writable stream
//     //This method is avalible on only readable stream we can not apply on the writable stream.
//     rs.pipe(res)
// })
