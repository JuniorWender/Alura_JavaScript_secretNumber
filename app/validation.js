function verifyGuessIsValid(guess) {
    const number = +guess;

    if(guessInvalid(number)){
        elementGuess.innerHTML += '<div> Invalid Value </div>';

        return
    }

    if (gussOnGap(number)){
        elementGuess.innerHTML += `<div> Invalid Value: Try a number between ${minValue} and ${maxValue} </div>`;

        return
    }

    if (number === secretNumber){
        document.body.innerHTML = `
            <h2> Congrats! Your Guess Is Correct </h2>
            <h3> The Secret Number was ${secretNumber} </h3>

            <button id="play-again" class="btn-play"> Play Again </button>
        `;

    } else if(number > secretNumber){
        elementGuess.innerHTML += `<div> The secret Number is less than <i class="fa-solid fa-arrow-down-long"></i> </div> `;
    }else{
        elementGuess.innerHTML += `<div> The secret Number is bigger than <i class="fa-solid fa-arrow-up-long"></i> </div> `
    }
}

function gussOnGap(number) {
    return number > maxValue || number < minValue;
}

function guessInvalid(number) {
    return Number.isNaN(number);
}


document.body.addEventListener('click',e => {
    if(e.target.id == 'play-again'){
        window.location.reload();
    }
})
