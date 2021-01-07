const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  let result = {};
  for(let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    if (itemsToCount[item] === true) {
      if (result[item]) {
        result[item] = result[item] + 1;
      } else {
        result[item] = 1;
      }

    } 
  }

  return result;
};

//   for(let value of allItems) {
//   console.log(itemsToCount[value])




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const object = ({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

const result1 = countOnly(firstNames, object)
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);