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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};




const middle = function(array) {
  let midArray = [];
  let midPoint = Math.floor(array.length / 2)
  if (array.length > 2) {
    // console.log('TEST: array contains more than 2 elements')
    if (array.length % 2 === 0) {
      console.log('TEST: array is divisible by 2 [' + array + ']')
      midArray.push(array[midPoint-1], array[midPoint])
    } else {
      console.log('TEST: array is not divisible by 2 [' + array + ']')
      midArray.push(array[midPoint]);

    }
  }
  return midArray;
}

// test driver code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);