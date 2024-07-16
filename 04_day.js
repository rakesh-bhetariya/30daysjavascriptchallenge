
for(let i = 1; i <=10; i++){
    console.log(i)
}

let num = 5
for(let i = 1; i <=10; i++){
    console.log(num * i)
} 

let summ = 1;
let tennumm = 10;
while(tennumm <= 10){
    summ += tennumm
} 
// i write this loop and this is wrong syntax and right syntax loop is below

let sum = 1;
let tennum = 10;
while (tennum > 0) {
    sum += tennum;
    tennum--;
}

// console.log(sum)


// let num = 10;
// while(num > 0){
//     console.log(num)
//     num--
// }

let num2 = 1
do{
    console.log(num2)
    num2++
}
while(num2 < 6);

let num3 = 5;
let factorial = 1;

do {
    factorial *= num3;
    num3--;
} while(num3 > 0)


let row = 4;
for(let i = 1; i <= row; i++){
    let pattern = '';
    for(let j = 0; j < i; j++){
        pattern += '* '
    }
    console.log(pattern)
} 
// above method is for print in 1 to 4 and below method is for 4 to 1

let rows = 0;
for(let i = 4; i >= rows; i--){
    let pattern = '';
    for(let j = 0; j < i; j++){
        pattern += '* '
    }
    console.log(pattern)
}


for(let i = 1; i < 11; i++){
    if(i == 7){
        continue;
    }
}

for(let i = 1; i < 11; i++){
    console.log(i);
    if(i == 7){
        break;
    }
}

