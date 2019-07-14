/**
 * @file Creates an array of unique values, in order, from all given arrays.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module array-union-x
 */

const reduce = require('array-reduce-x');
const arrayincludes = require('array-includes-x');
const isNil = require('is-nil-x');

const addNotIncluded = function _addNotIncluded(acc, value) {
  if (arrayincludes(acc, value) === false) {
    acc[acc.length] = value;
  }

  return acc;
};

const reduceArgs = function _reduceArgs(acc, arg) {
  return isNil(arg) ? acc : reduce(arg, addNotIncluded, acc);
};

/**
 * This method creates an array of unique values, in order, from all given
 * arrays using SameValueZero for equality comparisons.
 *
 * @param {...Array} [array] - The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 * var union = require('array-union-x');
 *
 * union([2], [1, 2]); // => [2, 1]
 */
module.exports = function union() {
  return reduce(arguments, reduceArgs, []);
};
