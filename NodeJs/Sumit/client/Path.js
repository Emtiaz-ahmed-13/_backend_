// const people = ['sakib', 'tamim', 'emtiaz'];

// console.log(module);

// module.exports = people;

const path = require('path');

const myPath = '/Users/emtiazahmed/Developer/backend/NodeJs/Sumit/client/Path.js';

console.log(path.basename(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));
