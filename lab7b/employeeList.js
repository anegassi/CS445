window.onload=fetchBtn;

let randomFetchedData = fetch('https://randomuser.me/api/?results=5')
randomFetchedData.then(response=> response.json())  //  parse the response as JSON
            .then((response) => {
                let innerDiv= document.getElementById("innerDiv");
                     innerDiv.innerHTML="";
                let arrayOfEmployees= response.results;     
                console.log(arrayOfEmployees);
                for(let emp of arrayOfEmployees){
                   let row=`   <div id="innerDiv" class="innerDiv">
                       <img src="${emp.picture.medium}" alt="" />
                       <article id="article">
                         <ul>
                           <li id=""> ${emp.name.first} ${emp.name.last}</li>
                           <li>phone : ${emp.cell}</li>
                           <li> ${emp.email}</li>
                         </ul>
                       </article>
                     </div>`
                     innerDiv.innerHTML+=row;
                }
                });

function fetchBtn(){
    document.getElementById("btn").onclick= function () {
        let randomFetchedData = fetch('https://randomuser.me/api/?results=5')
randomFetchedData.then(response=> response.json())  //  parse the response as JSON
            .then((response) => {
                let innerDiv= document.getElementById("innerDiv");
                     innerDiv.innerHTML="";
                let arrayOfEmployees= response.results;     
                console.log(arrayOfEmployees);
                for(let emp of arrayOfEmployees){
                   let row=`   <div id="innerDiv" class="innerDiv">
                      <div id="imgDiv"> <img src="${emp.picture.medium}" alt="" /> </div>
                       <article id="article">
                         <ul>
                           <li id=""> <b>${emp.name.first} ${emp.name.last}</b></li>
                           <li>phone : ${emp.cell}</li>
                           <li> ${emp.email}</li>
                         </ul>
                       </article>
                     </div>`
                     innerDiv.innerHTML+=row;
                }
                });


    };
}