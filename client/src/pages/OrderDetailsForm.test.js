'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import OrderDetailsForm from './OrderDetailsForm';

// Snapshot test
it('matches the snapshot when there are no validation errors', () => {
  const values = {
    duration: '6',
    gigabytes: '20',
    upfrontPayment: 'true',
  };
  const errors = {
    errors: {
      duration: '',
      gigabytes: '',
      upfrontPayment: '',
    },
  };
  const handleChange = jest.fn();
  const tree = renderer
    .create(<OrderDetailsForm values={values} errors={{errors}} handleChange={handleChange} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
