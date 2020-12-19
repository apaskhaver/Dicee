var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber + ".png";
//get list of all img elements, select the first one (left die) and change it
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var SecondRandomNumber = Math.floor(Math.random() * 6) + 1;
randomDiceImage = "images/dice" + SecondRandomNumber + ".png";
//select second die and change it
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage);

if (randomNumber > SecondRandomNumber) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (randomNumber < SecondRandomNumber) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
