const {computePrice} = require('./computePrice');
test('computes duration=6, gigabyes=20 and upfrontPayment=true to equal $6.33', () => {
  expect(computePrice(6, 20, true)).toBe('6.67');
});
