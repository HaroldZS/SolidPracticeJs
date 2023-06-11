const Salesperson = require("./salesPerson");
const Manager = require("./manager");
const Analyst = require("./analyst");

const salesperson = new Salesperson();
const manager = new Manager();
const analyst = new Analyst();

salesperson.addProduct('Product A');
salesperson.processOrder('Order 1');

manager.updatePrice('Product B', 29.99);
manager.generateSalesReport();

analyst.addProduct('Product C');
analyst.updatePrice('Product C', 14.99);
analyst.processOrder('Order 2');
analyst.generateSalesReport();