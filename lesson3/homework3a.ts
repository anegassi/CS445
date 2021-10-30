let calcAverage = (a:number[]) =>{
    let  sum:number = 0;  
    for (let i:number = 0; i < a.length; i++){
        sum+= a[i];
    }
    return (`The Average of [${a}] is ${(sum/a.length)}`);
}
let a:number[] = [17, 9, 4, 82, 15, 36]; 
let b:number[] = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];


console.log(calcAverage(a));
console.log(calcAverage(b));


const FICA = 10, STATE = 5, MEDICARE = 12;
enum taxRates {
    FICA = 10, STATE = 5, MEDICARE = 12
};