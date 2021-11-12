async function fetchPostById(postid) {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + postid);
        console.log(response)
    if (response.ok) {
            let json = await response.text();// .text and .json make the object to a promise
            //let json2 = await response.json();// you can only use one method  at a time 
            console.log(json);
            //console.log(json2);
        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }
    fetchPostById(2);
    