const minValue = 1;
const maxValue = 100;
const secretNumber = generatorRandomNumber();

function generatorRandomNumber() {
    return parseInt(Math.random() * maxValue + 1);
}

const elementMinValue = document.getElementById('menor-valor');
elementMinValue.innerHTML = minValue;

const elementMaxValue = document.getElementById('maior-valor');
elementMaxValue.innerHTML = maxValue;