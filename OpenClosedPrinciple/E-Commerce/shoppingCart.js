class ShoppingCart {
  constructor() {
    this.products = [];
    this.discountStrategy = null;
  }

  setDiscountStrategy(strategy) {
    this.discountStrategy = strategy;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let product of this.products) {
      totalPrice += product.getPrice();
    }
    return totalPrice;
  }

  getTotalPriceWithDiscount() {
    const totalPrice = this.getTotalPrice();
    if (this.discountStrategy) {
      const discount = this.discountStrategy.calculateDiscount(this.products);
      return totalPrice - discount;
    }
    return totalPrice;
  }
}

module.exports = ShoppingCart;