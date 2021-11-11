async function fetchPostById(postid) {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + postid);
        if (response.ok) {
            let json = await response.json();
            console.log(json);
        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }
    fetchPostById(2);
    