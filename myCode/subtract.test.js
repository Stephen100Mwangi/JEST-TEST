const subtract = require ('./subtract');

test ('should subtract two numbers', () => {
  expect (subtract (78, 20)).toBe (58);
});
