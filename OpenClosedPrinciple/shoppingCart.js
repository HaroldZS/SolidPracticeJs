class ShoppingCart {
  constructor() {
    this.products = [];
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

  // Método que calcula el descuento en base a la categoría
  calculateDiscount() {
    let discount = 0;
    for (let product of this.products) {
      if (product.getCategory() === "Electronics") {
        discount += 0.1 * product.getPrice(); // Aplica un descuento del 10% para productos de electrónica
      }
    }
    return discount;
  }

  // Método para obtener el precio total con descuento
  getTotalPriceWithDiscount() {
    const totalPrice = this.getTotalPrice();
    const discount = this.calculateDiscount();
    return totalPrice - discount;
  }
}

module.exports = ShoppingCart;