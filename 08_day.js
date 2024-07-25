// Task 1 : use template literals to create a string that includes variable for person's name and age and log the string to the console

function printstringliter(name, age){
    console.log(`i am ${name} and my age is ${age}`)
}

printstringliter('Rakesh', 22);

// Task 2 : create a multi line string using teplate literals and log it to the console 

console.log(`we can using backticks to define string literals and
    we can insert a varible so such value to make it dynamic 
    just we need do is to wrap that variable with curly braces 
    and starting of the curly braces use dollar sign `)


const numArray = [10, 20, 30, 40, 50];

const [first, second] = numArray;

console.log(first);
console.log(second);

const book = {
    title : 'Bhagvat geeta',
    author : 'Krishna',
    year : 'only he knows'
}

const {title, author} = book;

console.log(title);
console.log(author);

const numberArray = [1, 2, 3];

const newArray = [...numberArray, 4, 5, 6, 7];
console.log(newArray)

function sum(...num){
    return num.reduce( (acc, value) => acc + value, 0);
}

console.log(sum(1,3,4))

function multiply(a, b=1){
    return a * b
}

console.log(multiply(5*5));
console.log(multiply(2));


const name2 = 'Geeta';
const author2 = 'Krishna';
const year2 = 'only he knows';

const book2 = {
    name2,
    author2,
    year2,
    getSummary() {
        return `${this.name2} was written by ${this.author2} and its origin year is ${this.year2}.`;
    }
};

console.log(book2);
console.log(book2.getSummary());


const name3 = 'Geeta';
const author3 = 'Krishna';
const year3 = 'only he knows';

const book3 = {
    name: name3,
    author: author3,
    year: year3,
    getSummary: function() {
        return `${this.name} was written by ${this.author} and its origin year is ${this.year}.`;
    }
};

console.log(book3);
console.log(book3.getSummary());


// book 3 is without using object enhanced method and book 2 is using enhanced object literals 
// In JavaScript, a "literal" is a notation for representing a fixed value directly in the source code.


const propName1 = 'title';
const propName2 = 'author';
const propName3 = 'year';

const book4 = {
    [propName1]: 'Bhagvat Geeta',
    [propName2]: 'Krishna',
    [propName3]: 'only he knows'
};

console.log(book4);