import reduce from 'array-reduce-x';
import arrayincludes from 'array-includes-x';
import isNil from 'is-nil-x';

var addNotIncluded = function addNotIncluded(acc, value) {
  if (arrayincludes(acc, value) === false) {
    acc[acc.length] = value;
  }

  return acc;
};

var reduceArgs = function reduceArgs(acc, arg) {
  return isNil(arg) ? acc : reduce(arg, addNotIncluded, acc);
};
/**
 * This method creates an array of unique values, in order, from all given
 * arrays using SameValueZero for equality comparisons.
 *
 * @param {...Array} [args] - The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */


export default function union() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return reduce(args, reduceArgs, []);
}

//# sourceMappingURL=array-union-x.esm.js.map