const CartItem = require('./models/CartItem');

class Cart {
  constructor() {
    this.items = [];
  }

  add(product, quantity) {
    if (quantity > product.quantity) {
      throw new Error("Not enough product quantity available");
    }

    this.items.push(new CartItem(product, quantity));
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = Cart;
