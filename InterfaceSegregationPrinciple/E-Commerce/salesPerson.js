const IProduct = require("./iProduct");
const ISales = require("./iSales");

class Salesperson {
  constructor() { }

  /**
   * @param {string} product - Producto a agregar.
   */
  addProduct(product) {
    // Implementación de addProduct específica de Salesperson
    console.log(`Salesperson: Agregando producto ${product}`);
  }

  /**
   * @param {string} order - Pedido a procesar.
   */
  processOrder(order) {
    // Implementación de processOrder específica de Salesperson
    console.log(`Salesperson: Procesando pedido ${order}`);
  }
}

module.exports = Salesperson;