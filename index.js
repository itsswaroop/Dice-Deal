
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

var sum = randomNumber1 + randomNumber2;
var product = randomNumber1 * randomNumber2;

function showResult(id, text) {
  var el = document.getElementById(id);
  if (!el) {
    el = document.createElement("p");
    el.id = id;
    document.querySelector("h1").insertAdjacentElement("afterend", el);
  }
  el.innerHTML = text;
}
 
showResult("product", "Product: " + product);
showResult("sum", "Sum: " + sum);
 
// Also log to the console
console.log("Dice: " + randomNumber1 + " and " + randomNumber2);
console.log("Sum: " + sum + ", Product: " + product);
 
