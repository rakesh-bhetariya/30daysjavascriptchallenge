function outterfn(){
    let num = 10;
    function innerfn(){
        console.log(num, "<<<<")
    }

    return innerfn()

    // return function innerfn(){
    //     console.log(num, "<<<<")
    //     return num
    // }

    // let num = 10;
    // function innerfn(){
    //     console.log(num, "<<<<")
    // }

    // return innerfn()
}

console.log(outterfn())

// const variablefn = outterfn();
// variablefn();

function createCounter() {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

const counter = createCounter();

counter.increment();
console.log(counter.getValue());

counter.increment();
console.log(counter.getValue());


function createUniqueIdGenerator() {
    let lastId = 0;

    return function() {
        lastId++;
        return lastId;
    };
}


const generateUniqueId = createUniqueIdGenerator();

console.log(generateUniqueId(), "<<<><>");
console.log(generateUniqueId(), "****");
console.log(generateUniqueId(), "++++");


// function createGreeter(name) {
//     function greets() {
//         console.log(`Hello, ${name}!`);
//     };

//     return greets()
// }

// console.log(createGreeter('Rakesh'));
// console.log(createGreeter('Nayan')); in this syntax we got different result and in the below method we also got different method so keep in mind why this behavior happen 


function createGreeter(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const rakeshgreets = createGreeter('Rakesh');
const nayangreets = createGreeter('Nayan');


rakeshgreets();
nayangreets();

function createFunctions() {
    let functions = [];

    // for (let i = 0; i < 5; i++) {
    //     functions.push((function(index) {
    //         return function() {
    //             console.log(index);
    //         };
    //     })(i));
    // }

    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            console.log(i);
        });
    }

    return functions;
}

const functionsArray = createFunctions();

functionsArray[0]();
functionsArray[1]();
functionsArray[2]();
functionsArray[3]();
functionsArray[4]();


function createItemManager() {
    let items = []; 

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
        listItems: function() {
            console.log('Items:', items);
        }
    };
}


const itemManager = createItemManager();

itemManager.addItem('apple'); 
itemManager.addItem('banana');
itemManager.listItems(); 

itemManager.removeItem('apple');
itemManager.listItems();

itemManager.removeItem('grape');

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args); 
        if (cache[key]) {
            console.log('Fetching from cache:', key);
            return cache[key];
        } else {
            console.log('Computing result for:', key);
            const result = fn(...args);
            cache[key] = result; 
            return result;
        }
    };
}

function slowFunction(num) {
    let result = 0;
    for (let i = 0; i < 1e6; i++) {
        result += num;
    }
    return result;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(10));
console.log(memoizedSlowFunction(10));

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('Fetching from cache:', key);
            return cache[key];
        } else {
            console.log('Computing result for:', key);
            const result = fn(...args);
            cache[key] = result; 
            return result;
        }
    };
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));