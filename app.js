"use strict";

const turnMessage = document.querySelector(".turn");
const letter = document.querySelectorAll(".letter");
const squares = document.querySelectorAll(".square");
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");

console.log(squares);

// Selecting Squares
let turn = "X";
for (const square of squares) {
  square.addEventListener("click", function (e) {
    // const xMessage = (turnMessage.innerHTML = `<h3>X Wins!</h3>`);
    if (e.target.classList.contains("empty")) {
      console.log("square turn");
      e.target.innerHTML = `<div class="letter">${turn}</div>`;
      if (turn === "X") {
        turn = "O";
        e.target.classList.add("x");
        turnMessage.innerHTML = `<h3>It is O's turn</h3>`;
      } else {
        turn = "X";
        e.target.classList.add("o");
        turnMessage.innerHTML = `<h3>It is X's turn</h3>`;
      }
      console.log(turn);
      e.target.classList.remove("empty");
    }
    // X Wins
    const xWins = function () {
      if (
        square1.classList.contains("x") &&
        square2.classList.contains("x") &&
        square3.classList.contains("x")
      ) {
        turnMessage.innerHTML = `<h3>X Wins!</h3>`;
      } else if (
        square4.classList.contains("x") &&
        square5.classList.contains("x") &&
        square6.classList.contains("x")
      ) {
        turnMessage.innerHTML = `<h3>X Wins!</h3>`;
      } else if (
        square7.classList.contains("x") &&
        square8.classList.contains("x") &&
        square9.classList.contains("x")
      ) {
        turnMessage.innerHTML = `<h3>X Wins!</h3>`;
      } else if (
        square1.classList.contains("x") &&
        square4.classList.contains("x") &&
        square7.classList.contains("x")
      ) {
        turnMessage.innerHTML = `<h3>X Wins!</h3>`;
      } else if (
        square2.classList.contains("x") &&
        square5.classList.contains("x") &&
        square8.classList.contains("x")
      ) {
        turnMessage.innerHTML = `<h3>X Wins!</h3>`;
      } else if (
        square3.classList.contains("x") &&
        square6.classList.contains("x") &&
        square9.classList.contains("x")
      ) {
        turnMessage.innerHTML = `<h3>X Wins!</h3>`;
      } else if (
        square1.classList.contains("x") &&
        square5.classList.contains("x") &&
        square9.classList.contains("x")
      ) {
        turnMessage.innerHTML = `<h3>X Wins!</h3>`;
      } else if (
        square3.classList.contains("x") &&
        square5.classList.contains("x") &&
        square7.classList.contains("x")
      ) {
        turnMessage.innerHTML = `<h3>X Wins!</h3>`;
      }
    };
    xWins();
    // X Wins
    const oWins = function () {
      if (
        square1.classList.contains("o") &&
        square2.classList.contains("o") &&
        square3.classList.contains("o")
      ) {
        turnMessage.innerHTML = `<h3>O Wins!</h3>`;
      } else if (
        square4.classList.contains("o") &&
        square5.classList.contains("o") &&
        square6.classList.contains("o")
      ) {
        turnMessage.innerHTML = `<h3>O Wins!</h3>`;
      } else if (
        square7.classList.contains("o") &&
        square8.classList.contains("o") &&
        square9.classList.contains("o")
      ) {
        turnMessage.innerHTML = `<h3>O Wins!</h3>`;
      } else if (
        square1.classList.contains("o") &&
        square4.classList.contains("o") &&
        square7.classList.contains("o")
      ) {
        turnMessage.innerHTML = `<h3>O Wins!</h3>`;
      } else if (
        square2.classList.contains("o") &&
        square5.classList.contains("o") &&
        square8.classList.contains("o")
      ) {
        turnMessage.innerHTML = `<h3>O Wins!</h3>`;
      } else if (
        square3.classList.contains("o") &&
        square6.classList.contains("o") &&
        square9.classList.contains("o")
      ) {
        turnMessage.innerHTML = `<h3>O Wins!</h3>`;
      } else if (
        square1.classList.contains("o") &&
        square5.classList.contains("o") &&
        square9.classList.contains("o")
      ) {
        turnMessage.innerHTML = `<h3>O Wins!</h3>`;
      } else if (
        square3.classList.contains("o") &&
        square5.classList.contains("o") &&
        square7.classList.contains("o")
      ) {
        turnMessage.innerHTML = `<h3>O Wins!</h3>`;
      }
    };
    oWins();
  });
}

console.log(turn);
