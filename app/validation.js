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

            <div class="organize-endgame-btn">
                <button id="play-again" class="btn btn-play"> Play Again </button>
                <button id="menu" class="btn btn-play"> Menu </button>
            </div>

            <footer> 
            Create By: <a class="link" href="https://www.linkedin.com/in/jorgewenderjunior/"> Jorge Wender Jr </a>
            <br>
            <span> 02/12/2022 </span>
            </footer>
        `;

        localStorage.removeItem("values");
        localStorage.removeItem("difficults");

    } else if(number > secretNumber){
        elementGuess.innerHTML += `<div> The secret Number is less than <i class="fa-solid fa-arrow-down-long"></i> </div> `;
    }else{
        elementGuess.innerHTML += `<div> The secret Number is bigger than <i class="fa-solid fa-arrow-up-long"></i> </div> `
    }
}

function gussOnGap(number) {
    return number > maximumValue || number < minimumValue;
}

function guessInvalid(number) {
    return Number.isNaN(number);
}


document.body.addEventListener('click',e => {
    if(e.target.id == 'play-again'){
        window.location.reload();
    }
    else if(e.target.id == 'menu'){
        window.location = '../index.html';
    }
})
