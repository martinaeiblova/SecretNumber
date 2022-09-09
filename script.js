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

/*document.querySelector(".secretnumber").textContent = secretNumber;*/

document.querySelector(".check").addEventListener("click", function () {
    const field = Number(document.querySelector(".field").value);
    console.log(field, typeof field);

    if (!field) {
        document.querySelector(".message").textContent = "No number!";
    } else if (field === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number!";
        document.querySelector(".secretnumber").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#6EC270";
        document.querySelector(".message").style.fontSize = "x-large";
        document.querySelector(".message").style.textAlign = "center";
    } else if (field > secretNumber) {
        if (score > 1) {
            document.querySelector(
                ".message"
            ).textContent = `${field} is too high!`;
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(
                ".message"
            ).textContent = `${field} is too high! You lost the game!`;
            const newScore = score - 1;
            score = newScore <= 0 ? 0 : newScore;
            document.querySelector(".score").textContent = score;
            document.querySelector("body").style.backgroundColor = "#D7111E";
            document.querySelector(".message").style.fontSize = "x-large";
            document.querySelector(".message").style.textAlign = "center";
        }
    } else if (field < secretNumber) {
        if (score > 1) {
            document.querySelector(
                ".message"
            ).textContent = `${field} is too low!`;
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(
                ".message"
            ).textContent = `${field} is too low! You lost the game!`;
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
    document.querySelector(".message").textContent = "You can start";
    document.querySelector(".message").style.fontSize = "1rem";
    document.querySelector(".message").style.textAlign = "left";
    document.querySelector(".score").textContent = "5";
});
