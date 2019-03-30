Implement a subscription order process for a cloud music provider with React stack.

Subscription order process has 4 steps:

1. Select subscription parameters:

- Duration: 3/6/12 Months (default: 12)
- Amount of gigabytes in a cloud: 3/5/10/20/30/50 (default: 5)
- Upfront payment: yes/no (default: no)

2. User data:

- Last name
- First name
- Email
- Street Address

3. Credit Card data:

- Card number
- Card expiration date
- Card security code

4. Confirmation:

- Terms agreement checkbox
- Confirm button

- All parameters are required
- A user should be able to change steps by clicking on Next or Back button.
- Every step needs to be completed in order to see the next one.
- On every step, a user should see an informative overview with selected subscription parameters including a computed price.
- Confirm button click handler should send the data to the backend

Price calculation:

- One gigabyte in cloud costs 2\$ per month.
- Upfront payment adds a 10% discount.

Backend:

- Design a model (PostgreSQL / MongoDb)
- Add a server side with an endpoint which can accept the collected data from the client and validate it.
- Implement also an update, delete and list endpoints to retrieve all orders.

Notes

- You can use Boostrap or any other UI Library of your choice for styling.
- You can use any backend Framework of your choice
- Design the Api as RESTful as possible
- No need to implement any authentication etc.
