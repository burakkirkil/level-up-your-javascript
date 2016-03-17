// This file lists a few examples of working with
// ES2015 in various environments.

// Node.js

// For built in ES2015
'use strict'

const killBond = ({ weapon, villian }) => {
  return `Bond was killed with a ${weapon} by ${villian}`
};

// Babel with Node.js (learn more at https://babeljs.io/docs/setup/#node)

// install babel-core (doesn't transform anything by default)
// npm install --save-dev babel-core
// install babel presets you want to use
// npm install babel-preset-es2015 --save-dev

// usage
require("babel-core").transform("code", options);

let bondWeapons = ['flame thrower watch', 'shoe dagger'];
let secretAgentArsenal = ['poisen darts', ...bondWeapons];

// Built in Babel for recent verstions of Chrome, Edge, Firefox, etc
// Find compatability table here: https://kangax.github.io/compat-table/es6/

'use strict'

const { Jaws, Oddjob, Goldfinger } = bondVillans;

// With Babel polyfill

// install
// npm install babel-polyfill

// if using ES6 imports
import "babel-polyfill";

new Promise((resolve, reject)=>{
  if (bondKilledVillian === true){
    resolve(secrets);
  } else {
    reject()
  }
})

// Webpack
// Here's an example webpack.config.js

var webpack = require('webpack');  
module.exports = {  
    entry: [
      'babel-polyfill',
      'webpack/hot/only-dev-server',
      './src/app.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
              test: /\.js$/, 
              exclude: /node_modules/, 
              loader: 'babel-loader',
              query: {
                plugins: ['transform-runtime'],
                presets:['es2015', 'react', 'stage-0']
              }
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
