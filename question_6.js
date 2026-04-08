var a = parseInt(prompt("Enter a:"));
var b = parseInt(prompt("Enter b:"));
var c = parseInt(prompt("Enter c:"));

var threeTimesA = 3 * a;
var twoTimesC = 2 * c;
var score = threeTimesA + b;
score = score - twoTimesC;

if (score < 0) {
    score = 0;
}

var totalSubmissions = a + b + c;

if (totalSubmissions > 50) {
    score = score - 10;
}

var passFail = "";
if (score >= 60) {
    passFail = "PASS";
} else {
    passFail = "FAIL";
}

alert(score + ", " + passFail);