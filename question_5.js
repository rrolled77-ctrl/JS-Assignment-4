var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

var divisorToSkip = seed + 2;

var m = 0;
var totalSum = 0;

while (totalSum < N) {
    m = m + 1;
    
    var remainderForDivisible = m % divisorToSkip;
    var isDivisible = false;
    if (remainderForDivisible === 0) {
        isDivisible = true;
    }
    
    if (isDivisible === false) {
        totalSum = totalSum + m;
    }
}

var outputMessage = "m = " + m + ", sum = " + totalSum;
alert(outputMessage);