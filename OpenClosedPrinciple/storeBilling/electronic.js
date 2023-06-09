const Product = require("./product");

class Electronics extends Product {
  calculateTax() {
    return this.price * 1.2;
  }
}

module.exports = Electronics;
