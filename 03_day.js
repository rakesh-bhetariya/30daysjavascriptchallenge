let number = -20;
number = 51
if(number > 0){
    console.log(`the number is plus ${number}`);
} else if (number < 0){
    console.log(`the number is minus ${number}`)
} else {
    console.log(`the number is 0`)
}

let age = 20;
if(age >= 18){
    console.log(`you can vote because your age is ${age}`);
} else {
    console.log(`you can not vote because your age is ${age}`)
}


let num1 = 15;
let num2 = 45;
let num3 = 30;

if(num1 > num2){
    if(num1 > num3){
        console.log(`this is the largest number from three number ${num1}`);
    } else {
        console.log(`this is the largest number from three number ${num3}`);
    }    
} else {
    if(num2 > num3){
        console.log(`this is the largest number from three number ${num2}`);
    } else {
        console.log(`this is the largest number from three number ${num3}`);
    }
}


const todate = new Date();
const today = todate.getDay();
let day = ''
switch(today){
    case 0 :
        day = 'Sunday'
        break;
    case 1 :
        day = 'Monday' 
        break;
    case 2 :
        day : 'Tuesday'
        break;
    case 3 :
        day = 'Wensday'
        break;
    case 4 :
        day = 'Thurday' 
        break;
    case 5 :
        day : 'Friday'
        break;    
    case 6 :
        day : 'Saturday'
        break;       
}

let marks = 75;
let grade = '';
// We use switch(true) to allow the evaluation of expressions within each case. ( i have no idea about this )
switch(true){
    case (marks <= 33) : 
        grade = 'F';
        break;
    case (marks >= 60) : 
        grade = 'D';
        break;
    case (marks >= 70) : 
        grade = 'C';
        break;
    case (marks >= 80) : 
        grade = 'B';
        break;
    case (marks >= 90) :
        grade = 'A';
        break;  
    default:
        grade = 'Invalid marks';
        break;      
}
console.log(grade)
console.log(`Today is ${day}`)

let nbr = 14;
let oddnum = nbr % 2 == 0 ? 'even num' : 'odd num';
console.log(oddnum) 


let year = 2020;
if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
    console.log(`this is year is leap ${year}`);
} else {
    console.log(`this year is not leap year ${year}`);
}
