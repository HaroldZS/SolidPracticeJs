const StoreOperations = require("./storeOperations");

class Analyst {
  constructor() {
    // No se instancia directamente la interfaz StoreOperations
    // this.store = new StoreOperations();
  }

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

  /**
   * Genera un informe de ventas.
   */
  generateSalesReport() {
    // Implementación de generateSalesReport específica de Analyst
    console.log('Analyst: Generando informe de ventas');
  }
}

module.exports = Analyst;
