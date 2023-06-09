const Product = require("./product");

class Book extends Product {
  calculateTax() {
    return this.price * 1.05;
  }
}

module.exports = Book;
