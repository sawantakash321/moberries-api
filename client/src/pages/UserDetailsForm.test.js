'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import UserDetailsForm from './UserDetailsForm';

// Snapshot test
it('matches the snapshot when there are no validation errors', () => {
  const values = {
    firstName: 'akash',
    lastName: 'sawant',
    email: 'sawantakash321@gmail.com',
    streetAddr: 'MLK street, behind cathom mart, Mumbai',
  };
  const errors = {
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      streetAddr: '',
    },
  };
  const handleChange = jest.fn();
  const tree = renderer
    .create(<UserDetailsForm values={values} errors={{errors}} handleChange={handleChange} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
