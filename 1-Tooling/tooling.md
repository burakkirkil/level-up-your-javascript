# Tooling
## Level Up Your JavaScript with ES6
### by Cody Barrus & Ryan Ewing

---

# Quick intro
This single version of JavaScript is called the following:

- EcmaScript 2015
- ES6
- ES2015
- ES15

---

# Future versions
- ES2016
- ES2017
OR ( if you're lazy like me )
- ES16
- ES17
- etc

---

# Getting it working
## ES2015 works to some degree in many environments already, such as:
- Chrome
- Firefox
- Edge
- Node.js

---

# Not full featured
## While many features of ES2015 do work in these environments, many aren't fully featured.
- Some features require the use of `'use strict'`
- Some features have not been implemented yet
- ES15 is not backwards compatable with older browsers

---

## To see a full ES2015 compatability table, visit:
##[ES6 Compatability Table](https://kangax.github.io/compat-table/es6/)
https://kangax.github.io/compat-table/es6/

---

# Transpilers
## Here come transpilers to save the day!!!
- The most reliable way to use ES2015 in production and not fret
- Compile code into older versions of JavaScript
- As new versions of JavaScript are released, transpilers will continue to be the norm to ensure backwards compatability

---

# Babel
#The most widely used transpiler
- Human readable output FTW!
- Polyfil for static files
- `babelify` to mix with Gulp, Grunt or `npm run` scripts
- Often used with Webpack (bundler) to transpile ES2015, and React's JSX
- Some ES16 already supported!!

---

# Node.js
## As of `v4.x.x`, Node features many useful ES15 baked in.
- To get the most out of node, be sure to `'use strict'`
- Or, incorperate `babel-node` with any version of node to transpile even more ES2015 goodness!

---

# Bundlers
## Webpack & Browserify
- If you want to take advantage of ES2015's `import` syntax on the front end, you will need a bundler
- Also allows you to take advantage of `npm` on the client side
- Often used with React and Babel

---

# Summary
- ES2015 is already available to you in many environments you likely use today
- Transpilers like Babel are the way of the futer
- Bundlers like Webpack allow you to take advantage of ES2015 on the client side