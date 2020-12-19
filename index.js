var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber + ".png";
document.querySelector(".dice").lastElementChild.setAttribute("src", randomDiceImage);

var SecondRandomNumber = Math.floor(Math.random() * 6) + 1;
randomDiceImage = "images/dice" + SecondRandomNumber + ".png";
document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", randomDiceImage);

if (randomNumber > SecondRandomNumber) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (randomNumber < SecondRandomNumber) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
