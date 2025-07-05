Fawry E-commerce System 

This is a simple console-based e-commerce system built with JavaScript (Node.js) as part of the **Fawry Rise Journey Internship Challenge**.

The system simulates products, shopping cart functionality, and a checkout process via the command line.

============================

Features:

- Define different product types:
  - Expirable products (e.g., Cheese, Biscuits)
  - Shippable products with weight (e.g., Cheese, TV)
  - Non-expirable & non-shippable products (e.g., Mobile scratch cards)
- Shopping cart functionality:
  - Add products with valid quantity based on stock
  - Reject expired or out-of-stock products
- Checkout process:
  - Calculate subtotal
  - Calculate shipping fees if applicable
  - Validate customer balance
  - Print full checkout receipt
  - Send shippable items to the ShippingService
  - Reject checkout if cart is empty, product is expired, or balance is insufficient

============================

Project Structure:

fawry-ecommerce-js/
├── models/
│   ├── Product.js
│   ├── ExpirableProduct.js
│   ├── ShippableProduct.js
│   ├── ExpirableShippableProduct.js
│   ├── Customer.js
│   └── CartItem.js
│
├── services/
│   └── ShippingService.js
│
├── Cart.js
├── checkout.js
└── index.js

============================

How to Run:

1. Open the terminal and navigate to the project folder:

   cd fawry-ecommerce-js

2. Run the project using Node.js:

   node index.js

============================

Sample Output:

** Shipment notice **
2x Cheese 400g  
1x Biscuits 700g  
Total package weight: 1.10kg  

** Checkout receipt **
2x Cheese 200  
1x Biscuits 150  
1x Scratch Card 50  
----------------------  
Subtotal: 400  
Shipping: 30  
Amount: 430  
Customer balance: 4570  

============================

Assumptions:

- Fixed shipping fee of 30 EGP if there are shippable items.
- Expired products cannot be added or checked out.
- Checkout fails if balance is insufficient.
- Product weights are in grams, total weight is shown in kilograms.
- Only items with `getName()` and `getWeight()` are passed to the `ShippingService`.

============================

Tech Stack:

- JavaScript (ES6)
- Node.js
- No external libraries used

============================

Disclaimer:

This project was created for educational and evaluation purposes as part of the **Fawry Rise Journey Internship Challenge**.  
No real payment or shipping processes are performed.
