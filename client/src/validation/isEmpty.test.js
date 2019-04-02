import isEmpty from './is-empty';

test('is-empty returns Boolean', () => {
  expect(typeof isEmpty(undefined)).toBe('boolean');
});
