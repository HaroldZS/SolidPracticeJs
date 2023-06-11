const IProduct = require("./iProduct");
const IManagement = require("./iManagement");
const ISales = require("./iSales");

class Analyst {
  constructor() { }

  /**
   * @param {string} product - Producto a agregar.
   */
  addProduct(product) {
    // Implementación de addProduct específica de Analyst
    console.log(`Analyst: Agregando producto ${product}`);
  }

  /**
   * @param {string} product - Producto a actualizar.
   * @param {number} newPrice - Nuevo precio del producto.
   */
  updatePrice(product, newPrice) {
    // Implementación de updatePrice específica de Analyst
    console.log(`Analyst: Actualizando precio de ${product} a ${newPrice}`);
  }

  /**
   * @param {string} order - Pedido a procesar.
   */
  processOrder(order) {
    // Implementación de processOrder específica de Analyst
    console.log(`Analyst: Procesando pedido ${order}`);
  }

  generateSalesReport() {
    // Implementación de generateSalesReport específica de Analyst
    console.log('Analyst: Generando informe de ventas');
  }
}

module.exports = Analyst;
