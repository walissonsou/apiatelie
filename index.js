const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const produtos = require("./src/products/produtos.json")

app.get('/products', (req, res) => {
  return res.json(produtos)
})

app.listen(port, () => {
  console.log("Ouvindo a porta do heroku")
})
