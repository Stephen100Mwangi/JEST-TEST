const sum = require ('./sum');

// Test example
// 1 + 2 = 3

test ('should add two numbers', () => {
  expect (sum (2, 3)).toBe (5);
});
