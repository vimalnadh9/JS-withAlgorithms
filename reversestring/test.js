const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse.reverse1).toBeDefined();
  expect(reverse.reverse2).toBeDefined();
  expect(reverse.reverse3).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse.reverse1('abcd')).toEqual('dcba');
  expect(reverse.reverse2('abcd')).toEqual('dcba');
  expect(reverse.reverse3('abcd')).toEqual('dcba');
});

test('Reverse reverses a string with spaces', () => {
  expect(reverse.reverse1('  abcd')).toEqual('dcba  ');
  expect(reverse.reverse2('  abcd')).toEqual('dcba  ');
  expect(reverse.reverse3('  abcd')).toEqual('dcba  ');
});

test('reverses aplhanumerics in string', () => { 
  expect(reverse.reverse1('test1234')).toEqual('4321tset');
  expect(reverse.reverse2('test1234')).toEqual('4321tset');
  expect(reverse.reverse3('test1234')).toEqual('4321tset');
});
