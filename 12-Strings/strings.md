# Strings
## Level Up Your JavaScript
### By Cody Barrus & Ryan Ewing

---

# ES2015 introduced 8 new string methods!

- `String.prototype.startsWith`
- `String.prototype.endsWith`
- `String.prototype.includes`
- `String.prototype.repeat`

---

- `String.prototype[Symbol.iterator]`*
- `String.prototype.codePointAt`*
- `String.prototype.fromCodePoint`*
- `String.prototype.normalize`*

---

## `String.prototype.startsWith`

- Simplifies specific use cases of `indexOf`

```JavaScript
'bond,james bond'.indexOf('bond') === 0
// true

'bond,james bond'.startsWith('bond')
// true

'bond,james bond'.indexOf('bond', 11) === 11
// true

'bond,james bond'.startsWith('bond', 11)
// true
```

---

## `String.prototype.endsWith`

- Simplifies specific use cases of `indexOf`

```JavaScript
'bond,james bond'.endsWith('james bond')
// true

'bond,james bond'.endsWith('bond,james', 10)
// true
```

---

## `String.prototype.includes`

- Simplifies specific use cases of `indexOf`

```JavaScript
'bond,james bond'.indexOf('d,j') !== -1
// true

'bond,james bond'.includes('d,j')
// true

'bond,james bond'.includes('d,j', 10)
// false
```
---

## `String.prototype.repeat`

```JavaScript
'dun'.repeat(0)
// ''

'dun'.repeat(8)
'dundundundundundundundun'

'dun'.repeat('8')
'dundundundundundundundun'

```

---

## `String.prototype.repeat` cnt'd

```JavaScript

'dun'.repeat(8.4)
'dundundundundundundundun' // floored to 8

'dun'.repeat(-1)
// RangeError

'dun'.repeat('don')
// ''
```
