window.onload=calc;
function calc(){
    
    document.getElementById("sumButton").addEventListener("change",inputSum)
    
}

function inputSum() {
  console.log("hi")
  let num1 = document.getElementById("number1");
  let num2 = document.getElementById("number2");
  let result = document.getElementById("result");
  result.value = Number(num1.value) + Number(num2.value);
}