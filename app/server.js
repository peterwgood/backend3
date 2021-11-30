const http = require('http');
const Product = require('product-manager')

http.createServer(function (req, res) {
  if (req.url == "/index.html" && req.method == "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.write("Success");
    res.end();
  } else if (req.url == "/products.html" && req.method == "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.write(JSON.stringify(Product.products()));
    res.end();
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      error: "Page not found"
    }));
  }
}).listen(3000);


console.log('Listening on 3000')