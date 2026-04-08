var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

var countValue = 0;

for (var x = L; x <= R; x = x + 1) {
    
    var remainderForDivisible = x % K;
    var divisibleByK = false;
    if (remainderForDivisible === 0) {
        divisibleByK = true;
    }
    
    var containsZero = false;
    var tempNumber = x;
    
    while (tempNumber > 0) {
        var digit = tempNumber % 10;
        if (digit === 0) {
            containsZero = true;
        }
        tempNumber = Math.floor(tempNumber / 10);
    }
    
    var digitSum = 0;
    tempNumber = x;
    while (tempNumber > 0) {
        var currentDigit = tempNumber % 10;
        digitSum = digitSum + currentDigit;
        tempNumber = Math.floor(tempNumber / 10);
    }
    
    var isPrime = false;
    if (digitSum > 1) {
        isPrime = true;
        for (var divisor = 2; divisor < digitSum; divisor = divisor + 1) {
            var remainderCheck = digitSum % divisor;
            if (remainderCheck === 0) {
                isPrime = false;
            }
        }
    }
    
    if (divisibleByK === true) {
        if (containsZero === false) {
            if (isPrime === true) {
                countValue = countValue + 1;
            }
        }
    }
}

alert(countValue);