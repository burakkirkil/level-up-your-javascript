# Modules
## Level Up Your JavaScript
### By Cody Barrus & Ryan Ewing

---

## `import` / `export`

- A new way to obtain modules
- Like `require`, but native to JS
- Replaces CommonJS
- Cleaner syntax

---

# Strict Mode

When using the ES2015 module syntax, strict mode is turned on by default.  This means:

- Variables can be undeclared
- Function parameters mush have unique names
- Reserved words cannot be bound

For a full list of strict mode effects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

---

# Export in CommonJS

## Export by:

- `module.exports = foo;`
- `module.exports = function foo(){};`
- `module.exports = { foo: 'bar' };`
- `module.exports = ['foo', 'bar'];`

---

# Exports in ES2015

## There are two kinds of exports in ES2015

- `export`
- `export default`

---

# Export Default

- `export default foo;`
- `export default function foo(){};`
- `export default { foo: 'bar' };`
- `export default [ 'foo', 'bar' ];`

---

# Named Exports

- `export var foo;`
- `export var foo = function (){};`
- `export var foo = { foobar: 'barfoo'}`
- `export var foo = [ 'foobar', 'barfoo' ]`

---

# Exporting Bindings, Not Values

- Exported `foo` variable is bound to `foo` on the module
- The value of `foo` can be changed (not recommended)

---

# Renaming Exports

If you want to rename a something when you export:

- `export { bond as jamesBond}`
- `export { bond as default }`
---

# Limitations

Exports:

- Can only be used within the top level of your module
- Cannot be placed within methods
- Are limited to one default export per module

---

# Best Practices

- Use `export default` primarily
- Place `export`s at the bottom of the file (makes discovering exports easy)
- Bundle methods under export default (especially if you're used to CommonJS)

ie

```JavaScript
var bondFacts = {
  isAwesome: true,
  isStillRelevant: 'debatable'
}
export default bondFacts;
```

---

# Imports in ES2015

- Counterpart to `export`
- The way modules are loaded is implementation specific
- Currently, browsers do not support `import`/`export` without a bundler such as Webpack
- When used with Babel, `import`s are supported by the CommonJS system
- Can only be used at the top level of your module

---

# Import Default

CommonJS

```JavaScript
var gadgets = require('gadgets');
```

ES2015

```JavaScript
import gadgets from 'gadgets';
```

---

# Import Named Exports

```JavaScript
import { bagpipeFlamethrower, falseFingerprints, sharkInflatingPellet } from gadgets;
```

---

# Renaming Named Imports

```JavaScript
import { ringCamera as justARing } from gadgets;
```

# Mix and Match

```JavaScript
import gadgets, { watchGun as watch, broomRadio } from gadgets;
```

# Just give me everything!

```JavaScript
import * as gadgets from 'gadgets';
gadgets.robotDog.attack();
```
