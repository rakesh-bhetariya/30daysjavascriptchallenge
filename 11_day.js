function waitAndLogMessage(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('this is timeput error')
        }, 2000)
        // if (seconds <= 0) {
        //     reject('Invalid number of seconds. Must be greater than 0.');
        // } else {
        //     setTimeout(() => {
        //         resolve(`Message resolved after ${seconds} seconds`);
        //     }, seconds * 1000);
        // }
        // setTimeout(() => {
        //     resolve(`Message resolved after ${seconds} seconds`);
        // }, seconds * 1000);
    });
}


waitAndLogMessage(2).then(message => {
    console.log(message);
}).catch(error => {
    console.error('Promise rejected:', error);
});

async function logMessage() {
    try {
        console.log('123');
        const message = await waitAndLogMessage(2);
        console.log(message);
    } catch (error) {
        console.error('Error:', error);
    }
}


logMessage();

function fetchDataFromServer(data, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Fetched ${data}`);
        }, delay);
    });
}


function fetchSequence() {
    fetchDataFromServer('data1', 1000)
    .then(result1 => {
        console.log(result1);
        return fetchDataFromServer('data2', 2000);
    })
    .then(result2 => {
        console.log(result2);
        return fetchDataFromServer('data3', 1500);
    })
    .then(result3 => {
        console.log(result3);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// function fetchSequence() {
//     fetchDataFromServer('data1', 1000, (error1, result1) => {
//         if (error1) {
//             console.error('Error:', error1);
//         } else {
//             console.log(result1);
//             fetchDataFromServer('data2', 2000, (error2, result2) => {
//                 if (error2) {
//                     console.error('Error:', error2);
//                 } else {
//                     console.log(result2);
//                     fetchDataFromServer('data3', 1500, (error3, result3) => {
//                         if (error3) {
//                             console.error('Error:', error3);
//                         } else {
//                             console.log(result3);
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }

fetchSequence();

async function fetchSequence1() {
    try {
        const result1 = await fetchDataFromServer('data1', 1000); 
        console.log(result1); 

        const result2 = await fetchDataFromServer('data2', 2000);
        console.log(result2);

        const result3 = await fetchDataFromServer('data3', 1500);
        console.log(result3);
    } catch (error) {
        console.error('Error:', error);
    }
}


fetchSequence1();

// function fetchDataFromAPI(url) {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Fetched data:', data);
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
// }

const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

// fetchDataFromAPI(apiURL);

// const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1 resolved'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Promise 3 resolved'));

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1 resolved'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Promise 2 rejected'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Promise 3 resolved'));


Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values , "<<<<<<,"); 
    })
    .catch((error) => {
      console.error(error);
    });

// in this there is a problem because from all the promise if one promise got rejected then all catch block will be execute so when we can did in this case 

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
            } else if (result.status === 'rejected') {
                console.log(`Promise ${index + 1} rejected with reason:`, result.reason);
            }
        });
});

// instead of using Promise.all method we can use allSettled method and inside this method we can iterate over the resule object

Promise.race([promise1, promise2, promise3])
    .then((value) => {
      console.log('First resolved promise value:', value);
    })
    .catch((error) => {
      console.error('First rejected promise reason:', error);
    });

//  but suppose if we want to find any specific promise result then how we can did so for this we can below fucntion 

function logSecondSettled(promises) {
    let settledCount = 0;
    return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
        promise
            .then((value) => {
                settledCount++;
                if (settledCount === 2) {
                    resolve(value);
                }
            })
            .catch((error) => {
                settledCount++;
                if (settledCount === 2) {
                    reject(error);
                }
            });
        });
    });
}

logSecondSettled([promise1, promise2, promise3])
  .then((value) => {
    console.log('Second settled promise value:', value);
  })
  .catch((error) => {
    console.error('Second settled promise reason:', error);
  });