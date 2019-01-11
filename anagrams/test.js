const anagrams = require('./index.js');

test('anagram functions exists', () => {
  expect(typeof anagrams.anagrams_V1).toEqual('function');
  expect(typeof anagrams.anagrams_V2).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
  expect(anagrams.anagrams_V1('hello', 'llohe')).toBeTruthy();
  expect(anagrams.anagrams_V2('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagrams.anagrams_V1('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
  expect(anagrams.anagrams_V2('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagrams.anagrams_V1('One One', 'Two two two')).toBeFalsy();
  expect(anagrams.anagrams_V2('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagrams.anagrams_V1('One one', 'One one c')).toBeFalsy();
  expect(anagrams.anagrams_V2('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagrams.anagrams_V1('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
  expect(
    anagrams.anagrams_V2('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});

test('"Apple" is not an anagram of pineapple', () => {
  expect(
    anagrams.anagrams_V1('apple', 'pineapple')
  ).toBeFalsy;
  expect(
    anagrams.anagrams_V2('apple', 'pineapple')
  ).toBeFalsy;
});
