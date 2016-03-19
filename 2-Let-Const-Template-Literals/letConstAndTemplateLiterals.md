## Let & Const
### Level Up Your JavaScript with ES6
#### by Cody Barrus & Ryan Ewing

---

# New variable types
- `let`
- `const`

---

# `let` && `const` vs `var`
`let` && `const` are:
- Block scoped
- Hoisted to the top of the block

`var` is:
- Lexically scoped
- Hoisted to the top of the function

---
# Block scope

```javascript
let outer = 'I was wrong about you.'
{
  let inner = 'Yeah, how so?”'
  {
    let innermost = 'I thought Christmas only comes once a year.'
  }
  // accessing innermost here would throw
}
// accessing inner here would throw
// accessing innermost here would throw
```

---

# Block scope cnt'd

This works in ES5, not in ES2015

```javascript
{
  let _secretBase = 'secret'
  function getSecretBaseLocation() {
    return _secretBase
  }
}
console.log(getSecretBaseLocation())
// getSecretBaseLocation is not defined
```

---

# Block scope cnt'd

```javascript
var getSecretBaseLocation;
{
  let _secretBase = 'secret'
  getSecretBaseLocation = function () {
    return _secretBase
  }
}
console.log(getSecretBaseLocation())
// <- 'secret'
```

---

## The Temporal Dead Zone
aka TDZ

- The space between the beginning of the block and where `let foo` is defined
- Prevents strange bugs where variables are manipulated before they are declared
- The whole point of the TDZ is to make it easier to catch errors where accessing a variable before it’s declared in user code leads to unexpected behavior.

---

## TDZ cnt'd

In ES5, this first log returns `undefined`, in ES2015 it throws a References Error.

```javascript
console.log(bond); // Reference Err
let bond = 'James Bond';
console.log(bond); // James Bond
```

---

## TDZ cnt'd

This works, though, because the function isn't executed until after the decleration.

```javascript
function getOddJobsWeapon () {
  return weapon
}
let weapon = 'bowler cap'
console.log(getOddJobsWeapon())
// <- 'bowler cap'
```

---

## TDZ cnt'd

This wont work, because function is executed before the decleration

```javascript
function getOddJobsWeapon () {
  return weapon
}
console.log(getOddJobsWeapon())
let weapon = 'bowler cap'
// ReferenceError: weapon is not defined
```

---

# `const`
- Reasigning a value to a `const` will will fail silently, or fail with an exeption when in strict mode

```javascript
const bestBond = 'Sean Connery';
bestBond = 'Danial Craig'; // bestBond is read only
```

---

# `const` !== immutable

While you cannot reasign, you can change the reference:

```javascript
const m = { actors: ['Edward Fox', 'Robert Brown', 'Bernard Lee'] }
m.actors.push('Judi Dench')
console.log(m)
// <- { actors: ['Edward Fox', 'Robert Brown', 'Bernard Lee', 'Judi Dench'] }
```

---

# `const` also block scoped

```javascript
const firstBondGirl = 'Honey Rider'
{
  const firstBondGirl = 'Strawberry Fields'  
  console.log(firstBondGirl)
  // <- 'Strawberry Fields' 
}
console.log(firstBondGirl)
// <- 'Honey Rider'
```

---

# `const` declerations

- Must be declared with an initializer
- Cannot be declared with the same name

```javascript
const m; // unexpected token
```

---




