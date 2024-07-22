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