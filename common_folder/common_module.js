// Day 13 >>>>>



// export function addNumbers(num1, num2){
//     try {
//         return Number(num1) + Number(num2)
//     } catch (error) {
//         console.log('Give a valid Numbers')
//     }
// }  import { addNumbers } from './addNumbers.js';

function addNumbers(num1, num2){
    try {
        return Number(num1) + Number(num2)
    } catch (error) {
        console.log('Give a valid Numbers')
    }
}

const person = {
    name : 'Rakesh',
    age : 22,
    greet : function(){
        console.log(`Hello my name is ${this.name} and i am ${this.age} years young`)
    }
}

function greet(name) {
    return `Hello, ${name}!`;
}
  
// Export the function as the default export
export default greet;

module.exports = {
    addNumbers,
    person
}; // for that we need to import like that way const addNumbers = require('./addNumbers');
//  when we try to export a objct or that kind of thing so we need to export at the end because we do not have an access of that variable or object