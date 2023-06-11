const IProduct = require("./iProduct");
const IManagement = require("./iManagement");

class Manager {
  constructor() { }

  /**
   * @param {string} product - Producto a actualizar.
   * @param {number} newPrice - Nuevo precio del producto.
   */
  updatePrice(product, newPrice) {
    // Implementación de updatePrice específica de Manager
    console.log(`Manager: Actualizando precio de ${product} a ${newPrice}`);
  }

  generateSalesReport() {
    // Implementación de generateSalesReport específica de Manager
    console.log('Manager: Generando informe de ventas');
  }
}

module.exports = Manager;