window.onload=calc;
function calc(){
    document.getElementById("sumButton").addEventListener('onclick',inputSum);
}
function inputSum() {
    let num1 = document.getElementById("number1");
    let num2 = document.getElementById("number2");
    let result = document.getElementById("result");
    result.value = Number(num1.value) + Number(num2.value);
  }