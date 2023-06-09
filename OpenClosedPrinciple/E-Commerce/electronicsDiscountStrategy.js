const DiscountStrategy = require('./discountStrategy');

class ElectronicsDiscountStrategy extends DiscountStrategy {
  calculateDiscount(products) {
    let discount = 0;
    for (let product of products) {
      if (product.getCategory() === "Electronics") {
        discount += 0.1 * product.getPrice();
      }
    }
    return discount;
  }
}

module.exports = ElectronicsDiscountStrategy;
