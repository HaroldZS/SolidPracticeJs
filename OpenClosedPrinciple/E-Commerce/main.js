const Product = require('./product.js');
const ShoppingCart = require('./shoppingCart.js');
// const ElectronicsDiscountStrategy = require('./electronicsDiscountStrategy.js');
const ClothingDiscountStrategy = require("./clothingDiscountStrategy.js");


const product1 = new Product('iPhone', 1000, 'Electronics');
const product2 = new Product('Shirt', 20, 'Clothing');
const product3 = new Product('Headphones', 150, 'Electronics');

// Creamos un carrito de compras
const cart = new ShoppingCart();

// Agregamos los productos al carrito
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

// Configuramos la estrategia de descuento para electrónica
// cart.setDiscountStrategy(new ElectronicsDiscountStrategy());
cart.setDiscountStrategy(new ClothingDiscountStrategy());

// Obtenemos el precio total sin descuento
console.log('Total Price: $', cart.getTotalPrice());

// Obtenemos el precio total con descuento
console.log('Total Price with Discount: $', cart.getTotalPriceWithDiscount());