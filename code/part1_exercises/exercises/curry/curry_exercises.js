require('../../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = _.split(' ');

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = _.map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var startsWithQ = _.match(/q/i);
var filterQs = _.filter(startsWithQ);

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = function(numbers) {
  if (numbers.length === 1) { return numbers[0] }
  return _keepHighest(numbers[0], max(_.tail(numbers)));
};

  
// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = _.curry(slice);


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = undefined;


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
