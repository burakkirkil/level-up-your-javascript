# Classes
## Level Up Your JavaScript
### By Cody Barrus & Ryan Ewing

---

# Classes in JavaScript?

- Yup!
- Well, sort of.
- Syntactic sugar on top of prototypical inheritance

---

### Protoypal Inheritances (A Refresher)


```JavaScript
function Bond() {
  this.kills = 0;
  this.killRange = 15;
  this.puns = 0;
}

Bond.prototype.sneakAttack = function(badGuy) {
  if (badGuy.distance < this.killRange){
    this.kills += 1;
    this.puns += 1;
  }
}
```

---

# Protoypal Inheritance cnt'd

```JavaScript
var jamesBond = new Bond();
jamesBond.sneakAttack();
```

---

# ES2015 Class Syntax

- No commas, unlike object literals

```JavaScript
class Bond {
  constructor () {
    this.kills = 0;
    this.killRange = 15;
    this.puns = 0;
  }
  sneakAttack () {
    if (badGuy.distance < this.killRange){
      this.kills += 1;
      this.puns += 1;
    }
  }
}
```

---

# Static Methods

- Sugar on top of ES5 static Methods

In ES5

```JavaScript
function Bond(){
  this.kills = 0;
}
Bond.hasMoreKills = (bondOne, bondTwo){
  return bondOne.kills > bondTwo.kills;
}
```

---

# Static Methods in ES2015

```JavaScript
class Bond {
  constructor() {
    this.kills = 0;
  }
  static hasMoreKills (bondOne, bondTwo) {
    return bondOne.kills > bondTwo.kills;
  }
}
```

---

# Extends

- Enables easy inheritance
- `super` calls the method on the base class, so we don't need to repeat ourselves.

```JavaScript
class RogerMoore extends Bond {
  sneakAttack(){
    super.sneakAttack();
    this.puns += 3;
  }
}
```

---

# More on Super

- Often used to override constructor method

```JavaScript
class Bond {
  constructor(kills) {
    this.kills = kills;
  }
}
class DanielCraig extends Bond {
  constructor(kills){
    super(kills * 7);
  }
}
```
