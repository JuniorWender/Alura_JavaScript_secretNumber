const btn = document.getElementsByClassName('btn');
const btnRules = document.getElementsByClassName('btn-tip');
const btnDifficult = document.getElementsByClassName('btn-difficult');
const btnStart = document.getElementsByClassName('btn-start');

const gapDiv = document.getElementsByClassName('input-box');
const minValueElement = document.getElementById('min-value');
const maxValueElement = document.getElementById('max-value');

const colors = ['#F2E7D5' , '#6D9886'];

Array.from(btn).forEach(event => {
    event.addEventListener('click',element => {
        if(element.target === btnRules[0]){
            console.log('rules');
        }

        else if(element.target === btnStart[0]){
            createNewGapOnLocalStorage(Math.abs(maxValueElement.value),Math.abs(minValueElement.value));
            window.location = '../gamePage.html?';
        }
    })
});

function selectDifficult(difficult) {
    Array.from(btnDifficult).forEach(element => {
        element.style.backgroundColor = colors[0];
        element.style.border = 'solid 0px';
    });

    if(difficult === btnDifficult[0]){
        createNewDifficultOnLocalStorage(60);
    }
    if(difficult == btnDifficult[1]){
        createNewDifficultOnLocalStorage(30)
    }
    if(difficult == btnDifficult[2]){
        createNewDifficultOnLocalStorage(15);
    }

    gapDiv[0].style.display = 'block';
    difficult.style.backgroundColor = colors[1];
    difficult.style.border = 'solid 2px';
}