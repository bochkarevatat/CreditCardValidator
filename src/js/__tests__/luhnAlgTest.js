import luhnAlg from '../luhnAlg.js';

test('Валидация пройдена', () => {
  const input = '4111111111111111';
  expect(luhnAlg(input)).toBeTruthy();
});

test('Валидация не пройдена', () => {
  const input = '4111111121111111';
  expect(luhnAlg(input)).toBeFalsy();
});
