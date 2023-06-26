"use strict"
function solveEquation(a, b, c) {
let arr = [];
let d = (b ** 2 - 4 * a * c);
if (d > 0) {
arr.push((-b + Math.sqrt(d)) / (2 * a));
arr.push((-b - Math.sqrt(d)) / (2 * a));
}
else if (d === 0) {
arr.push(-b / (2 * a));
}
return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
if (isNaN(percent) === true || isNaN(contribution) === true || isNaN(amount) === true || isNaN(countMonths) === true) {
return false
}
let Payment;
let totalAmount;
let p = (percent / 100) / 12;
let s = amount - contribution;

Payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
totalAmount = Payment * countMonths;

return Number(totalAmount.toFixed(2));
}
