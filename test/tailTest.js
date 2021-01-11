const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = [];
tail(words); // no need to capture the return value
const words1 = ['apple','ball','cat'];
tail(words1); 

assertEqual(words.length, 3); // original array 
assertEqual(words1.length,3);