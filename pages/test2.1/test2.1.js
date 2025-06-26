const correctAnswer = "8"; // Must match exactly, as string
let attempts = 3;

const message = document.getElementById("result");
const input = document.getElementById("answerInput");
const button = document.getElementById("submitBtn");

button.addEventListener("click", () => {
    const userInput = input.value.trim();

    if (userInput !== userInput.toUpperCase()) {
        message.textContent = "Please write your answer in UPPERCASE.";
        return;
    }

    if (userInput === correctAnswer) {
        message.textContent = "Correct! Moving to the next level...";
        setTimeout(() => {
            window.location.href = "../level03/level03.html";
        }, 2000);
    } else {
        attempts--;
        if (attempts > 0) {
            message.textContent = `Incorrect answer. You have ${attempts} attempt(s) left.`;
        } else {
            message.textContent = "You have used all your attempts.";
            setTimeout(() => {
                window.location.href = "../death02/death02.html";
            }, 2000);
        }
    }

    input.value = "";
});
