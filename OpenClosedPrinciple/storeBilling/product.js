class Product {
  constructor(price) {
    this.price = price;
  }

  calculateTax() {
    throw new Error("calculateTax() method must be implemented by subclasses");
  }
}

module.exports = Product;
