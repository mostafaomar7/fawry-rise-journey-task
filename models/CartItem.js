// Represents an item in the shopping cart
class CartItem {
  constructor(product, quantity) {
    this.product = product;     // The product being added
    this.quantity = quantity;   // Quantity of the product
  }
}

module.exports = CartItem;
