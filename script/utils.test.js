import { sum, isEmpty } from './utils.js';

test('sum adds numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('isEmpty returns true for empty strings', () => {
  expect(isEmpty('')).toBe(true);
  expect(isEmpty('   ')).toBe(true);
  expect(isEmpty('text')).toBe(false);
});
