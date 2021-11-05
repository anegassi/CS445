"use strict";
const isPrime = (num) => 
// ive seen in your code that you dont use a return, why do you remove it
new Promise((resolve, reject) => {
    setTimeout(function () {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                reject({ prime: false });
            }
        }
        resolve({ prime: true });
    }, 500);
});
console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');
