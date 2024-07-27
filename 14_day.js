class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`The updated age is ${this.age}.`);
    }

    static getGenericGreeting() {
        return "Hello! This is a generic greeting.";
    }

    get fullDetail() {
        return `${this.name} ${this.age}`;
    }

    set fullDetail(value) {
        const [name, age] = value.split(' ');
        this.name = name;
        this.age = age;
    }
}
  

const person = new Person('Rakesh', 20);

console.log(person.getGreeting());

person.updateAge(21);

class Student extends Person {
    static numberOfStudents = 0;

    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.numberOfStudents += 1;
    }
  
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
    static getNumberOfStudents() {
        return `Total number of students: ${Student.numberOfStudents}`;
    }
}

const student = new Student('Nayan', 20, 'S123456');
const student2 = new Student('Jessica', 22, 'S654321');
console.log(student.getStudentId());
console.log(student.getGreeting());

console.log(Person.getGenericGreeting());
console.log(Student.getNumberOfStudents());
console.log(person.fullDetail); 

const person2 = new Person('Rahul', 30);

console.log(person2.fullDetail);


class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance >= 0 ? initialBalance : 0;
    }


    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.#balance}.`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
                console.log(`Withdrew ${amount}. New balance is ${this.#balance}.`);
            } else {
                console.log('Insufficient funds.');
            }
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new Account(100);

account.deposit(50);
account.withdraw(30);

// Attempt to directly access the private balance (will throw an error)
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
// Get the balance using the method
console.log(`Current balance is ${account.getBalance()}`);