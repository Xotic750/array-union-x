let union;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  union = require('../../index.js');
} else {
  union = returnExports;
}

describe('union', function() {
  let args;

  beforeEach(function() {
    args = (function() {
      return arguments;
    })(1, 2, 3);
  });

  it('is a function', function() {
    expect(typeof union).toBe('function');
  });

  it('should return the union of the given arrays', function() {
    const actual = union([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    expect(actual).toStrictEqual([1, 3, 2, 5, 4]);
  });

  it('should not flatten nested arrays', function() {
    const actual = union([1, 3, 2], [1, [5]], [2, [4]]);
    expect(actual).toStrictEqual([1, 3, 2, [5], [4]]);
  });

  it('should ignore values that are not arrays or `arguments` objects', function() {
    const array = [0];
    expect(union(array, 3, {0: 1}, null)).toStrictEqual(array);
    expect(union(null, array, null, [2, 1])).toStrictEqual([0, 2, 1]);
    expect(union(array, null, args, null)).toStrictEqual([0, 1, 2, 3]);
  });
});
