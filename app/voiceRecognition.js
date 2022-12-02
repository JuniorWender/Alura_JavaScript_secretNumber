const elementGuess = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.lang = 'en';

recognition.start();
setNumbersOnTheScreen();

recognition.addEventListener('result',onSpeak);

function onSpeak(e) {
    guess = e.results[0][0].transcript;
    showGuessOnScreen(guess);
    verifyGuessIsValid(guess);
}

function showGuessOnScreen(guess) {
    elementGuess.innerHTML = `
        <div> You Say </div>
        <span class="box">${guess}</span>
    `;
}

recognition.addEventListener('end',() => recognition.start());