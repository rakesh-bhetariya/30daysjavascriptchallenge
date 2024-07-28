let arr1 = [1,2,3,4,5];
console.log(arr1);

// first element
let first = arr1[0];

// last element 
let last = arr1[arr1.length - 1];
console.log(first, last);

// add number 6 in the arr1 array 

arr1.push(6);
console.log(arr1)

// remove the last element of the array 
arr1.pop();
console.log(arr1)

arr1.shift();
console.log(arr1)

arr1.unshift(1);
console.log(arr1);

for(let i = 0; i < arr1.length; i++){
    // console.log(arr1[i]);
}

arr1.forEach((element, index) => {
    console.log(arr1[index])
})

// 2 dimensional array 

const twodimensionalArray = [[1, 2, 3], ['a', 'b', 'c'], ['A', 'B', 'C']];

for(let i = 0; i < twodimensionalArray.length; i++){

    console.log(twodimensionalArray[i],"<<<<<<<<<")

    for(let j = 0; j < twodimensionalArray[i].length; j++){

        console.log(twodimensionalArray[i][j])
    }
}

let flatArray = twodimensionalArray.flat();
console.log(flatArray);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubletheNum = myNums.map( (num) => num * 2);
console.log(doubletheNum);

const evenNum = myNums.filter( (num) => num % 2 == 0);
console.log((evenNum));

const sumtheNum = myNums.reduce( (acc, num) => acc + num, 0);
console.log(sumtheNum)

let users = [
    {name: "Rakesh", age: 25},
    {name: "Nayan", age: 30},
    {name: "Raju", age: 35}
];
  
let names = users.map(user => user.name);
console.log(names);

let youngUsers = users.filter(user => user.age < 30);
console.log(youngUsers);

/* 
   these are common uses of an reduce method 
*/

// Calculating averages: Summing and then dividing by the count.
let numbers = [1, 2, 3, 4, 5];
let average = numbers.reduce((accumulator, currentValue, index, array) => {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    } else {
        return accumulator;
    }
}, 0);
console.log(average); 

// Flattening arrays: Converting an array of arrays into a single array.
let arrays = [[1, 2], [3, 4], [5, 6]];
let flattened = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened);

// Counting occurrences: Counting the frequency of items in an array. 
let items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let count = items.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});
console.log(count);

// reduce method overn an object 
let products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
];
  
let totalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);
console.log(totalPrice);


let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 35 },
    { name: 'Charlie', age: 30 },
    { name: 'Alice', age: 40 }
];
  
let nameCount = people.reduce((accumulator, person) => {
    if (accumulator[person.name]) {
      accumulator[person.name]++;
    } else {
      accumulator[person.name] = 1;
    }
    return accumulator;
}, {});
console.log(nameCount);

let averageAge = people.reduce((acc, val, index, array) => {

    acc += val.age
    if(index === array.length - 1){
        return acc / array.length
    } else {
        return acc
    }
}, 0)

console.log(averageAge,"----")

