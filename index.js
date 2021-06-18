var randomNumber = Math.random()* 6;   // 0 - 5.9999
var resultNumber = Math.floor(randomNumber)+1; // 1 - 6
document.querySelector(".img1").setAttribute("src", "images/dice"+resultNumber+".png"); // changing left dice

var randomNumber1 = Math.random()* 6; // 0 - 5.9999
var resultNumber1 = Math.floor(randomNumber1)+1; // 1 - 6
document.querySelector(".img2").setAttribute("src", "images/dice"+resultNumber1+".png"); // changing right dice

if(resultNumber > resultNumber1){
  document.querySelector("h1").innerHTML="🚩player1 wins!";
} else if (resultNumber1 > resultNumber) {
  document.querySelector("h1").innerHTML="pla yer2 wins!🚩";
} else{
  document.querySelector("h1").innerHTML="Draws!";
}
