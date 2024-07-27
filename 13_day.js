const { addNumbers, person } = require('./common_folder/common_module');
// const { addNumbers } = require('./common_folder/common_module'); when we export function without curly braces at that time we can import like that way and other we have to import like above way and when use es6 that time import like this way import { addNumbers } from './addNumbers.js';
// import { add, subtract, multiply, divide } from "./common_folder/multiple_function"
// import greet from './common_folder/common_module';
const result = addNumbers(10, 2);
console.log(result)

console.log(person.name)

// console.log('Addition:', add(5, 3)); 
// console.log('Subtraction:', subtract(5, 3));
// console.log('Multiplication:', multiply(5, 3));

// try {
//   console.log('Division:', divide(5, 0));
// } catch (error) {
//   console.error(error.message); 
// }

// const message = greet('rakesh');
// console.log(message);
