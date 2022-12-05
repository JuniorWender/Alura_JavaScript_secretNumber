const divTimer = document.getElementById('timerdiv');

function setTimeInterval(s) {  
    let countdown = setInterval(() => {
        divTimer.innerHTML = s --;
    
        if(s < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}