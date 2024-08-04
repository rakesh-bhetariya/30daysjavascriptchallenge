let str = "I am learning javascript. JavaScript is fun! javascript is versatile.";

let regex = /javascript/gi;

let matches = str.match(regex);

console.log(matches);


let str2 = "There are 123 apples, 45 bananas, and 6789 oranges.";

// let regex2 = /\d/g; 
// \d: Matches any digit (equivalent to [0-9]).
// The + Quantifier In regular expressions, the + quantifier is used to match one or more occurrences of the preceding element. It is a greedy quantifier, meaning it will match as many occurrences as possible.
// \d: Matches any single digit (0, 1, 2, ..., 9).
// \d+: Matches a sequence of one or more digits. This means it will match sequences like 1, 23, 456, 7890, etc.

let regex2 = /\d+/g;

let matches2 = str2.match(regex2);

console.log(matches2);


let str3 = "Rakesh and Nayan are Going to the Market to buy Apples and Oranges.";
// let str3 = "Rakesh and Nayan are GOing to the Market to buy Apples and Oranges.";
// \b asserts a word boundary, [A-Z] matches any capital letter, [a-z]* matches zero or more lowercase letters
// let regex3 = /\b[A-Z]*/g;
// let regex3 = /\b[A-Z][a-z]/g;
let regex3 = /\b[A-Z][a-z]*\b/g;

let matches3 = str3.match(regex3);


console.log(matches3);

let phoneNumber5 = "(123) 456-7890";


let regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;


let matches5 = phoneNumber5.match(regex5);


if (matches5) {
    let areaCode5 = matches5[1];
    let centralOfficeCode5 = matches5[2];
    let lineNumber5 = matches5[3];
    console.log(`Area Code: ${areaCode5}`);
    console.log(`Central Office Code: ${centralOfficeCode5}`);
    console.log(`Line Number: ${lineNumber5}`);
} else {
    console.log("No match found.");
}


let email6 = "user@example.com";

// (\w+) captures the username, @ matches the @ symbol, (\w+\.\w+) captures the domain
let regex6 = /^(\w+)@(\w+\.\w+)$/;

let matches6 = email6.match(regex6);

if (matches6) {
    let username6 = matches6[1];
    let domain6 = matches6[2];
    console.log(`Username: ${username6}`);
    console.log(`Domain: ${domain6}`);
} else {
    console.log("No match found.");
}


let text7 = "Hello world, this is a test.";

// ^ asserts the position at the start of the string, \b asserts a word boundary, \w+ matches one or more word characters
let regex7 = /^\w+/;

let matches7 = text7.match(regex7);


if (matches7) {
    console.log(`Match: ${matches7[0]}`);
} else {
    console.log("No match found.");
}

let text8 = "This is a test sentence.";

// \b asserts a word boundary, \w+ matches one or more word characters, $ asserts the position at the end of the string
let regex8 = /\b\w+$/;

let matches8 = text8.match(regex8);


if (matches8) {
    console.log(`Match: ${matches8[0]}`);
} else {
    console.log("No match found.");
}


let password9 = "Password1!";

// Define the regular expression to validate the password
// (?=.*[a-z]) ensures at least one lowercase letter
// (?=.*[A-Z]) ensures at least one uppercase letter
// (?=.*\d) ensures at least one digit
// (?=.*[\W_]) ensures at least one special character (non-word character or underscore)
// .{8,} ensures the password is at least 8 characters long
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;


let isValid9 = regex9.test(password9);

if (isValid9) {
    console.log("Password is valid.");
} else {
    console.log("Password is invalid.");
}


let url10 = "https://www.example.com/path?query=123";


// ^ matches the start of the string
// (https?|ftp) matches the protocol (http, https, or ftp)
// :\/\/ matches the "://" part
// [^\s/$.?#].[^\s]* matches the domain and path (any non-space characters except specific reserved characters)
// $ matches the end of the string
let regex10 = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;


let isValidUrl10 = regex10.test(url10);

if (isValidUrl10) {
    console.log("URL is valid.");
} else {
    console.log("URL is invalid.");
}







