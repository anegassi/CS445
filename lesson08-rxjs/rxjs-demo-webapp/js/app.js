/**
 * app.js
 */

const {map,filter}= rxjs.operators;
const print = (val) => {
    const p = document.createElement("p");
    p.innerHTML = val;
    document.querySelector("#mainContent")
        .appendChild(p);
};

const helloWorldObservable = rxjs.of("Hello World");
helloWorldObservable.subscribe(val => print(val));

const postsObservable = rxjs.from(
                                fetch('https://jsonplaceholder.typicode.com/posts/1')
                                .then(response => response.json())
                    );
postsObservable.subscribe(post => print("<b>Post Title is</b>:<br>" + post.title));

////////////
const node = document.getElementById("search");
//create observable that emits click events
const inputObs = rxjs.fromEvent(node, 'input'); 
inputObs.subscribe({
    next: event => console.log(`You just typed ${event.target.value}!`),
    error: err => console.log(`Oops... ${err}`),
    complete: () => console.log(`Complete!`),
});

///////////////////
const numbers = [1,2,3,4,5,6,7,8,9,10];
const arrayNumbersObservable = rxjs.from(numbers);
const evenNumbersObservable = arrayNumbersObservable.pipe(filter(n => n%2 == 0));
evenNumbersObservable.subscribe(n => console.log(n));
//console.log(numbers.filter(n => n%2 == 0));

