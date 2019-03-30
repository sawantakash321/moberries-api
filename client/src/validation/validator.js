const Validator = require('validator');
const isEmpty = require('./is-empty');

const validateUserDetailsInput = data => {
  let errors = {};

  let firstName = data.firstName.toString();
  let lastName = data.lastName.toString();
  let email = data.email.toString();
  let streetAddr = data.streetAddr.toString();

  firstName = !isEmpty(firstName) ? firstName : '';
  lastName = !isEmpty(lastName) ? lastName : '';
  email = !isEmpty(email) ? email : '';
  streetAddr = !isEmpty(streetAddr) ? streetAddr : '';

  // First Name Field Validation
  if (!Validator.isLength(firstName, {min: 2, max: 30})) {
    errors.firstName = 'First name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(firstName)) {
    errors.firstName = 'First name field is required';
  }

  // Last Name Field Validation
  if (!Validator.isLength(lastName, {min: 2, max: 30})) {
    errors.lastName = 'Last name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(lastName)) {
    errors.lastName = 'Last name field is required';
  }

  // Email Field Validation

  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }

  // Street Address Field Validation
  if (!Validator.isLength(streetAddr, {min: 10, max: 300})) {
    errors.streetAddr = 'Street address must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(streetAddr)) {
    errors.streetAddr = 'Street address field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

const validatePaymentDetailsInput = data => {
  let errors = {};

  let creditNumber = data.creditNumber.toString();
  let expDate = data.expDate.toString();
  let cvv = data.cvv.toString();

  creditNumber = !isEmpty(creditNumber) ? creditNumber : '';
  expDate = !isEmpty(expDate) ? expDate : '';
  cvv = !isEmpty(cvv) ? cvv : '';

  // Credit Card Number Field Validation
  if (Validator.isCreditCard(creditNumber)) {
    errors.creditNumber = 'Credit card number invalid';
  }
  if (creditNumber.length !== 16) {
    errors.creditNumber = 'Please enter 16 digit credit card number';
  }

  if (!Validator.isNumeric(creditNumber)) {
    errors.creditNumber = 'Credit Card number field should be Numeric';
  }
  if (Validator.isEmpty(creditNumber)) {
    errors.creditNumber = 'Credit Card field is required';
  }

  // Credit expire date Field Validation

  if (!Validator.isNumeric(expDate)) {
    errors.expDate = 'Credit Card number field should be Numeric';
  }

  if (expDate.length !== 6) {
    errors.expDate = 'Please enter 2 digits for Month and 4 digits for Year';
  }

  if (Validator.isEmpty(expDate)) {
    errors.expDate = 'Credit Card expire date field is required';
  }

  // Credit Card security code Field Validation

  if (cvv.length !== 3) {
    errors.cvv = 'Please enter 3 digit CVV Number from the back of your card';
  }

  if (!Validator.isNumeric(cvv)) {
    errors.cvv = 'Credit Card security code field should be Numeric';
  }

  if (Validator.isEmpty(cvv)) {
    errors.cvv = 'Credit Card security code field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

const validateOrderDetailsInput = data => {
  let errors = {};

  let duration = data.duration.toString();
  let gigabytes = data.gigabytes.toString();
  let upfrontPayment = data.upfrontPayment.toString();

  duration = !isEmpty(duration) ? duration : '';
  gigabytes = !isEmpty(gigabytes) ? gigabytes : '';
  upfrontPayment = !isEmpty(upfrontPayment) ? upfrontPayment : '';

  // Subscription Duration Field Validation
  if (!Validator.isNumeric(duration)) {
    errors.duration = 'Subscription duration field should be Numeric';
  }

  if (Validator.isEmpty(duration)) {
    errors.duration = 'Subscription duration field is required';
  }

  // Gigabytes Field Validation
  if (!Validator.isNumeric(gigabytes)) {
    errors.gigabytes = 'Gigabytes field should be Numeric';
  }

  if (Validator.isEmpty(gigabytes)) {
    errors.gigabytes = 'Gigabytes field is required';
  }

  // Upfront payment Field Validation
  if (!Validator.isBoolean(upfrontPayment)) {
    errors.upfrontPayment = 'Upfront payment field should be true/false';
  }

  if (Validator.isEmpty(upfrontPayment)) {
    errors.upfrontPayment = 'Upfront payment field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

const validateReviewInput = data => {
  let errors = {};

  let checked = data.checked.toString();

  // Terms Checkbox Field Validation
  if (!Validator.isBoolean(checked)) {
    errors.checked = 'Terms Checkbox field should be true/false';
  }

  if (checked === 'false') {
    errors.checked = 'You must agree to the terms and conditions before ordering!';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = {
  validateOrderDetailsInput,
  validatePaymentDetailsInput,
  validateUserDetailsInput,
  validateReviewInput,
};
