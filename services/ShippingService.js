class ShippingService {
  static ship(items) {
    console.log("** Shipment notice **");
    let totalWeight = 0;
    for (const item of items) {
      console.log(`${item.quantity}x ${item.product.getName()} ${item.product.getWeight() * item.quantity}g`);
      totalWeight += item.product.getWeight() * item.quantity;
    }
    console.log(`Total package weight: ${(totalWeight / 1000).toFixed(2)}kg\n`);
  }
}

module.exports = ShippingService;
