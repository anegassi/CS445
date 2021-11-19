/**
 * 
 */
// console.log("welcome to my books");
"use strict";
import  {addNewBook2} from "../datasource/catalog.js"
// IIFE
// window.onload
window.onload = function () {
    // BookForm data fields
    const txtTitle = document.querySelector("#title"); // document.getElementById("title");
    const txtISBN = document.querySelector("#isbn");
    const txtOverdueFee = document.querySelector("#overdueFee");
    const txtPublisher = document.querySelector("#publisher");
    const txtDatePublisher = document.querySelector("#datePublished");

    const initAddNewBook = function () {
        const formNewBook = document.querySelector("#formNewBook");
        formNewBook.addEventListener("submit", addNewBook);
    };

    const getBookData = function () {
        const bookObj = {
            "title": txtTitle.value,
            "isbn": txtISBN.value,
            "overdueFee": txtOverdueFee.value,
            "publisher": txtPublisher.value,
            "datePublished": txtDatePublisher.value
        };
        return bookObj;
    };

    const clearFormDataFields = function () {
        txtTitle.value = "";
        txtISBN.value = "";
        txtOverdueFee.value = "";
        txtPublisher.value = "";
        txtDatePublisher.value = "";
    };

    const addNewBook = async function (event) {
        event.preventDefault();
        const bookObj = getBookData(); //
       let response = await addNewBook2(bookObj);
        if(response.ok) {
            console.log(response.statusText);
            console.log(await response.json());
            clearFormDataFields();
        } else {
            console.log(response.statusText);
        }
    };

    txtTitle.focus();
    initAddNewBook();
};

