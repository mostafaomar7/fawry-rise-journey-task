// Base class representing a general product
class product {
  constructor(name, price, quantity) {
    this.name = name;           // Name of the product
    this.price = price;         // Price per unit
    this.quantity = quantity;   // Available stock quantity

    // Validation to ensure product details are valid
    if (!name || price < 0 || quantity < 0) {
      throw new Error("Invalid product details.");
    }
  }

  // Returns false by default — overridden in ExpirableProduct
  isExpired() {
    return false;
  }

  // Returns false by default — overridden in shippable types
  requiresShipping() {
    return false;
  }

  // Returns the name of the product
  getName() {
    return this.name;
  }

  // Returns weight (0 by default) — overridden if product requires shipping
  getWeight() {
    return 0;
  }
}

module.exports = product;
