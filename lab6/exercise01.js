const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function() {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) 
                reject({prime: false});
        }
        resolve({prime: num > 1});
    }, 500);
});


const  isPrimeAsync = async (num) => {
    let result = await isPrime(num);
    console.log(result);
}

console.log('start');
isPrimeAsync(6)
    .catch(err => console.log(err));
    //.catch(console.log)
console.log('end');
