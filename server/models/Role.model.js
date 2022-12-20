const { Schema, model } = require('mongoose');

const Role = new Schema(
  {
    name: { type: String, default: 'user' }
  },
  {
    timestamps: true
  }
);

module.exports = model('Role', Role);
