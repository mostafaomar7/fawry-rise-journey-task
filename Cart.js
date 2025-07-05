const CartItem = require('./models/CartItem');

class Cart {
  constructor() {
    this.items = []; // Array to hold cart items
  }

  // Add product with quantity to the cart
  add(product, quantity) {
    if (quantity > product.quantity) {
      throw new Error(`Only ${product.quantity} items of ${product.name} in stock.`);
    }
    if (product.isExpired()) {
      throw new Error(`Cannot add ${product.name}, it is expired.`);
    }

    this.items.push(new CartItem(product, quantity));
  }

  // Check if cart is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = Cart;
