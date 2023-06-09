class Invoice {
  constructor(products) {
    this.products = products;
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      total += product.calculateTax();
    }
    return total;
  }
}

module.exports = Invoice;
