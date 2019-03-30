const computePrice = (duration, gigabytes, upfrontPayment) => {
  const PERMONTH = 2;
  const discount = upfrontPayment === 'true' ? (gigabytes / duration) * 0.1 : 0;
  let price = (gigabytes / duration) * PERMONTH - discount;
  return price.toFixed(2);
};

module.exports = {
  computePrice,
};
