// Represents a customer using the e-commerce system
class Customer {
  constructor(name, balance) {
    this.name = name;         // Customer's name
    this.balance = balance;   // Customer's current balance (wallet)
  }

  // Deducts an amount from the customer's balance if sufficient funds are available
  deduct(amount) {
    if (this.balance < amount) throw new Error("Insufficient balance");
    this.balance -= amount;
  }
}

module.exports = Customer;
