// 15. Alternative Syntax

const names = require('./names.js');
const sayHi = require('./utils.js');
const data = require('./alternative-flavor.js');
console.log(data);

sayHi('Susan');
sayHi(names.john);
sayHi(names.kerim);
