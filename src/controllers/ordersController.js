// External Dependancies
const boom = require('boom');

// Get Data Models
const Orders = require('../models/Orders');

// Load Validation
const validateInput = require('../validation/validator');

// Get all orders
exports.getOrders = async (req, reply) => {
  try {
    const orders = await Orders.find();
    return orders;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single order by ID
exports.getSingleOrder = async (req, reply) => {
  try {
    const id = req.params.id;
    const order = await Orders.findById(id);
    return order;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new order
exports.addOrder = async (req, reply) => {
  const {errors, isValid} = validateInput(req.body);
  // Check Validation
  if (!isValid) {
    // Return any errors with 400 code
    reply.code(400);
    reply.header('Content-Type', 'application/json');
    reply.send(errors);
  }

  try {
    const order = new Orders(req.body);
    return order.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing order
exports.updateOrder = async (req, reply) => {
  try {
    const {errors, isValid} = validateInput(req.body);

    // Check Validation
    if (!isValid) {
      //  Return any errors with 400 code
      reply.code(400);
      reply.header('Content-Type', 'application/json');
      reply.send(errors);
    }

    const id = req.params.id;
    const order = req.body;
    const {...updateData} = order;
    const update = await Orders.findByIdAndUpdate(id, updateData, {new: true});
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a order
exports.deleteOrder = async (req, reply) => {
  try {
    const id = req.params.id;
    const order = await Orders.findByIdAndRemove(id);
    return order;
  } catch (err) {
    throw boom.boomify(err);
  }
};
