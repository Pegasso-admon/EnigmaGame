const colors = ['blue', 'red', 'green'];
    const patternElement = document.getElementById('pattern');
    const crudymessage = document.getElementById('crudymessage');
    const questionBox = document.getElementById('question');
    const result = document.getElementById('result');

    function showPattern() {
    crudymessage.textContent = 'CRUDY: Observe the pattern...';
    patternElement.classList.remove('hidden');

    colors.forEach(color => {
        const box = document.createElement('div');
        box.classList.add('color-box');
        box.style.backgroundColor = color;
        patternElement.appendChild(box);
    });

    // Show pattern for 3 seconds
    setTimeout(() => {
        patternElement.classList.add('hidden');
        patternElement.innerHTML = ''; // clear
        crudymessage.textContent = 'Question:';
        questionBox.classList.remove('hidden');
    }, 3000);
    }

    function checkAnswer(answer) {
    const correct = colors[1]; // the second color
    if (answer === correct) {
        result.textContent = "You win. Redirecting...";
        setTimeout(() => {
            window.location.href = "../level04/level04.html";
        }, 2000); // Espera 2 segundos antes de redirigir
    } else {
        result.textContent = "You have lost. Redirecting...";
        setTimeout(() => {
            window.location.href = "../death02/death02.html";
        }, 2000); // Espera 2 segundos antes de redirigir
    }
    }
    
    


    showPattern(); // starts the game on load