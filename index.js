// alert("Working");

//Dice 1
var randomNumber1=Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

//Dice 2
var randomNumber2=Math.ceil(Math.random()*6);
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");

// Text written as result
if (randomNumber1>randomNumber2){
  document.querySelector(".container h1").innerHTML="Player 1 wins!";
}
else if (randomNumber2>randomNumber1){
  document.querySelector(".container h1").innerHTML="Player 2 wins!";
} else{
  document.querySelector(".container h1").innerHTML="Draw!";
}
