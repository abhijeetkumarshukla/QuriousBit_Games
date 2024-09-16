const express = require('express');
const router = express.Router();

// In-memory cart (for simplicity)
let cart = {};

// Add item to cart
router.post('/add', (req, res) => {
  const { productId, quantity } = req.body;
  if (!cart[productId]) {
    cart[productId] = { quantity: 0 };
  }
  cart[productId].quantity += quantity;
  res.json(cart);
});

// Remove item from cart
router.post('/remove', (req, res) => {
  const { productId, quantity } = req.body;
  if (cart[productId]) {
    if (quantity >= cart[productId].quantity) {
      delete cart[productId];
    } else {
      cart[productId].quantity -= quantity;
    }
  }
  res.json(cart);
});

// View cart
router.get('/', (req, res) => {
  res.json(cart);
});

module.exports = router;
