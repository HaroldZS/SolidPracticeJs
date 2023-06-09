const Product = require("./product");
const Invoice = require("./invoice");

const productos = [
  new Product("book", 10),
  new Product("electronic", 50),
  new Product("clothing", 30),
];

const invoice = new Invoice(productos);
const total = invoice.calculateTotal();
console.log("Total invoice:", total);
