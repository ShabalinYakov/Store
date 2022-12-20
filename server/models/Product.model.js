const { Schema, model } = require('mongoose');

const Product = new Schema(
  {
    name: String,
    category: { type: String, required: true, ref: 'Category' },
    price: Number,
    image: String,
    description: String
  },
  {
    timestamps: true
  }
);

module.exports = model('Product', Product);
