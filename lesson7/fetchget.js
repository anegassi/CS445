
let postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1')
console.log(postPromise)
//postPromise.then(response => console.log(response.ok, response.status))
  //postPromise.then(response=> response.text())  // read the response and return as text
            //.then(result=> console.log(result))
  let responseobj=postPromise.then(response=> response.json())
        console.log(responseobj)  //  parse the response as JSON
          responseobj.then(result => console.log(result));

