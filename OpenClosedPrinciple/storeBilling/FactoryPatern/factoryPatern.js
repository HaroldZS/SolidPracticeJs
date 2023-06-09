class Product {
    constructor(price) {
      this.price = price;
    }
  
    calculateTax() {
      throw new Error('calculateTax() method must be implemented by subclasses');
    }
  }
  
  class Book extends Product {
    calculateTax() {
      return this.price * 1.05;
    }
  }
  
  class Electronics extends Product {
    calculateTax() {
      return this.price * 1.2;
    }
  }
  
  class Clothing extends Product {
    calculateTax() {
      return this.price * 1.3;
    }
  }
  
  class ProductFactory {
    static createProduct(category, price) {
      if (category === 'book') {
        return new Book(price);
      } else if (category === 'electronic') {
        return new Electronics(price);
      } else if (category === 'clothing') {
        return new Clothing(price);
      } else {
        throw new Error('Invalid product category');
      }
    }
  }
  
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
  
  // Ejemplo de uso
  const products = [
    ProductFactory.createProduct('book', 10),
    ProductFactory.createProduct('electronic', 50),
    ProductFactory.createProduct('clothing', 30)
  ];
  
  const invoice = new Invoice(products);
  const total = invoice.calculateTotal();
  console.log('Total invoice amount:', total);