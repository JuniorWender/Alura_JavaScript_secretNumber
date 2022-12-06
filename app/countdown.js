const divTimer = document.getElementById('timerbutton');
var countdown;

function setTimeInterval(s) {  
    countdown = setInterval(() => {
        divTimer.innerHTML = s --;
    
        if(s < 0) {
            timesOver();
        }
    }, 1000);
}

function timesOver() {
    document.body.innerHTML = `
    <h2> Your Time Is Over! </h2>
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

    clearInterval(countdown);
    localStorage.removeItem("values");
    localStorage.removeItem("difficults");
}