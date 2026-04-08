var base = parseFloat(prompt("Enter base fare:"));
var distance = parseFloat(prompt("Enter distance:"));
var minutesLate = parseFloat(prompt("Enter minutes late:"));
var seed = parseInt(prompt("Enter seed:"));

var distanceTimesSeven = 7 * distance;
var fare = base + distanceTimesSeven;

if (minutesLate > 15) {
    fare = fare + 20;
}

if (distance > 10) {
    var tenPercent = fare * 10;
    tenPercent = tenPercent / 100;
    var floorTenPercent = Math.floor(tenPercent);
    fare = fare + floorTenPercent;
}

var remainderForOddCheck = seed % 2;
var isSeedOdd = false;
if (remainderForOddCheck !== 0) {
    isSeedOdd = true;
}

if (isSeedOdd === true) {
    fare = fare - seed;
} else {
    fare = fare + seed;
}

var remainderForMultiple = fare % 5;
var fareRoundedUp = fare;

if (remainderForMultiple !== 0) {
    var amountToAdd = 5 - remainderForMultiple;
    fareRoundedUp = fare + amountToAdd;
} else {
    fareRoundedUp = fare;
}

alert(fareRoundedUp);