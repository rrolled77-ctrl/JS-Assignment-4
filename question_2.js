var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

var currentNumber = N;

for (var step = 1; step <= 3; step = step + 1) {
    
    var remainderForEvenCheck = currentNumber % 2;
    var isEven = false;
    if (remainderForEvenCheck === 0) {
        isEven = true;
    }
    
    if (isEven === true) {
        var halfValue = currentNumber / 2;
        currentNumber = halfValue;
        currentNumber = currentNumber + seed;
    } else {
        var multipliedValue = currentNumber * 3;
        currentNumber = multipliedValue;
        currentNumber = currentNumber - seed;
    }
}

var finalNumber = currentNumber;

var isInRange = false;
if (finalNumber >= 100) {
    if (finalNumber <= 999) {
        isInRange = true;
    }
}

var middleDigit = -1;
if (isInRange === true) {
    var remainderAfterHundreds = finalNumber % 100;
    var tensPlace = Math.floor(remainderAfterHundreds / 10);
    middleDigit = tensPlace;
}

var middleMatches = false;
if (middleDigit === seed) {
    middleMatches = true;
}

if (isInRange === true) {
    if (middleMatches === true) {
        alert("YES, " + finalNumber);
    } else {
        alert("NO, " + finalNumber);
    }
} else {
    alert("NO, " + finalNumber);
}