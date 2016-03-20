# Map
### Level Up Your JavaScript with ES6
#### by Cody Barrus & Ryan Ewing

---
## Map
### what?
> The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.
-- MDN

---
## Map
### Map vs {}

* An Object has a prototype, so there are default keys in the map. This could be bypassed by using map = Object.create(null) since ES5, but was seldomly done.
* The keys of an Object are Strings and Symbols, where they can be any value for a Map.
* You can get the size of a Map easily while you have to manually keep track of size for an Object.

---
## Map
### how?

```javascript
let movie = new Map();
movie.set('DrNo', 'Joseph Wiseman');
movie.get('DrNo') // Joseph Wiseman
```

---
## Map
### let's get weird

```javascript
let bond = { name: 'james' };
let movie = new Map();
movie.set(bond, '007');
movie.get(bond) // 007
```

---
## Map
### let's get weirder

```javascript
let goldenFun = function() {console.log(🔫)}
let movie = new Map();
movie.set(goldenFun, 'pew pew');
movie.get(goldenFun) // pew pew
```

---
## Map
### Alternative Creation

`Map()` can take any iterable (array, generator)
```javascript
let movie = new Map([['james', 'bond'], ['odd', 'job']]);
movie.get('james') // bond
```

---
## Map
### for...of

`Map()` is iterable
```javascript
let movie = new Map([['james', 'bond'], ['odd', 'job']]);
for (var [key, value] of movie) {
  console.log(key + " = " + value);
}
```

---
## Map
### and more

* `.size()`
* `.clear()`
* `.has()`
* `.delete()`
* `.entries()`
* `.keys()`
* `.values()`
---

