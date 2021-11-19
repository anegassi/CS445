/**
 * main.js
 */
"use strict";
import{newbook,displayBooks} from "./catalog/mybooksapp.js"
// window.onload = (function () {
(function () {
    // declare variables for page-contents
    let HOME_PAGE_CONTENT;
    let CATALOG_PAGE_INITIAL_CONTENT;
    let NEW_BOOK_CONTENT;

    const initializePageContents = function () {
        HOME_PAGE_CONTENT = `
            <h1>Welcome to City Books Rental Services<sup>&reg;</sup></h1>
            <hr>
            <img src="./images/banner1.png" alt="CityBooks Photo">
        `;
        CATALOG_PAGE_INITIAL_CONTENT = `
        <div class="row">
        <div class="col-md-6">
          <span style="font-size: 1.7em">Books in our Collection</span>
        </div>
        <div class="col-md-6">
          <span style="float: right">
          <a data-target="newbook" id="addBook" class="btn btn-outline-success btn-lg" href="#">Add New Book</a>
          </span>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ISBN</th>
            <th scope="col">Book Title</th>
            <th scope="col">Overdue</th>
            <th scope="col">Publisher</th>
            <th scope="col">Date Published</th>
          </tr>
        </thead>
        <tbody id="tbodyBooks"></tbody>
      </table>
    </div>
            `;
            NEW_BOOK_CONTENT = `
         <div class="container">
         <!-- Add form here-->
         <div>
             <span style="font-size: 1.7em;">
                 New Book Form
             </span>
         </div>
         <div>
             <span>
                <b>Note:</b> Form fields with asterisk (*) are required.
             </span>
         </div>
         <form id="formNewBook">
             <fieldset>
                 <div class="row my-3">
                     <div class="col-md-12">
                         <div class="form-group">
                             <label for="title">*Book Title:</label>
                             <input class="form-control" type="text" name="title" id="title" value="" required="">
                         </div>
                     </div>
                 </div>
                 <div class="row">
                     <div class="col-md-6">
                         <div class="form-group">
                             <label for="isbn">*ISBN:</label>
                             <input class="form-control" type="text" name="isbn" id="isbn" value="" required="">
                         </div>
                     </div>
                     <div class="col-md-6">
                         <div class="form-group">
                             <label for="overdueFee">*Overdue Fee:</label>
                             <input class="form-control" type="number" step=".01" min="0" name="overdueFee" id="overdueFee" value="0.00" required="">
                         </div>
                     </div>
                 </div>
                 <div class="row my-3">
                     <div class="col-md-6">
                         <div class="form-group">
                             <label for="publisher">*Publisher:</label>
                             <input class="form-control" type="text" name="publisher" id="publisher" value="" required="">
                         </div>
                     </div>
                     <div class="col-md-6">
                         <div class="form-group">
                             <label for="datePublished">*Date Published:</label>
                             <input class="form-control" type="date" name="datePublished" id="datePublished" value="" required="">
                         </div>
                     </div>
                 </div>
                 <div class="row">
                     <button data-target="submitform" id="btnSubmit" type="submit" class="btn btn-outline-success">Save Book</button>
                 </div>
             </fieldset>
         </form>
     </div>
         `
        };
        initializePageContents();

        const displayHomePage = function () {
            document.getElementById("appContentRoot").innerHTML = HOME_PAGE_CONTENT;
        };

        const displayCatalogPage = function () {
        document.getElementById("appContentRoot").innerHTML = CATALOG_PAGE_INITIAL_CONTENT;
        // todo: fetch/present books data

        document.getElementById("addBook").addEventListener("click", (event) => {
            event.preventDefault();
            //navigate to the AddNewBook form page content, n maintain history state
            displayNewBookPage();
            history.pushState({}, "newbook", "#bookform");
        });
        
        displayBooks();

        };

        const displayNewBookPage = function () {
            document.getElementById("appContentRoot").innerHTML = NEW_BOOK_CONTENT;
            document.getElementById("title").focus();
            newbook();
        };

        // Setup App Nav logic
        const appNav = {
            pages: ["home", "catalog","newbook"],
            init: function () {
                document.querySelectorAll(".nav-link").forEach(navLink => {
                    navLink.addEventListener("click", appNav.nav);
                });
                document.querySelectorAll(".navbar-brand").forEach(navBarBrand => {
                navBarBrand.addEventListener("click", appNav.nav);
                });
                history.replaceState({}, "Home", "#home");
            //     window.addEventListener("popState", appNav.popState);
            //     let pagename = location.hash.replace("#", "");
            //  if (pagename === "catalog") {
            //      history.replaceState({}, "Catalog", "#catalog");
            //  } else if (pagename === "addnewbook") {
            //      history.replaceState({}, "AddNewBook", "#addnewbook");
            //  } else {
            //      history.replaceState({}, "Home", "#home");
            //  }
 
             window.addEventListener("popstate", appNav.popState);
                displayHomePage(); // can change the logic here to refresh current page
            },
            nav: function (event) {
                event.preventDefault();
                let currPage = event.target.getAttribute("data-target");
                history.pushState({}, currPage, `#${currPage}`);
                if(currPage === "home") {
                displayHomePage();
                } else if(currPage === "catalog") {
                displayCatalogPage();
                }
            },
            popState: function (event) {
                let pagename = location.hash.replace("#", "");
                if (pagename === "home") {
                    displayHomePage();
                } else if (pagename === "catalog") {
                    displayCatalogPage();
                } else if (pagename === "bookform") {
                    displayNewBookPage();
                }
            }
        };

        // Load/Init the application
        document.addEventListener("DOMContentLoaded", appNav.init);
})();