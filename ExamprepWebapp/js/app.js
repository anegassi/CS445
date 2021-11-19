/**
 * 
 */
// console.log("welcome to my books");
"use strict";


window.onload = function () {
  
    const txTitle = document.querySelector("#title"); 
    const txISBN = document.querySelector("#isbn");
    const txOverdueFee = document.querySelector("#overdueFee");
    const txPublisher = document.querySelector("#publisher");
    const txDatePublisher = document.querySelector("#datePublished");

    const initAddNewBook = function () {
        const formNewBook = document.querySelector("#newBookForm");
        formNewBook.addEventListener("submit", addNewBook);
    };

    const bookData = function () {
        const bookObj = {
            "title": txTitle.value,
            "isbn": txISBN.value,
            "overdueFee": txOverdueFee.value,
            "publisher": txPublisher.value,
            "datePublished": txDatePublisher.value
        };
        return bookObj;
    };

    const clearForm = function () {
        txTitle.value = "";
        txISBN.value = "";
        txOverdueFee.value = "";
        txPublisher.value = "";
        txDatePublisher.value = "";
    };

    const addNewBook = async function (event) {
        event.preventDefault();
        const book = bookData(); //
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            "method": "POST",
            "body": JSON.stringify(book),
            "headers": {
                "Content-Type": "application/json"
            }
        });
        if(response.ok) {
            console.log(await response.json());
            clearForm();
        } else {
            console.log(response.statusText);
        }
    };

    
    initAddNewBook();
};

