function factorial(n) {
    if (n < 0) return -1; 
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
  

const testCases = [0, 1, 5, 7, 10];
  
testCases.forEach(num => {
    console.log(`Factorial of ${num} is ${factorial(num)}`);
});

function fibonacci(n) {
    if (n < 0) return -1;
    if (n === 0) return 0;
    if (n === 1) return 1; 
    return fibonacci(n - 1) + fibonacci(n - 2);
}
  

const testCases2 = [0, 1, 2, 5, 10, 15];
  
testCases2.forEach(num => {
    console.log(`Fibonacci of ${num} is ${fibonacci(num)}`);
});

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}
  
const teastCaes3 = [
    [],
    [1],
    [1, 2, 3],
    [5, 10, 15],
    [10, -10, 20, -20]
];
  
teastCaes3.forEach(arr => {
    console.log(`Sum of ${arr} is ${sumArray(arr)}`);
});

function findMax(arr) {
    if (arr.length === 0) return -Infinity;
    if (arr.length === 1) return arr[0];
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}
  

const teastCaes4 = [
    [],
    [1],
    [1, 2, 3],
    [5, 10, 15],
    [10, -10, 20, -20],
    [-5, -10, -15, -1]
];
  
teastCaes4.forEach(arr => {
    console.log(`Max of ${arr} is ${findMax(arr)}`);
});

function reverseString(str) {
    if (str === "") return ""; 
    return reverseString(str.slice(1)) + str[0];
}
  

const teastCaes5 = [
    "",
    "a",
    "abc",
    "hello",
    "JavaScript",
    "recursive"
];
  
teastCaes5.forEach(str => {
    console.log(`Reverse of "${str}" is "${reverseString(str)}"`);
});

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}
  
const teastCaes6 = [
    "",
    "a",
    "aa",
    "abc",
    "racecar",
    "madam",
    "step on no pets",
    "not a palindrome"
];
  
teastCaes6.forEach(str => {
    console.log(`Is "${str}" a palindrome? ${isPalindrome(str)}`);
});

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
  
    const mid = Math.floor((left + right) / 2);
  
    if (arr[mid] === target) return mid; 
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right); 
}
  

const teastCaes7 = [
    { array: [], target: 3 },
    { array: [1], target: 1 },
    { array: [1, 2, 3, 4, 5], target: 3 },
    { array: [1, 2, 3, 4, 5], target: 6 },
    { array: [10, 20, 30, 40, 50], target: 30 },
    { array: [10, 20, 30, 40, 50], target: 15 }
];
  
teastCaes7.forEach(({ array, target }) => {
    console.log(`Index of ${target} in [${array}] is ${binarySearch(array, target)}`);
});

function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    const first = arr[0] === target ? 1 : 0;
    return first + countOccurrences(arr.slice(1), target);
}  

const teastCaes8 = [
    { array: [], target: 3 },
    { array: [1], target: 1 },
    { array: [1, 2, 3, 4, 5, 3], target: 3 },
    { array: [1, 2, 3, 4, 5], target: 6 },
    { array: [10, 20, 30, 30, 30, 50], target: 30 },
    { array: [10, 20, 30, 40, 50], target: 15 }
];
  
teastCaes8.forEach(({ array, target }) => {
    console.log(`Occurrences of ${target} in [${array}] is ${countOccurrences(array, target)}`);
});

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
  

function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
}
  

const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const root3 = null;
  
const teastCaes9 = [root1, root2, root3];
  
teastCaes9.forEach((root, index) => {
    console.log(`In-order traversal of tree ${index + 1}:`);
    inOrderTraversal(root);
    console.log('');
});

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
  

function calculateDepth(node) {
    if (node === null) return 0; 
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
  

const root11 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
const root21 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const root31 = null;
const root4 = new TreeNode(1);
const root5 = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, null, new TreeNode(5)));
  
const teastCaes10 = [root11, root21, root31, root4, root5];
  
teastCaes10.forEach((root, index) => {
    console.log(`Depth of tree ${index + 1}: ${calculateDepth(root)}`);
});


// function TreeNode(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
// }
  

// function calculateDepth(node) {
//     if (node === null) return 0; 
//     const leftDepth = calculateDepth(node.left);
//     const rightDepth = calculateDepth(node.right);
//     return Math.max(leftDepth, rightDepth) + 1;
// }
  

// const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
// const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
// const root3 = new TreeNode(1, new TreeNode(2), null);
// const root4 = null; 
  
// const teastCaes6 = [root1, root2, root3, root4];
  
// teastCaes6.forEach((root, index) => {
//     console.log(`Depth of tree ${index + 1}: ${calculateDepth(root)}`);
// });