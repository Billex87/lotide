const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i)
    }
  }
}
const cb = (x) => {
  console.log(x)
  return x < 0
}
// const cb2 = (x) => x === ','

// const cb3 = (x) => {
//   return x === ','
// }

// let cb4 = function (x) {
//   return x === ','
// }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, cb);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, cb2);
console.log(results2);

///[ 1, 2, 5, 7, 2 ]
// [ 'I've', 'been', 'to', 'Hollywood' ]