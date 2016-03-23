# Arrow Functions
### Level Up Your JavaScript with ES6
#### by Cody Barrus & Ryan Ewing

---

## what?
`() => {}`

---
`() => {}`
vs
`function() {}`

---
## why?

* terse (6 characters vs 12)
* useful when doing functional programming
* don't need to do `var self = this`

---
## how?

---
## no argument, no body
`() => {}`

---
## one argument, no body
`(agent) => {}`
or
`agent => {}` (preferred)

---
## one argument, with body
explicit return with block body:
`agent => { return agent.name }`
or
implicit return:
`agent => agent.name` (preferred)

---
## multiple arguments, with body
`(agent, villian) => agent.name === villian.name`

---
## return an object
`_ => ({ name: 'bond' })`

---
## doesn’t create own this, or arguments
```
function Agent(name) {
  this.name = name;
  setTimeout(function() {
    console.log(this.name, 'is now a 007');
  }, 3000)
}
let Bond = new Agent('James Bond'); // is now a 007
```

---
```
function Agent(name) {
  this.name = name;
  setTimeout(() => {
    console.log(this.name, 'is now a 007');
  }, 3000)
}
let Bond = new Agent('James Bond'); // James Bond is now a 007
```

---
## .call, .apply don’t accept a context
Since arrow functions don't have context, you can't pass one in 
```
let agent = { name: 'Bond' }
let getName = () => this.name
let getNameFunc = function() { return this.name }

console.log(getName.call(agent)) // ""
console.log(getNameFunc.call(agent)) // "Bond"
```
