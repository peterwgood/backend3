const express = require('express');
const app = express();
const url = require('url')
const products = require('product-manager')
const bodyParser = require('body-parser');
app.listen(3000)
app.use(bodyParser.json());

products.createProducts()
app.get('/products', function (req, res) {
  res.json(products.getproducts())
})


app.post('/products/products.json', function (req, res) {
  console.log(req.body)
  const data = req.body;
  const product = new products.Product(data.name, data.price, data.description, data.qty, data.product_id);
  products.addproduct(product);
  
})


app.delete('/products/:product_id', function (req, res) {
  let successMessage = products.deleteProduct(req.params.product_id)
  if (successMessage > 0) {

  } else if (successMessage < 0) {
    res.status(404).send("Product not found");
  }
 
});


console.log("Listening on port 3000")
