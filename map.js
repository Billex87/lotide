const assertArraysEqual = require("./assertArraysEqual");
// const assertArraysEqual = function (array1, array2) {
//   eqArrays(array1, array2)
//     ? console.log(`❤️ ❤️ ❤️ Assertion Passed:  ${array1} === ${array2}`)
//     : console.log(`😭😭😭 Assertion Failed: ${array1} !== ${array2}`);
// };

// const eqArrays = (array1, array2) => {
//   let arrayLengthCheck = array1.length === array2.length;
//   if (arrayLengthCheck) {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
// const results1 = map(words, (word) => word[0]);
// console.log(results1);
// // comparing results1 array with the expected array with what we think it should be

// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(results1, ["r", "o", "o", "a", "o"]);
// assertArraysEqual(results1, ["o", "n", , "j", "m"]);