const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" , c: "3"};

const eqObjects = function(obj1, obj2) {
  // console.log(Object.values(obj2));
if (Object.keys(obj1).length !== Object.keys(obj2).length) {
  return false;
}
for (const key in obj2) {
  if ((obj1[key]) !== (obj2[key])) {
  return false;
}
} return true;
}

console.log(eqObjects(ab, ab));
console.log(eqObjects(ab, ba)); 
assertEqual(eqObjects(ab, ab), true);
assertEqual(eqObjects(ab, ba), false);