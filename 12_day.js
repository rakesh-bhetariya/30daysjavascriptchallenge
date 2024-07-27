function errorFn() {
    throw new Error('This is an intentional error.');
}

try {
    errorFn();
} catch (error) {
    console.error('An error occurred:', error.message);
}

// Function to divide two numbers
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return numerator / denominator;
}


try {
    const result = divideNumbers(10, 0); 
    console.log('Result:', result);
} catch (error) {
    console.error('An error occurred:', error.message);
}


function exampleFunction() {
    try {
      console.log('In the try block: Starting execution.');
    //   throw new Error('Something went wrong.');
    } catch (error) {
      console.log('In the catch block: An error occurred -', error.message);
    } finally {
      console.log('In the finally block: This will always execute.');
    }
}
  
exampleFunction();

// try {
//     throw new Error('An error occurred');
// } catch (error) {
//     console.log('Error message:', error.message);
//     console.log('Error name:', error.name);
//     console.log('Error stack:', error.stack);
//     console.log('Error toString:', error.toString());
// }



class CustomError extends Error {
    constructor(status, name, message) {
      super(message);
      this.name = name;
      this.status = status
    }

    toObject() {
        return {
          status: this.status,
          name: this.name,
          message: this.message
        };
    }
}

class Success {
    constructor(data) {
      this.status = 'success';
      this.data = data;
    }
}
  

function riskyFunction() {
    throw new CustomError('This is a custom error message.');
}
  

try {
    riskyFunction();
} catch (error) {
    if (error instanceof CustomError) {
      console.error('Caught a CustomError:', error.message);
    } else {
      console.error('Caught an unexpected error:', error.message);
    }
}


function validateInput(input) {
    if (input.trim() === '') {
        //throw new CustomError('Error' ,'ValidationError', 'Input cannot be empty.');
        throw new CustomError(400, 'ValidationError', 'Input cannot be empty.');
    }
    console.log('Input is valid:', input);
}

try {
    validateInput(''); 
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`Caught a ${error.name}: >>>>>`, error.toObject());
    } else {
        console.error('Caught an unexpected error:', error.message);
    }
}
  
try {
    validateInput('Valid input'); 
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`Caught a ${error.name}: *****`, error.toObject());
    } else {
        console.error('Caught an unexpected error:', error.message);
    }
}

// function randomPromise() {
//     return new Promise((resolve, reject) => {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         resolve('Promise resolved successfully!');
//       } else {
//         reject('Promise rejected.');
//       }
//     });
// }

randomPromise()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('An error occurred:', error);
});

// function randomPromise() {
//     return new Promise((resolve, reject) => {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         resolve(new Success({ message: 'Promise resolved successfully!' }));
//       } else {
//         reject(new CustomError(500, 'RandomError', 'Promise rejected.'));
//       }
//     });
// }

function randomPromise() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve(new Success({ data: randomNumber}));
      } else {
        reject(new CustomError(500, randomNumber));
      }
    });
}


async function handleRandomPromise() {
    try {
      const result = await randomPromise();
      console.log(result); // Log the success response
    } catch (error) {
      if (error instanceof CustomError) {
        console.error('Caught a CustomError:', error.toObject());
      } else {
        console.error('Caught an unexpected error:', error); 
      }
    }
}
  

handleRandomPromise();