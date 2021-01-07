const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const findKeyByValue = function (object, string) {
  console.log(findKeyByValue(string))
  console.log(findKeyByValue(object))

}


return bestTVShowsByGenre;

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("String", "string");
// assertEqual("string", "string");
// assertEqual(42, "42");
// assertEqual(42, 42);