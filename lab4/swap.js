window.onload=swapButton;
function swapButton(){
     document.getElementById("swapButton").addEventListener('click',swapImages);
}

function swapImages(){
    let img1= document.getElementById("pic1");
    let img2= document.getElementById("pic2");
    img1.src="2.jpeg";
    img2.src="1.jpeg";
}