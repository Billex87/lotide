const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] != [${expected}]`);
  }
};

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


// console.log(`Example label: ${inspect(actual)}`);
console.log(eqObjects(ab, ab));
console.log(eqObjects(ab, ba)); 
assertEqual(eqObjects(ab, ab), true);
assertEqual(eqObjects(ab, ba), false)