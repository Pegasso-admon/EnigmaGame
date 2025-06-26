const input = document.getElementById("randomNumber");
const button = document.getElementById("guessBtn");
const message = document.getElementById("result");

let randomNumber = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10
let attempts = 3;

button.addEventListener("click", () => {
    const userGuess = parseInt(input.value);

    if (isNaN(userGuess)) {
        message.textContent = "Please enter a valid number.";
        return;
    }

    if (userGuess <= 0 || userGuess > 10) {
        message.textContent = "Please enter a valid number."
    }

    attempts--;

    if (userGuess < randomNumber) {
        message.textContent = `The number is higher. Remaining attempts: ${attempts}`;
    } else if (userGuess > randomNumber) {
        message.textContent = `The number is lower. Remaining attempts: ${attempts}`;
    }

    input.value = "";

    if (attempts === 0 && userGuess !== randomNumber) {
        message.textContent = "You have lost. Redirecting...";
        input.disabled = true;
        button.disabled = true;

        setTimeout(() => {
            window.location.href = "../death02/death02.html";
        }, 2000); // Espera 2 segundos antes de redirigir
    }

    if (userGuess === randomNumber) {
        message.textContent = "You win. Redirecting...";
        input.disabled = true;
        button.disabled = true;

        setTimeout(() => {
            window.location.href = "../level02/level02.html";
        }, 2000); // Espera 2 segundos antes de redirigir
    }
});
