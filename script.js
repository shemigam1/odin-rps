"use strict";

const options = ["rock", "paper", "scissors"];
const getComputerChoice = function () {
  const randomNumber = Math.trunc(Math.random() * 3);
  console.log(options[randomNumber]);
  return options[randomNumber];
};

console.log(getComputerChoice());

const game = function (player, computer) {
  if (player === "rock" && computer === "paper") {
    return "Computer wins, try again";
  } else if (player === "paper" && computer === "rock") {
    return "user wins!";
  } else if (player === "scissors" && computer === "rock") {
    return "Computer wins, try again!";
  } else if (player === "rock" && computer === "scissors") {
    return "user wins!";
  } else if (player === "scissors" && computer === "paper") {
    return "user wins!";
  } else if (player === "paper" && computer === "scissors") {
    return "Computer wins, try again!";
  } else {
    return "enter valid input!";
  }
};

const userInput = prompt("enter rock, paper or scissors: ").toLowerCase();
console.log(game(userInput, getComputerChoice()));
