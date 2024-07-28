function checkoddeven(num){
    if(num % 2 ==0){
        console.log(`this num is even ${num}`)
    } else {
        console.log(`this num is odd ${num}`)
    }
}

checkoddeven(10)


function squrethenum(num){
    
    if(num && num > 0){
        console.log(num * num)
    } else {
        console.log(`this is not a valid number ${num}`)
    }
}
squrethenum('5')
squrethenum('5d')

function findthemax(num1, num2){
    if(Number(num1) && Number(num2)){
        if(num1 > num2){
            console.log(`${num1} is the maximum from ${num1} & ${num2}`)
        } else {
            console.log(`${num2} is the maximum from ${num1} & ${num2}`)
        }
    } else {
        console.log(`this is not a valid number ${num1} or ${num2}`);
    }
} 

findthemax(5, 's9')

// num1 is 5, which is truthy.
// num2 is 's9', which is also truthy (because non-empty strings are considered truthy in JavaScript). when we not use Number method 


function concatthestr(str1, str2){
    if(String(str1) && String(str2)){
        console.log(`${str1} ${str2}`)
    }
}

concatthestr("rakesh", 'bhetariya')

// let sumfunction = (num1, num2) => num1 + num2;
// let sumfunction = (num1, num2) => {
//     return num1 + num2
// };

let sumfunction = (num1, num2) => {
    if(Number(num1) && Number(num2)){
        return num1 + num2
    } else {
        return 'enter valid number'
    }
};

let sum = sumfunction(5, '2s');
console.log(sum)


let greetingfn = (name, age=25) => {
    return `you are ${name} and your ${age} year old`
};

// let greeting = greetingfn('Rakesh', 32);
let greeting = greetingfn('Rakesh');
console.log(greeting)

// higher order function  a function that takes a function as an arguments this function known as a higher order function 

function hof(fn, num){
    // for(const n of num){
    //     fn()
    // }

    for(let i = 0; i <= num; i++){
        fn()
    }
}

function printhello(){
    console.log('Hello');
}

hof(printhello, 5);


function hof2(fn1, fn2, value){
    const fn1result = fn1(value);
    return fn2(fn1result)
}

function fn1(value){
    return value+5
}

function fn2(value){
    return value-4
}

console.log(hof2(fn1, fn2, 5))

function add(num1, num2, cb){
    console.log(cb,"<<<<<<<<<<<<<")
    let result = num1 + num2;
    cb(result)
};

// add(2, 4, function(val){
//     console.log(val)
// }) 1st way to write higher order function

// add(2, 10, (val) => console.log(val, "<<")) 2nd way 

// add(2, 15, print(23)); in this we got an type error cb is not a function  why we can not call this function at that point of time 
// In your provided code, you are calling the print function without passing any arguments to it, and you are passing the 
// result of print() (which is undefined since print doesn't return anything) as the third argument to the add function. 
// This will result in an error because add is likely expecting a function as its third argument but receives undefined instead.

add(2, 15, print);

function print(val){
    console.log(val)
}

/* >>>>>>
        in JavaScript, you can return a function from inside another function. 
        This is a powerful feature that allows you to create higher-order functions and utilize closures. 
        When you return a function from another function, the returned function maintains access to the variables and parameters of the 
        outer function even after the outer function has finished executing.
<<<<<<<*/

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');

/* >>>>>>
    When outerFunction is called with the argument 'outside', it returns innerFunction.
    The returned innerFunction is stored in newFunction, which is then called with the argument 'inside'.
<<<<< */