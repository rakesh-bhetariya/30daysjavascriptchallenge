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
        value.forEach( (item) => console.log(item.name))
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