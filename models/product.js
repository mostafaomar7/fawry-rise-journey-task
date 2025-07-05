class product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  isExpired() {
    return false;
  }

  requiresShipping() {
    return false;
  }

  getName() {
    return this.name;
  }

  getWeight() {
    return 0;
  }
}

module.exports = product;
