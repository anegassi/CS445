window.onload = function() {
    // document.getElementById("submit").onclick = function() {
    //     // let num1 = document.getElementById('num1').value;
    //     // let num2 = document.getElementById('num2').value;
    //     // document.getElementById("result").value = parseInt(num1) + parseInt(num2);
    //     document.getElementById("result").value = parseInt(document.getElementById('num1').value) +
    //         parseInt(document.getElementById('num2').value);
    // }

    const calcForm=document.getElementById("calcForm");
    
    calcForm.addEventListener("submit",function(event){
        event.preventDefault();// this will prevent the button type submit by default from submitting the form and act like a regular button
        document.getElementById("result").value = parseInt(document.getElementById('num1').value) +
        parseInt(document.getElementById('num2').value);
    })
}