const capitalize = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize.capitalize_v1).toEqual('function');
  expect(typeof capitalize.capitalize_v2).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize.capitalize_v1('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
  expect(capitalize.capitalize_v2('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize.capitalize_v1('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
  expect(capitalize.capitalize_v2('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});
