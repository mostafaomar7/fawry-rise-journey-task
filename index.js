// Import required models and modules
const ExpirableShippableProduct = require('./models/ExpirableShippableProduct');
const ShippableProduct = require('./models/ShippableProduct');
const Product = require('./models/product');
const Customer = require('./models/Customer');
const Cart = require('./Cart');
const checkout = require('./checkout');

// Create different products with their properties
const cheese = new ExpirableShippableProduct("Cheese", 100, 5, "2025-08-01", 200);
const biscuits = new ExpirableShippableProduct("Biscuits", 150, 3, "2025-08-01", 700);
const tv = new ShippableProduct("TV", 3000, 2, 10000);
const scratchCard = new Product("Scratch Card", 50, 10);

// Create a customer with a balance
const customer = new Customer("Ahmed", 5000);

// Create an empty shopping cart
const cart = new Cart();

// Add products to the cart with quantities
cart.add(cheese, 2);
cart.add(biscuits, 1);
cart.add(scratchCard, 1);

// Perform checkout for the customer with the cart items
checkout(customer, cart);
