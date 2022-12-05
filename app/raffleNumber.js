const elementMinValue = document.getElementById('menor-valor');
const elementMaxValue = document.getElementById('maior-valor');

var secretNumber = 0;
let minValue = 0;
let maxValue = 100;

function setGap(max = 100, min = 1) {
    max = parseInt(max);
    min = parseInt(min);
    
    if(max > min){
        maxValue = max;
        minValue = min;
    }
    else if(min > max){
        maxValue = min;
        minValue = max;
    }
    if(maxValue == 0){
        maxValue = 100;
    }
    if(minValue == 0){
        minValue = 1;
    }
    console.log(maxValue,minValue);
    generatorRandomNumber();
}

function generatorRandomNumber() {
    secretNumber = parseInt(Math.random() * maxValue + 1);
    return secretNumber;
}

function setNumbersOnTheScreen() {
    elementMaxValue.innerHTML = maxValue;
    elementMinValue.innerHTML = minValue;
}
