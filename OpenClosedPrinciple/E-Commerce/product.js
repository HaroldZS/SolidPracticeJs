class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getCategory() {
    return this.category;
  }
}

module.exports = Product;