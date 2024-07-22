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

// higher order function 

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