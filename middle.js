const middle = function (arr){
  let middleElements = [];
  //1 or 2 elements return empty
  //odd elements return middle
  //even arrays return 2 of the middle

  //figure out if array is odd or even
  if (arr.length % 2 !== 0 && (arr.length / 2) > 1){
    for(let i = 0; i < arr.length; i++){
      if (i === parseInt(arr.length/ 2)){
        middleElements.push(arr[i]);
        break;
      }
    }
  } else if (arr.length % 2 === 0 && (arr.length / 2) > 2) {
    for(let i = 0; i < arr.length; i++){
      if (i === arr.length/ 2){
        middleElements.push(arr[i-1],arr[i]);
        break;
      }
    }
  }

  return middleElements;
  //divide even arrays by 2 if the answer is > 1 then return empty array
  //if the answer is greater than one add the element at that index and the next one to middle elements
  //loop through elements find the middle index
  //return array
}

// console.log(middle([1])) ;// => [2, 3]
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5,6]))// => [3]
module.exports = middle;