# Arrays
## Level Up Your JavaScript
### By Cody Barrus & Ryan Ewing

---

## With ES2015 came 10 new array methods!

---

# Static Methods

- `Array.from`
- `Array.of`

---

## `Array.from`

`Array.from(arguments)`

Returns an array from an array like object, such as:

- `arguments`
- `document.querySelectorAll('div')`
- `$('div')`

---

## Essentially replaces the need for:

```JavaScript
function cast ()
  return Array.prototype.slice.call(arguments)
}
cast('a', 'b')
```

Or

```JavaScript
function cast ()
  return [].slice.call(arguments)
}
```

---

## `Array.from` cnt'd

Three arguments

- `input` - an arraylike or itterable
- `map` - a mapping function executed on each item of `input`
- `context` - `this` binding when calling `map`

```JavaScript
function typesOf () {
  return Array.from(arguments, value => typeof value)
}
typesOf(null, [], NaN)
// <- ['object', 'object', 'number']
```

---

## ES2015 alternative

- For arguments, you could also use rest parameters which might be easier to read.
- However, for other uses, like jQuery, `Array.from` is a logical choice

```JavaScript
function typesOf (...all) {
  return all.map(value => typeof value)
}
typesOf(null, [], NaN)
// ['object', 'object', 'number']
```

# `Array.of`

- Like `new Array` but more consistent
- While `new Array` has a length overload, `Array.of` does not.

---

```javascript
new Array()
// []

Array.of()
// []

new Array(1)
// [undefined x 1]

Array.of(1)
// [1]

new Array(3)
// [undefined x 3]

Array.of(3)
// [3]

```

---

```javascript

new Array(1, 2)
// [1, 2]

Array.of(1, 2)
// [1, 2]

new Array(-1)
// RangeError: Invalid array length

Array.of(-1)
// [-1]

```

---

# Prototypes

- Array.prototype.copyWithin*
- Array.prototype.fill
- Array.prototype.find
- Array.prototype.findIndex
- Array.prototype.keys
- Array.prototype.values
- Array.prototype.entries
- Array.prototype[Symbol.iterator]

---

# `Array.prototype.fill`

- Fills all things in an array with the value provided

```javascript
[1, 2, 3].fill('tacos')
// ['tacos', 'tacos', 'tacos']
```

- Can specify a start and end index

```javascript
new Array(5).fill(0, 0, 3)
// [0, 0, 0, undefined x 2]
```
---

# `Array.prototype.find`

- Finds and returns the first item that matches `callback(item, i, array)` for an array
- returns `undefined` if nothing is found

```JavaScript
[1, 2, 3, 4, 5].find(item => item > 2)
// 3
[1, 2, 3, 4, 5].find((item, i) => i === 3)
// 4
```

---

# `Array.prototype.findIndex`

- Like find, but returns the index of matching element
- retuns -1 if nothing is found

```javascript
[1, 2, 3, 4, 5].find(item => item > 2)
// <- 2
[1, 2, 3, 4, 5].find((item, i) => i === 3)
// <- 3
```

---

# `Array.prototype.keys`

- Returns an iterator that yields a sequence holding the keys of the array.
- Can use with ES6 spread operator, `for..of`, or by calling `.next()`

```javascript
for (let key of [1, 2, 3].keys()) {
  console.log(key)
  // 0
  // 1
  // 2
}
```

---

# `Array.prototype.values`

- Like `keys`, but returns an iterator with a sequence of values

```javascript
for (let key of [1, 2, 3].values()) {
  console.log(key)
  // 1
  // 2
  // 3
}
```

---

# `Array.prototype.entries`

- Like `keys` and `values`, but returns an iterator with a sequence of key, value pairs

```javascript
for (let key of [1, 2, 3].values()) {
  console.log(key)
  // [0, 1]
  // [1, 2]
  // [2, 3]
}
```

---

# `Array.prototype[Symbol.iterator]`

- Exactly the same as `Array.prototype.values`
