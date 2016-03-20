# Promises
### Level Up Your JavaScript with ES6
#### by Cody Barrus & Ryan Ewing

---
## Promises
### what?
> The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.
-- MDN

---
## Promises
### what?
ES6 includes promises that follow the Promises/A+ specification

---
## Promises
### why?

* avoid callback hell
* easier error handling

---
## Promises
### how?

```javascript
let p = new Promise((reject, resolve) => { ... })
```

---

```javascript
let findCure = new Promise((reject, resolve) => {
  console.log('looking for a cure');
  let cure = false;
  if (cure) {
    setTimeout(()=> resolve("the agent was saved! 🎉"), 3000);
  } else {
    setTimeout(()=> reject("the agent has died 😢"), 3000);
  }
})

findCure
.then(success => console.log(success))
.catch(fail => console.log(fail));
```

---
// looking for a cure
// (after 3s) the agent has died 😢

---
## Promise Chaining

A promise has two important methods:

```javascript
.then(onFulfilled, onRejected)
.catch(onRejected)
```

---
## Promise Chaining

`.then()` appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the callback if it is called

---
## Promise Chaining

`.catch()` appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called

---
## Promise Chaining
```javascript
// assume promise returning functions: getToys, killBadGuy, getTheGirl
getToys() // returns a promise
.then(killBadGuy) // adds killBadGuy as a fulfilled handler, returns new promise
.then(getTheGirl) // adds getTheGirl as a fulfilled handler, returns new promise
.then(() => console.log('bond won and got the girl.'))
.catch(() => console.log('bond died.'))
```

---
## Promise Lifecycle
A promise can be `pending`, `fulfilled`, or `rejected`.
Once the state has been set to fulfilled or rejected, it stays that way with the value it was given.

---
## Promise Lifecycle
```javascript
let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('bond won'), 3000);
  setTimeout(() => {
    console.log('trying to reject');
    reject('bond lost');
  },6000);
});
// p is pending for 3s
p.then( result => console.log(result) )
```

---
## Promise.resolve()
creates a fulfilled promise with the given value

---
## Promise.reject()
creates a rejected promise with the given value

---
## Promise.race([])
creates a promise that is resolved/rejected when _any_ of the given promises resolve/reject

```javascript
Promise
.all([getToys, getPoisoned, getTheGirl])
.then((toy, bad, girl) => {
  console.log(`getting toys or the girl counts as winning`)
})
.catch((death) => {
  console.log(`bond died because of ${death}`)
})
```

---
## Promise.all([])
creates a promise that resolves when _all_ of the given promises resolve, or when _any_ have rejected.

```javascript
Promise.all([getToys, killBadGuy, getTheGirl]).then((toy, bad, girl) => {
  console.log(`bond got to play with ${toy} and shot ${bad} and wooed ${girl}`)
})
```

---

