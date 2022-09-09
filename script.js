"use strict";

/*console.log(document.querySelector('.message').textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".secretnumber").textContent = 13;
document.querySelector(".score").textContent = 55;

console.log(document.querySelector(".number").value);
document.querySelector(".number").value = 26;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

/*document.querySelector(".secretnumber").textContent = secretNumber;*/

document.querySelector(".check").addEventListener("click", function () {
    const field = Number(document.querySelector(".field").value);
    console.log(field, typeof field);

    if (!field) {
        displayMessage("No number!");
    } else if (field === secretNumber) {
        displayMessage("Correct Number!");
        document.querySelector(".secretnumber").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#6EC270";
        document.querySelector(".message").style.fontSize = "x-large";
        document.querySelector(".message").style.textAlign = "center";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highest").textContent = highScore;
        }
    } else if (field !== secretNumber) {
        if (score > 1) {
            displayMessage(
                field > secretNumber
                    ? `${field} is too high!`
                    : `${field} is too low!`
            );
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You lost the game!");
            const newScore = score - 1;
            score = newScore <= 0 ? 0 : newScore;
            document.querySelector(".score").textContent = score;
            document.querySelector("body").style.backgroundColor = "#D7111E";
            document.querySelector(".message").style.fontSize = "x-large";
            document.querySelector(".message").style.textAlign = "center";
        }
    }
});

document.querySelector("#myform").addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector(".field").value = "";
});

document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#ffffff";
    document.querySelector(".secretnumber").textContent = "?";
    document.querySelector(".score").textContent = score;
    displayMessage("You can start");
    document.querySelector(".message").style.fontSize = "1rem";
    document.querySelector(".message").style.textAlign = "left";
    document.querySelector(".score").textContent = "5";
    score = 5;
});
