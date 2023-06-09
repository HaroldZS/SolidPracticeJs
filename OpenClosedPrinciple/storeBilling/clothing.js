const Product = require("./product");

class Clothing extends Product {
  calculateTax() {
    return this.price * 1.3;
  }
}

module.exports = Clothing;
