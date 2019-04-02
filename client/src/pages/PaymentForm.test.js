'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import PaymentForm from './PaymentForm';

// Snapshot test
it('matches the snapshot when there are no validation errors', () => {
  const values = {
    creditNumber: '4565456543764357',
    cvv: '765',
    expDate: '012022',
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
