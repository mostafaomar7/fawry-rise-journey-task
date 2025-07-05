const Product = require('./product');

class ShippableProduct extends Product {
  constructor(name, price, quantity, weight) {
    super(name, price, quantity);
    this.weight = weight;
  }

  requiresShipping() {
    return true;
  }

  getWeight() {
    return this.weight;
  }
}

module.exports = ShippableProduct;
