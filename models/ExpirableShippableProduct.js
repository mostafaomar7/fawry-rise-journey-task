const ExpirableProduct = require('./ExpirableProduct');

// Represents a product that is both expirable and requires shipping (e.g., cheese, biscuits)
class ExpirableShippableProduct extends ExpirableProduct {
  constructor(name, price, quantity, expiryDate, weight) {
    super(name, price, quantity, expiryDate);
    this.weight = weight; // Weight used for calculating shipping
  }

  // Indicates that this product requires shipping
  requiresShipping() {
    return true;
  }

  // Returns the weight of the product
  getWeight() {
    return this.weight;
  }
}

module.exports = ExpirableShippableProduct;
