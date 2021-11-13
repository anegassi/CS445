/**
 * app.js
 */
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
