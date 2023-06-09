const Invoice = require("./invoice");
const Book = require("./book");
const Electronics = require("./electronic");
const Clothing = require("./clothing");

const productos = [new Book(10), new Electronics(50), new Clothing(30)];

const invoice = new Invoice(productos);
const total = invoice.calculateTotal();
console.log("Total invoice:", total);
