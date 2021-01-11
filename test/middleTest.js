const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

const middle = require('../middle');

// assertEqualArrays(middle([1, 2, 3]),[1,2,3]);

// assertEqualArrays(middle([1, 2, 3,4]),[2,3]);

describe("#middle", () => {
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5,6]), [ 3, 4 ]);
  });
  it("returns '3' [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]); 
  });
  it("returns [] for [] ", () => {
    assert.deepEqual(middle([]), []); 
  });
});