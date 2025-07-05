const ExpirableProduct = require('./ExpirableProduct');

class ExpirableShippableProduct extends ExpirableProduct {
  constructor(name, price, quantity, expiryDate, weight) {
    super(name, price, quantity, expiryDate);
    this.weight = weight;
  }

  requiresShipping() {
    return true;
  }

  getWeight() {
    return this.weight;
  }
}

module.exports = ExpirableShippableProduct;
