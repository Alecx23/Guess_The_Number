/*
1. generates a random number between 1 and 100

2. saves the number of tries that the player 

3.  Oferiti jucatorului o modalitate de a ghici numarul

4. once the number is introduced register it somewhere so that the player can se what have they tried

5. on continuation check if the numbers are correct

6. if the number is correct 
            
           i. show a message of congratulation
           ii. opriti jucatorul sa mai introduca alte incercari
           iii. Afisati un control care permite jucatorului sa joace din nou 

7. Daca nu este corect si jucatorul mai are incercari ramase
           i. Spuneti jucatorului ca a gresit
           ii. permiteti jucatorului sa incerce din nou
           iii. mariti numarul de incercari cu 1

8. daca jucatorul greseste si nu mai are incercari 
           i. spuneti jucatorului ca jocul s-a terminat
           ii. opriti jucatorul sa mai introduca alte incercari
           iii. afisati un comntrol care permite jucatorului sa reia jocul

9. odata ce jocul se reia, asigurati-va ca logica jocului si interfata de utilizare sunt complet 
   resetate, apoi reveniti la pasul 1


*/


// The necessery variable // 

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

// check guess function //

function checkGuess(){
    const userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = 'Previous attempts '
    }
    guesses.textContent +=userGuess + ' ';

    if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulation';
        lastResult.style.backgroundColor = 'Green';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if(guessCount === 10){
        lastResult.textContent = 'Game is over. You lose :(';
        setGameOver();
    }
    else{
        lastResult.textContent = 'Incorrect, try again'
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'The number is higher!';
        }
        else if(userGuess > randomNumber){
            lastResult.textContent = 'The number is lower!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

// Game over function //

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Would you like to play again?';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// the reset function // 

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for(const resetPara of resetParas){
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);