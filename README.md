<a
  href="https://travis-ci.org/Xotic750/array-union-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/array-union-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/array-union-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/array-union-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/array-union-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/array-union-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/array-union-x"
  title="npm version">
<img src="https://badge.fury.io/js/array-union-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/array-union-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/array-union-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/array-union-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/array-union-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/array-union-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/array-union-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_array-union-x"></a>

## array-union-x

Creates an array of unique values, in order, from all given arrays.

**Version**: 2.0.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](https://opensource.org/licenses/MIT)  
**Copyright**: Xotic750  
<a name="exp_module_array-union-x--module.exports"></a>

### `module.exports([...array])` ⇒ <code>array</code> ⏏

This method creates an array of unique values, in order, from all given
arrays using SameValueZero for equality comparisons.

**Kind**: Exported function  
**Returns**: <code>array</code> - Returns the new array of combined values.

| Param      | Type               | Description            |
| ---------- | ------------------ | ---------------------- |
| [...array] | <code>array</code> | The arrays to inspect. |

**Example**

```js
import union from 'array-union-x';

console.log(union([2], [1, 2])); // => [2, 1]
```
