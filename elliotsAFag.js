const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (box, string) {
 let newArray = Object.keys(box);
 for (let key of newArray) {
   console.log(box[key]);
   if (box[key] === string) {
     return key;
   }
 }
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",comedy: "Brooklyn Nine-Nine", drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);