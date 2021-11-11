
let postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1')
//postPromise.then(response => console.log(response.ok, response.status))
  //postPromise.then(response=> response.text())  // read the response and return as text
            //.then(result=> console.log(result))
  postPromise.then(response=> response.json())  //  parse the response as JSON
            .then(result => console.log(result));

