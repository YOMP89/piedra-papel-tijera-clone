// Variables
const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

// Opciones del juego
const options = ['piedra', 'papel', 'tijera'];

// Función para generar elección de la computadora
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Función para determinar el ganador
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Empate';
    }
    if (
        (userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
        userScore++;
        return '¡Ganaste!';
    } else {
        computerScore++;
        return 'Perdiste';
    }
}

// Evento click para cada botón
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('data-choice');
        const computerChoice = getComputerChoice();

        // Mostrar las elecciones
        userChoiceDisplay.textContent = `Tu elección: ${userChoice}`;
        computerChoiceDisplay.textContent = `Elección de la computadora: ${computerChoice}`;

        // Determinar y mostrar el resultado
        const outcome = determineWinner(userChoice, computerChoice);
        outcomeDisplay.textContent = `Resultado: ${outcome}`;

        // Actualizar el marcador
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
    });
});
