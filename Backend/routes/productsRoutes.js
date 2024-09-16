const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/add', async (req, res) => {
    const { productId, name, price, category } = req.body;
  
    try {
      // Check if the product already exists
      let product = await Product.findOne({ productId });
  
      if (product) {
        return res.status(400).json({ message: 'Product already exists' });
      }
  
      // Create new product
      product = new Product({
        productId,
        name,
        price,
        category,
      });
  
      await product.save();
      res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  });
  
  

module.exports = router;
