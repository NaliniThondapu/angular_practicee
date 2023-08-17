const http = require('http')
const fs = require('fs')
const url = require('url')
const html = fs.readFileSync('./Template/index.html', 'utf-8');
//JSON parse method will convert the JSON into java script object
const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
const productsListHtml = fs.readFileSync('./Template/products-list.html', 'utf-8');

//here we can iterate the products and replace with the values
//the map method returns the array of product htmls which has place holders replaced with json values

function replacehtml(template, product) {
  let output = template.replace('{{%IMAGE%}}', product.productImage);
  output = output.replace('{{%NAME%}}', product.name);
  output = output.replace('{{%MODELNAME%}}', product.modeName);
  output = output.replace('{{%MODELNO%}}', product.modelNumber);
  output = output.replace('{{%SIZE%}}', product.size);
  output = output.replace('{{%CAMERA%}}', product.camera);
  output = output.replace('{{%PRICE%}}', product.price);
  output = output.replace('{{%COLOR%}}', product.color);
  output = output.replace('{{%ID%}}', product.id);

  return output;

}


//STEP1: CREATE THE SERVER
const server = http.createServer((request, response) => {
  //the below parse method is used to parse the URL to extrac the query string values
  //if the second param is true then only it will parse
  //otherwise not
  //the first one "query" it has query params with key and value pairs
  //the second one pathname is, resource name like ex: http://localhost:8000/Products?id=100 here /products is the resource name.
  //here pathname:path path is the alias name for pathname
  let { query, pathname: path } = url.parse(request.url, true);

  // let path = request.url;
  if (path == '/' || path.toLocaleLowerCase() == '/home') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'my-header': 'Hello World'
    })
    response.end(html.replace('{{%CONTENT%}}', "You are in Homepage"))
  }
  else if (path.toLocaleLowerCase() == '/about') {
    response.writeHead(200)
    response.end(html.replace('{{%CONTENT%}}', 'Your are in About Page'))
  }
  else if (path.toLocaleLowerCase() == '/contact') {
    response.writeHead(200)
    response.end(html.replace('{{%CONTENT%}}', 'Your are in Contact Page'))
  } else if (path.toLocaleLowerCase() == '/products') {
    if (!query.id) {
      let producthtmlarray = products.map((prod) => {
        replacehtml(productsListHtml, prod);

      })
      let productResponseHtml = html.replace('{{%CONTENT%}}', producthtmlarray.join(','));
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.end(productResponseHtml);
    } else {
      //get the product by id
      let product = products[query.id]
      let productresphtml = replacehtml(productsListHtml,product)
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      let productResponseHtml = html.replace('{{%CONTENT%}}', productresphtml);
      response.end(productResponseHtml);
    }
  }
  //FALL BACK ROUTE -- the route which will be called when none of the other routes  can handled the URL which the User entered.
  else {
    response.writeHead(404)
    response.end(html.replace('{{%CONTENT%}}', 'ERROR 404 : PAGE NOT FOUND'))
  }

})
//START THE SERVER
server.listen(8000, '127.0.0.1', () => {
  console.log("Server has started")

})
