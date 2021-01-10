const cb = (x) => {
  return x.stars === 2
};
const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
console.log(obj["Blue Hill"]);
const findKey = (object, callback) => {
 for (const key in object) {
   if (callback(object[key])) {
   return key;
   }
 }
}

console.log(findKey(obj, x => cb(x))); // => "noma"
