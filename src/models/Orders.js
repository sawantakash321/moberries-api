// External Dependancies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrdersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  streetAddr: {
    type: String,
    required: true,
  },
  creditNumber: {
    type: Number,
    required: true,
  },
  expDate: {
    type: Date,
    required: true,
  },
  cvv: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  gigabytes: {
    type: Number,
    required: true,
  },
  upfrontPayment: {
    type: Boolean,
    required: true,
  },
});

module.exports = Orders = mongoose.model('orders', OrdersSchema);
