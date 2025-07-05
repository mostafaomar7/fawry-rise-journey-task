const ShippingService = require('./services/ShippingService');

function checkout(customer, cart) {
  if (cart.isEmpty()) {
    throw new Error("Cart is empty");
  }

  let subtotal = 0;
  let shippableItems = [];

  for (const item of cart.items) {
    if (item.product.isExpired()) throw new Error(`${item.product.name} is expired`);
    if (item.quantity > item.product.quantity) throw new Error(`${item.product.name} is out of stock`);
    
    subtotal += item.product.price * item.quantity;

    if (item.product.requiresShipping()) {
      shippableItems.push(item);
    }
  }

  const shippingFee = shippableItems.length > 0 ? 30 : 0;
  const total = subtotal + shippingFee;

  customer.deduct(total);

  for (const item of cart.items) {
    item.product.quantity -= item.quantity;
  }

  if (shippableItems.length > 0) {
    ShippingService.ship(shippableItems);
  }

  console.log("** Checkout receipt **");
  for (const item of cart.items) {
    console.log(`${item.quantity}x ${item.product.name} ${item.product.price * item.quantity}`);
  }
  console.log("----------------------");
  console.log(`Subtotal: ${subtotal}`);
  console.log(`Shipping: ${shippingFee}`);
  console.log(`Amount: ${total}`);
  console.log(`Customer balance: ${customer.balance}`);
}

module.exports = checkout;
