const correctAnswer = "CICADA3301";
const message = document.getElementById("result");
let input = document.getElementById("text");
let button = document.getElementById("button");
let attempts = 5;

button.addEventListener("click", () => {
    let userInput = input.value.trim();

    if (userInput !== userInput.toUpperCase()) {
        message.textContent = "Please type your answer in UPPERCASE.";
        return;
    }

    if (userInput === correctAnswer) {
        message.textContent = "Correct! You win.";
        window.location.href = "../level03/level03.html";
    } else {
        attempts--;
        if (attempts > 0) {
            message.textContent = `Incorrect answer. You have ${attempts} attempt(s) left.`;
        } else {
            message.textContent = "You have used all your attempts.";
            window.location.href = "../death02/death02.html";
        }
    }

    input.value = ""; // Clear the input for the next try
});