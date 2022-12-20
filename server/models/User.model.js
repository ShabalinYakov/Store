const { Schema, model } = require('mongoose');

const User = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    role: { type: String, ref: 'Role' }
  },
  {
    timestamps: true
  }
);

module.exports = model('User', User);
