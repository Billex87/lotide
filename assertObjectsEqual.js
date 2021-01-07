const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", c: "3" , a: "1"};

const eqObjects = function(obj1, obj2) {
  // console.log(Object.values(obj2));
if (Object.keys(obj1).length !== Object.keys(obj2).length) {
  return false;
}
for (const key in obj1) {
  if ((obj1[key]) !== (obj2[key])) {
  return false;
}
} return true;
}

const assertObjectsEquals = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
// console.log(`Example label: ${inspect(actual)}`);
console.log(eqObjects(ab, ab));
console.log(eqObjects(ab, ba)); 
assertEqual(eqObjects(ab, ab), true);
assertEqual(eqObjects(ab, ba), false)