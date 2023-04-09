//Modules - encapsulated code , only share minimum
//common-js - every file is module by default

const names = require('./03_modules_part_names');
const sayHello = require('./04_utils');
const person = require('./05_alternative_flavour').singlePerson;
const item = require('./05_alternative_flavour').item;
require('./07_mind_grenade');

sayHello(names.john);
sayHello(names.peter);

console.log(person);
console.log(item);