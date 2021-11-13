/**
 * index.js
 */
import { Observable, of, from, interval } from "rxjs";
import { take, map, filter } from "rxjs/operators";

// Example 1: Manually create Observable data
// const helloWorldObservable = Observable.create( observer => {
//     observer.next( "Hello" );
//     observer.next( "World" );
// });
// helloWorldObservable.subscribe(val => console.log(val));

// // Example 2: Manually create Observable data using the 'of' operator
// const helloWorldObservable2 = of( "Hello2", "World2" );
// helloWorldObservable2.subscribe(val => console.log(val));

// // Example 3: Observable data from Promise
// const helloWorldPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello World"), 2000);
// });
// const helloWorldPromiseObservable = from(helloWorldPromise);
// helloWorldPromiseObservable.subscribe(result => console.log(result));

// // Example 4: Observable data from array
// const arrayObservable = from([1, 2, 3]);
// arrayObservable.subscribe(n => console.log(n));

// // Example 5: Observable data emitted from an interval
// const intervalNumbersObservable = interval(1000);
// const takeFirstFiveNumbersObservable = intervalNumbersObservable.pipe(take(5));
// takeFirstFiveNumbersObservable.subscribe(n => console.log(new Date()));

// // Example 6: Observable data from array using map, filter, reduce etc.
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const arrayNumbersObservable = from(numbers);
// const squaresNumbersObservable = arrayNumbersObservable.pipe(map(n => n*n));
// squaresNumbersObservable.subscribe(sq => console.log(sq));

// // Example 7: Observable data from array using map, filter, reduce etc.
const numbers = [1,2,3,4,5,6,7,8,9,10];
const arrayNumbersObservable = from(numbers);
const evenNumbersObservable = arrayNumbersObservable.pipe(filter(n => n%2 == 0));
evenNumbersObservable.subscribe(n => console.log(n));
