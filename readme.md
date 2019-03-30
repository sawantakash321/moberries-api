# A blazing fast REST APIs with Node.js, MongoDB, Fastify and Swagger.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

## API

### CREATE

- Method: POST
- URL: http://127.0.0.1:5000/api/orders/
- Content-Type: application/json
- ex:
  {
  "firstName": "Akash",
  "lastName": "Sawant",
  "email": "sawantakash321",
  "streetAddr": "Gajanan Nivas, Matis",
  "creditNumber": 3454565689757892,
  "expDate": "1243-12-02T18:06:32.000Z",
  "cvv": 123,
  "duration": 4,
  "gigabytes": 3,
  "upfrontPayment": true,
  }

### READ

- INFO: Read all orders
- Method: GET
- URL: http://127.0.0.1:5000/api/orders/
- Content-Type: application/json

- INFO: Read single order by ID
- Method: GET
- URL: http://127.0.0.1:5000/api/orders/:id
- Content-Type: application/json

### UPDATE

- INFO: Update order by ID
- Method: PUT
- URL: http://127.0.0.1:5000/api/orders/:id
- Content-Type: application/json
- ex:
  {
  "firstName": "Akash",
  "lastName": "Sawant",
  "email": "sawantakash321",
  "streetAddr": "Gajanan Nivas",
  "creditNumber": 3454565689757892,
  "expDate": "1243-12-02T18:06:32.000Z",
  "cvv": 123,
  "duration": 12,
  "gigabytes": 20,
  "upfrontPayment": true,
  }

### DELETE

- INFO: Delete order by ID
- Method: DELETE
- URL: http://127.0.0.1:5000/api/orders/:id
- Content-Type: application/json
