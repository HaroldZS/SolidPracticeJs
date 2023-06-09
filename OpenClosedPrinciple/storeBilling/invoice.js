class Invoice {
  constructor(products) {
    this.products = products;
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      if (product.type === "book") {
        total += product.price * 1.05; // Apply a 5% tax
      } else if (product.type === "electronic") {
        total += product.price * 1.2; // Apply a 20% tax
      } else if (product.type === "clothing") {
        total += product.price * 1.3; // Apply a 30% tax
      }
    }
    return total;
  }
}

module.exports = Invoice;