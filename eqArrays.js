const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  let isEqual = true;
  if (array1.length !== array2.length) {
    isEqual = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        isEqual = false;
      }
    }
  }
  return isEqual;
};

module.exprts = eqArrays