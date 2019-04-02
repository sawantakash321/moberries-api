'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import PaymentForm from './PaymentForm';

// Snapshot test
it('matches the snapshot', () => {
  const values = {
    creditNumber: 32123547361236,
    cvv: 234,
    expDate: 234223,
  };
  const errors = {
    errors: {
      creditNumber: '',
      cvv: '',
      expDate: '',
    },
  };
  const handleChange = jest.fn();
  const tree = renderer.create(<PaymentForm values={values} errors={{errors}} handleChange={handleChange} />).toJSON();
  expect(tree).toMatchSnapshot();
});
