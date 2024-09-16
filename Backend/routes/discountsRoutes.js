const express = require('express');
const router = express.Router();
const Discount = require('../models/DiscountModel');

// Get all discounts
router.get('/', async (req, res) => {
  const discounts = await Discount.find();
  res.json(discounts);
});

module.exports = router;
