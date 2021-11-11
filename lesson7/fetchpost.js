 fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'cs445-2021/11/01',
            body: 'This is CS445 Lesson 7 Demo',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    .then((json) => console.log(json));
