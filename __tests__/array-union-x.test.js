import union from '../src/array-union-x';

describe('union', function() {
  let args;

  /* eslint-disable-next-line jest/no-hooks */
  beforeEach(function() {
    args = (function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    })(1, 2, 3);
  });

  it('is a function', function() {
    expect.assertions(1);
    expect(typeof union).toBe('function');
  });

  it('should return the union of the given arrays', function() {
    expect.assertions(1);
    const actual = union([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    expect(actual).toStrictEqual([1, 3, 2, 5, 4]);
  });

  it('should not flatten nested arrays', function() {
    expect.assertions(1);
    const actual = union([1, 3, 2], [1, [5]], [2, [4]]);
    expect(actual).toStrictEqual([1, 3, 2, [5], [4]]);
  });

  it('should ignore values that are not arrays or `arguments` objects', function() {
    expect.assertions(3);
    const array = [0];
    expect(union(array, 3, {0: 1}, null)).toStrictEqual(array);
    expect(union(null, array, null, [2, 1])).toStrictEqual([0, 2, 1]);
    expect(union(array, null, args, null)).toStrictEqual([0, 1, 2, 3]);
  });
});
