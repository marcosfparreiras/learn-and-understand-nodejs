console.log('Output from greet.js:');
var greet1 = require('./greet')

console.log('\nOutput from greet2.js:');
var greet2 = require('./greet2')

console.log('\nOutput from calling greet2.greet():');
greet2.greet();
