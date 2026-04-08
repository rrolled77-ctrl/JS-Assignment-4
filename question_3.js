var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

var resultX = -1;

for (var X = 0; X <= 100000; X = X + 1) {
    
    var candidate = N + X;
    
    var remainderForDivisible = candidate % K;
    var divisibleByK = false;
    if (remainderForDivisible === 0) {
        divisibleByK = true;
    }
    
    var candidateString = candidate.toString();
    var lengthOfString = candidateString.length;
    
    var palindromeCheck = true;
    for (var i = 0; i < lengthOfString; i = i + 1) {
        var firstChar = candidateString.charAt(i);
        var lastPosition = lengthOfString - 1 - i;
        var lastChar = candidateString.charAt(lastPosition);
        if (firstChar !== lastChar) {
            palindromeCheck = false;
        }
    }
    
    var isPalindrome = false;
    if (palindromeCheck === true) {
        isPalindrome = true;
    }
    
    if (divisibleByK === true) {
        if (isPalindrome === true) {
            resultX = X;
            break;
        }
    }
}

alert(resultX);