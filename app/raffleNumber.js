const elementMinValue = document.getElementById('menor-valor');
const elementMaxValue = document.getElementById('maior-valor');

var secretNumber = 0;
var minValue = 0;
var maxValue = 0;

function setGap(max,min) {
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
    
    generatorRandomNumber();
}

function generatorRandomNumber() {
    secretNumber = parseInt(Math.random() * maxValue + 1);
    console.log(secretNumber);
    return secretNumber;
}

function setNumbersOnTheScreen() {
    elementMaxValue.innerHTML = maxValue;
    elementMinValue.innerHTML = minValue;
}
