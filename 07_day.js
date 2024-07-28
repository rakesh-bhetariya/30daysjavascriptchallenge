const bookObj = {
    title : 'abc',
    author : 'someone',
    year : 1958,
    getDetails : function(){
        return `Book name is ${this.title} and this was publish in ${this.year}`;
    }
}

// console.log(bookObj);
// console.log(bookObj.title)
// console.log(bookObj.author)

// console.log(bookObj["title"])
// console.log(bookObj["author"])

console.log(bookObj.getDetails());


const bookObj2 = {
    title : 'abc',
    author : 'someone',
    year : 1958,
    getDetails : function(newyear){
        this.year = newyear
        return this.year
    }
}
bookObj2.getDetails(1962)
console.log(bookObj2)


const { getDetails, ...bookWithoutMethod } = bookObj2;
console.log(bookWithoutMethod);


const bookobj3 = {
    name : 'Library',
    bookArray : [
        {
            name : 'abc',
            genre : 'Fiction',
            year : 1834
        },
        {
            name : 'UG O',
            genre : 'Historical',
            year : 1892
        },
        {
            name : 'Bhagvat Geeta',
            genre : 'Holy',
            year : 0
        }
    ]
}

console.log(bookobj3)
for(const [key, value] of Object.entries(bookobj3)){
    if(key === 'name'){
        console.log(`Library name ${value}`)
    } else if (key === 'bookArray'){
        // value.forEach( (item) => console.log(item.name))
        value.map( (item) => console.log(item.name))
    }
}

for (const key in bookobj3) {
    if (bookobj3.hasOwnProperty(key)) {
      if (key === 'name') {
        console.log(`Library Name: ${bookobj3[key]}`);
      } else if (key === 'bookArray') {
        console.log("Book Titles:");
        bookobj3[key].forEach(book => {
          console.log(book.name);
        });
      }
    }
}

const keys = Object.keys(bookobj3);
console.log('Keys of the bookobj3 object:');
keys.forEach(key => console.log(key));

const values = Object.values(bookobj3);
console.log('Values of the bookobj3 object:');
values.forEach(value => console.log(value))

//  we also can use another loop over an array and we seen it in the day 6 while revised 

bookobj3.bookArray.forEach(book => {
    console.log(book.name, book.genre, book.year);
});

let bookNames = bookobj3.bookArray.map(book => book.name);
console.log(bookNames);

let historicalBooks = bookobj3.bookArray.filter(book => book.genre === 'Historical');
console.log(historicalBooks);

// You can use Object.keys(), Object.values(), or Object.entries() in combination with forEach() to iterate over the properties of an object.

Object.keys(bookobj3).forEach(key => {
    console.log(key, bookobj3[key]);
});

const keys2 = Object.keys(bookobj3);
console.log('Keys of the bookobj3 object:');
keys2.forEach(key => console.log(key));

Object.values(bookobj3).forEach(value => {
    console.log(value);
});

const values2 = Object.values(bookobj3);
console.log('Values of the bookobj3 object:');
values2.forEach(value => console.log(value))
  
Object.entries(bookobj3).forEach(([key, value]) => {
    console.log(key, value);
});

let i = 0;
while (i < bookobj3.bookArray.length) {
    console.log(bookobj3.bookArray[i].name);
    i++;
}

let j = 0;
do {
    console.log(bookobj3.bookArray[j].name);
    j++;
} while (j < bookobj3.bookArray.length);
    