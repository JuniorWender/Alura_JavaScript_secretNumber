const values = JSON.parse(localStorage.getItem('values')) || []; // verify if exist itens on localStorage
const difficults = JSON.parse(localStorage.getItem('difficults')) || []; // verify if exist itens on localStorage

var maxvalue;
var minvalue;

function createNewGapOnLocalStorage(max, min) {
    max = parseInt(max);
    min = parseInt(min);

    if(max == 0)
        maxvalue = 100;

    if(min == 0)
        minvalue = 1;

    if(max > min){
        maxvalue = max;
        minvalue = min;
    }
    else if(min > max){
        maxvalue = min;
        minvalue = max;
    }

    var actualGap = {
        "maximum": maxvalue,
        "minimum": minvalue
    };

    localStorage.setItem("values",JSON.stringify(actualGap));
}

function createNewDifficultOnLocalStorage(difficult) {

    localStorage.setItem("difficults",JSON.stringify(difficult));

}