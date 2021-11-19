const { from } = rxjs;
const { filter } = rxjs.operators;

window.onload = function() {  
   formsubmit = document.querySelector("#formsubmit");
        formsubmit.addEventListener("submit", fetchBooks(document.getElementById('searchString').value) );
}

async function fetchBooks(publisherName) {
    let result = await fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/list');// copy the link here
    let bookobj = await result.json();
    renderbook(bookobj,publisherName);
}

function renderbook(bookobj,publisherName) {
    const tablebody= document.querySelector("#tablebody")
    tablebody.innerHTML="";
    bookObservable= from(bookobj) .pipe(
            filter(obj => obj.publisher === publisherName) )
    bookObservable.subscribe(obj => {
            let template = `
               <tr>
                 <td> </td>
                 <td>${obj.isbn} </td>
                 <td> ${obj.title} </td>
                 <td> ${obj.overdueFee} </td>
                 <td> ${obj.publisher} </td>
                 <td> ${obj.datePublished} </td>
               </tr>
            `;
            tablebody.appendChild(template);
        });
}