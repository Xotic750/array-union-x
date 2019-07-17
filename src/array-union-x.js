import reduce from 'array-reduce-x';
import arrayincludes from 'array-includes-x';
import isNil from 'is-nil-x';

const addNotIncluded = function addNotIncluded(acc, value) {
  if (arrayincludes(acc, value) === false) {
    acc[acc.length] = value;
  }

  return acc;
};

const reduceArgs = function reduceArgs(acc, arg) {
  return isNil(arg) ? acc : reduce(arg, addNotIncluded, acc);
};

/**
 * This method creates an array of unique values, in order, from all given
 * arrays using SameValueZero for equality comparisons.
 *
 * @param {...Array} [args] - The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */
const union = function union(...args) {
  return reduce(args, reduceArgs, []);
};

export default union;
