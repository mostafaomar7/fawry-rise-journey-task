const Product = require('./product');

// Represents a product that requires shipping (e.g., TV, furniture)
class ShippableProduct extends Product {
  constructor(name, price, quantity, weight) {
    super(name, price, quantity);
    this.weight = weight; // Weight used for shipping fee calculation
  }

  // Indicates that this product needs shipping
  requiresShipping() {
    return true;
  }

  // Returns the product's weight
  getWeight() {
    return this.weight;
  }
}

module.exports = ShippableProduct;
