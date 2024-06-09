const choices = ['rock', 'paper', 'scissors'];

const userResultContainer = document.querySelector('.user-result');
const resultMessageContainer = document.querySelector('.result-message');
const computerResultContainer = document.querySelector('.computer-result');

const resultContainer = document.querySelector('.result')


document.querySelectorAll('.box').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(userChoice, computerChoice);

        resultContainer.style.display = 'block';
        
        const userChoiceImg = document.createElement('img');
        userChoiceImg.src = `/images/${userChoice}.png`;
        userChoiceImg.alt = userChoice;

        const computerChoiceImg = document.createElement('img');
        computerChoiceImg.src = `/images/${computerChoice}.png`;
        computerChoiceImg.alt = computerChoice;

        const resultText = document.createElement('p');
        resultText.textContent = result;

        userResultContainer.innerHTML = '<p>Your choice:</p>';
        resultMessageContainer.innerHTML = '';
        computerResultContainer.innerHTML = '<p>Computer\'s choice:</p>';

        userResultContainer.appendChild(userChoiceImg);
        resultMessageContainer.appendChild(resultText);
        computerResultContainer.appendChild(computerChoiceImg);

        resultContainer.style.display = 'flex';
    });
});

function getResult(user, computer) {

    if (user === computer) {
        return "It's a tie!";
    } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')) {
        return "You win!";
    } else {
        return "You lose!";
    }
}


