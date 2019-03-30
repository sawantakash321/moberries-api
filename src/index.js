// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});
const helmet = require('fastify-helmet');
const cors = require('cors');

// Require external modules
const mongoose = require('mongoose');

// DB Config
const db = require('./config/keys').mongoURI;

// Import Routes
const routes = require('./routes');

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Register Helmet
fastify.register(helmet);

// Use CORS
fastify.use(cors());

// Connect to DB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(5000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
