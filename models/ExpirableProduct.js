const Product = require('./product');

// Represents a product that has an expiry date (e.g., food, medicine)
class ExpirableProduct extends Product {
  constructor(name, price, quantity, expiryDate) {
    super(name, price, quantity);
    this.expiryDate = new Date(expiryDate); // Expiry date of the product
  }

  // Checks if the product is expired based on the current date
  isExpired() {
    return new Date() > this.expiryDate;
  }
}

module.exports = ExpirableProduct;
