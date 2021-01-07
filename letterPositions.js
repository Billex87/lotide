const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
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

const letterPositions = function(sentence) {
  lettersByIndex = {};
 for (let index = 0; index < sentence.length; index++) {
   const letter = sentence[index];

   if (lettersByIndex[letter]) {
     lettersByIndex[letter].push(index);
   } else {
     lettersByIndex[letter] = [index];
   }
  }
  return lettersByIndex;
};

assertArraysEqual(letterPositions("hello").e, [1]);

