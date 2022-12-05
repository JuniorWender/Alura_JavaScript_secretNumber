const elementMinValue = document.getElementById('menor-valor');
const elementMaxValue = document.getElementById('maior-valor');
values = JSON.parse(localStorage.getItem('values'));
difficults = Json.parse(localStorage.getItem('difficults'));

var secretNumber;
let minimumValue = values.minimum;
let maximumValue = values.maximum;

document.addEventListener('DOMContentLoaded',() => {
    generatorRandomNumber();
    setTimeInterval();
});

function generatorRandomNumber() {
    secretNumber = parseInt(Math.random() * maximumValue + 1);
    return secretNumber;
}

function setNumbersOnTheScreen() {
    elementMaxValue.innerHTML = maximumValue;
    elementMinValue.innerHTML = minimumValue;
}