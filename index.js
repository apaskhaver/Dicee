var randomNumber = Math.floor(Math.random() * 6) + 1;
if (randomNumber === 1) {
  document.querySelector(".dice").lastElementChild.setAttribute("src", "images/dice1.png");
} else if (randomNumber === 2) {
  document.querySelector(".dice").lastElementChild.setAttribute("src", "images/dice2.png");
} else if (randomNumber === 3) {
  document.querySelector(".dice").lastElementChild.setAttribute("src", "images/dice3.png");
} else if (randomNumber === 4) {
  document.querySelector(".dice").lastElementChild.setAttribute("src", "images/dice4.png");
} else if (randomNumber === 5) {
  document.querySelector(".dice").lastElementChild.setAttribute("src", "images/dice5.png");
} else if (randomNumber === 6) {
  document.querySelector(".dice").lastElementChild.setAttribute("src", "images/dice6.png");
}

var SecondRandomNumber = Math.floor(Math.random() * 6) + 1;
if (SecondRandomNumber === 1) {
  document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "images/dice1.png");
} else if (SecondRandomNumber === 2) {
  document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "images/dice2.png");
} else if (SecondRandomNumber === 3) {
  document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "images/dice3.png");
} else if (SecondRandomNumber === 4) {
  document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "images/dice4.png");
} else if (SecondRandomNumber === 5) {
  document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "images/dice5.png");
} else if (SecondRandomNumber === 6) {
  document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "images/dice6.png");
}

if (randomNumber > SecondRandomNumber) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (randomNumber < SecondRandomNumber) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
