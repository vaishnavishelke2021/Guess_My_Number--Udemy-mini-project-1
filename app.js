"use strict";

const number = document.getElementById("number");
const guess = document.getElementById("enter-guess");
const guessBtn = document.getElementById("guessBtn");
let scoreElement = document.getElementById("score");
let highestScoreElement = document.getElementById("highest-score");
const message = document.querySelector(".message");
const againBtn = document.getElementById("againBtn");


let score = 20;
let highestScore = 0;

scoreElement.textContent = score;
highestScoreElement.textContent = highestScore;

// random num 
let randomNum = Math.floor(Math.random() * 20) + 1;


guessBtn.addEventListener("click", () => {
  //   when no input
  if (!guess.value) {
    message.textContent = "😶 No number";
  }
  //   when user wins
  else if (parseInt(guess.value) === randomNum) {
    message.textContent = "🥳 Correct Number";
    number.textContent = randomNum;
    document.querySelector(".container").style.backgroundColor = "#60b347";

    // update highScore 
    if (score > highestScore) {
      highestScore = score;
      highestScoreElement.textContent = highestScore;
    } 
  }
//   refactoring code using ternay operator 
else if(guess.value != randomNum){
    if (score > 1) {
        message.textContent = (guess.value > randomNum) ? "☝️ Too High" : "👇 Too Low";
        score--;
        scoreElement.textContent = score;
      } else {
        message.textContent = "🥺 You Lost";
        scoreElement.textContent = 0;
      }
}
//   //   when guss is high
//   else if (parseInt(guess.value) > randomNum) {
    
//   }
//   //   when guess is low
//   else if (parseInt(guess.value) < randomNum) {
//     if (score > 1) {
//       message.textContent = "👇 Too Low";
//       score--;
//       scoreElement.textContent = score;
//     } else {
//       message.textContent = "🥺 You Lost";
//       scoreElement.textContent = 0;
//     }
//   }
});


againBtn.addEventListener("click", () => {
  score = 20;
  scoreElement.textContent = score;
  randomNum = Math.floor(Math.random() * 20) + 1;
  message.textContent = "🕰️ Start Guessing...";
  number.textContent = '?';
  guess.value = '';

  document.querySelector(".container").style.backgroundColor = "#161616";
});
