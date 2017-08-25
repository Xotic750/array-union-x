/**
 * @file Creates an array of unique values, in order, from all given arrays.
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module array-union-x
 */

'use strict';

var reduce = require('array-reduce-x');
var arrayincludes = require('array-includes-x');
var isNil = require('is-nil-x');

var $union = function union() {
  return reduce(arguments, function (acc1, arg) {
    if (isNil(arg)) {
      return acc1;
    }

    return reduce(arg, function (acc2, value) {
      if (arrayincludes(acc2, value) === false) {
        acc2[acc2.length] = value;
      }

      return acc2;
    }, acc1);
  }, []);
};

/**
 * This method creates an array of unique values, in order, from all given
 * arrays using SameValueZero for equality comparisons.
 *
 * @param {...array} [array] - The arrays to inspect.
 * @returns {array} Returns the new array of combined values.
 * @example
 * var union = require('array-union-x');
 *
 * union([2], [1, 2]); // => [2, 1]
 */
module.exports = $union;
