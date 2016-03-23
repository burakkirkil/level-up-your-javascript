# Template Literals
### Level Up Your JavaScript with ES6
#### by Cody Barrus & Ryan Ewing

---

# Template Literal Features

- A new string type
- Can contain both ' and "

```JavaScript
const bondSays = `"I don't stop when I'm tired. I stop when I'm dead." - James Bond`
```

---

# Interpolation
Plus multiline!

```JavaScript
const expectation = 'talk';
const reality = 'die'
const bondSays = `"Do you expect me to ${expectation}?"
"No Mr. Bond, I expect you to ${reality}!"`
console.log(bondSays)
// '"Do you expect me to talk?" "No Mr. Bond, I expect you to die!"'
```

---

# Interpolation cnt'd

- Can execute any kind of expression

```JavaScript
const day = new Date()
let bondFilm = `Die Another ${day.toLocaleString()}`
console.log(bondFilm)
// 'Die Another 8/26/2015, 3:15:20 PM'

bondFilm = `You Only Live ${1+1}`;
console.log(bondFilm);
// You Only Live 2
```

---

# More on Multiline

- spacing does matter
- wrap in parenthesis to keep away from variable declaration

```JavaScript
const bestBondSongs = (
`Goldfinger
Live and Let Die
Nobody Does It Better
`);
```
