const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./config/db')

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
 
// Models
const Product = require('./models/ProductModel');
const Discount = require('./models/DiscountModel');

// Routes
app.use('/api/products', require('./routes/productsRoutes'));
app.use('/api/discounts', require('./routes/discountsRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));

app.listen(port, async() => {
   try {
    await connection
    console.log(`Server is running on port: ${port}`);
   } catch (error) {
    console.log(error)
   }
});
