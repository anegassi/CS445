/**
 * app.ts
 * 
 * @author okalu
 * @since 2021-10-29
 */
const calculateAverage = function(numbers: number[]): [number[], number] {
    let result: [number[], number] = [numbers, 0];
    let sum: number = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    result[1] = sum/numbers.length;
    return result;
}

const numbers1 = [17, 9, 4, 82, 15, 36];
const result1 = calculateAverage(numbers1);
console.log(`The Average of [${result1[0]}] is ${result1[1].toFixed(2)}`);

const numbers2 = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
const result2 = calculateAverage(numbers2);
console.log(`The Average of [${result2[0]}] is ${result2[1].toFixed(2)}`);
