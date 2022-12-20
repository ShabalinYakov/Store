const { Schema, model } = require('mongoose');

const Basket = new Schema(
  {
    user_id: { type: String, ref: 'User' },
    product_id: { type: String, ref: 'Product' }
  },
  {
    timestamps: true
  }
);

module.exports = model('Basket', Basket);
