const StoreOperations = require("./storeOperations");

class Manager {
  constructor() {
    // No se instancia directamente la interfaz StoreOperations
    // this.store = new StoreOperations();
  }

  /**
   * @param {string} product - Producto a actualizar.
   * @param {number} newPrice - Nuevo precio del producto.
   */
  updatePrice(product, newPrice) {
    // Implementación de updatePrice específica de Manager
    console.log(`Manager: Actualizando precio de ${product} a ${newPrice}`);
  }

  /**
   * Genera un informe de ventas.
   */
  generateSalesReport() {
    // Implementación de generateSalesReport específica de Manager
    console.log('Manager: Generando informe de ventas');
  }

  // No se implementan los métodos no necesarios
  // addProduct(product) {}
  // processOrder(order) {}
}

module.exports = Manager;