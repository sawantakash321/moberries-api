// Import our Controllers
const ordersController = require('../controllers/ordersController');

// Import Swagger documentation
// const documentation = require('./documentation/ordersApi')

const routes = [
  {
    method: 'GET',
    url: '/api/orders',
    handler: ordersController.getOrders,
  },
  {
    method: 'GET',
    url: '/api/orders/:id',
    handler: ordersController.getSingleOrder,
  },
  {
    method: 'POST',
    url: '/api/orders',
    handler: ordersController.addOrder,
    // schema: documentation.addOrdersSchema
  },
  {
    method: 'PUT',
    url: '/api/orders/:id',
    handler: ordersController.updateOrder,
  },
  {
    method: 'DELETE',
    url: '/api/orders/:id',
    handler: ordersController.deleteOrder,
  },
];

module.exports = routes;
