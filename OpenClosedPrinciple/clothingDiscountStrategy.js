const DiscountStrategy = require('./DiscountStrategy');

class ClothingDiscountStrategy extends DiscountStrategy {
    calculateDiscount(products) {
      let discount = 0;
      for (let product of products) {
        if (product.getCategory() === 'Clothing') {
          discount += 0.2 * product.getPrice();
        }
      }
      return discount;
    }
}

module.exports = ClothingDiscountStrategy;