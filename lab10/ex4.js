const n = 4;
const fibo = (function () {
    const memo = {};
    const calcFibo = function (n) {
        let fib;
        if (n in memo) {
            fib = memo[n];
        }
        else {
            if (n == 0 || n == 1) fib = n;
            else {
                fib = calcFibo(n - 1) + calcFibo(n - 2);
                memo[n] = fib;
            }
        }
        return fib;
    }
    return calcFibo;
})();
function logResult(n) {
    if (n === 1) return "st";
    if (n === 2) return "nd";
    if (n === 3) return "rd";
    return "th"
}
console.time(`Execution time for the ${n}${logResult(n)} Fibonacci number is: `);
console.log(`Memoized Solution: The ${n}${logResult(n)} Fibonacci number is: ${fibo(n)}`);
console.timeEnd(`Execution time for the ${n}${logResult(n)} Fibonacci number is: `);