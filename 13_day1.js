import * as mathUtils from './common_folder/mathutils';

console.log('PI:', mathUtils.PI); 
console.log('E:', mathUtils.E);

console.log('Addition:', mathUtils.add(5, 3)); 
console.log('Subtraction:', mathUtils.subtract(5, 3));
console.log('Multiplication:', mathUtils.multiply(5, 3));

try {
  console.log('Division:', mathUtils.divide(5, 0));
} catch (error) {
  console.error(error.message);
}