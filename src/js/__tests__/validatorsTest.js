import isValidCard from '../validators.js';

test.each([
  ['true for VISA', '4111111111111111', 'visa'],
  ['true for MasterCard', '5555555555554444', 'master'],
  ['true for Mir', '2200123456789010', 'mir'],
  ['true for Discover', '6011111111111117', 'discover'],
  ['true for JCB', '3530111333300000', 'jcb'],
])('it should be %s', (_, input, expected) => {
  expect(isValidCard(input)).toEqual(expected);
});
