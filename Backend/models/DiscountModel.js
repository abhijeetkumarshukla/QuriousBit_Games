const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  name: String,
  type: String,  
  value: Number
});

module.exports = mongoose.model('Discount', discountSchema);
