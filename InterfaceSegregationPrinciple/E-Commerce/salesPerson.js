const StoreOperations = require("./storeOperations");

class Salesperson {
  constructor() {
    // No se instancia directamente la interfaz StoreOperations
    // this.store = new StoreOperations();
  }

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

  // No se implementan los métodos no necesarios
  // /**
  //  * @param {string} product - Producto a actualizar.
  //  * @param {number} newPrice - Nuevo precio del producto.
  //  */
  // updatePrice(product, newPrice) {}

  // generateSalesReport() {}
}

module.exports = Salesperson;