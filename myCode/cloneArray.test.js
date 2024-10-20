const cloneArray = require ('./cloneArray');

test ('should check if array is cloned properly', () => {
  const array = [78, 34, 23];
  expect (cloneArray (array)).toEqual (array);
  // Checks is a new array was indeed created and not the same array
  expect (cloneArray (array)).not.toBe (array);
});
