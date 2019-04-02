'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Review from './Review';

// Snapshot test
it('matches the snapshot when there are no validation errors', () => {
  const values = {
    firstName: 'Akash',
    lastName: 'Sawant',
    email: 'sawantakash321@gmail.com',
    streetAddr: 'MLK street, behind cathom mart, Mumbai',
    duration: '6',
    gigabytes: '20',
    upfrontPayment: 'true',
    computedPrice: 6.33,
    creditNumber: '4565456543764357',
    expDate: '012022',
    cvv: '765',
    checked: true,
  };
  const errors = {
    errors: {
      checked: '',
    },
    isValid: true,
  };
  const handleChange = jest.fn();
  const tree = renderer.create(<Review values={values} errors={{errors}} handleChange={handleChange} />).toJSON();
  expect(tree).toMatchSnapshot();
});
