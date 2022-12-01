const btn = document.getElementsByClassName('btn');
const btnRules = document.getElementsByClassName('btn-tip');
const btnDifficult = document.getElementsByClassName('btn-difficult');
const btnStart = document.getElementsByClassName('btn-start');

const colors = ['#F2E7D5' , '#6D9886'];

Array.from(btn).forEach(event => {
    event.addEventListener('click',element => {

        if(element.target === btnRules[0]){
            console.log('rules');
        }

        if(element.target === btnStart[0]){
            window.location = '../gamePage.html';
        }
    })
});


function selectDifficult(difficult) {
    Array.from(btnDifficult).forEach(element => {
        element.style.backgroundColor = colors[0];
        element.style.border = 'solid 0px';
    });


    if(difficult === btnDifficult[0]){
        console.log('easy');
    }
    if(difficult == btnDifficult[1]){
        console.log('medium');
    }
    if(difficult == btnDifficult[2]){
        console.log('hard');
    }

    difficult.style.backgroundColor = colors[1];
    difficult.style.border = 'solid 2px';
}
