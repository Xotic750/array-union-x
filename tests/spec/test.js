'use strict';

var union;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  union = require('../../index.js');
} else {
  union = returnExports;
}

var args = (function () {
  return arguments;
}(1, 2, 3));

describe('union', function () {
  it('is a function', function () {
    expect(typeof union).toBe('function');
  });

  it('should return the union of the given arrays', function () {
    var actual = union([
      1,
      3,
      2
    ], [
      5,
      2,
      1,
      4
    ], [2, 1]);
    expect(actual).toEqual([
      1,
      3,
      2,
      5,
      4
    ]);
  });

  it('should not flatten nested arrays', function () {
    var actual = union([
      1,
      3,
      2
    ], [1, [5]], [2, [4]]);
    expect(actual).toEqual([
      1,
      3,
      2,
      [5],
      [4]
    ]);
  });

  it('should ignore values that are not arrays or `arguments` objects', function () {
    var array = [0];
    expect(union(array, 3, { 0: 1 }, null)).toEqual(array);
    expect(union(null, array, null, [2, 1])).toEqual([
      0,
      2,
      1
    ]);
    expect(union(array, null, args, null)).toEqual([
      0,
      1,
      2,
      3
    ]);
  });
});
