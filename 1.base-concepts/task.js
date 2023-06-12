"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let firstRoot = 0;
  let secondRoot = 0;

  //  find Discriminant b²-4*a*c
  let valueDiscriminant = b ** 2 - 4 * a * c;

  if (valueDiscriminant < 0) {
  // пустой массив
  } else if (valueDiscriminant === 0) {
    firstRoot = -b / ( 2 * a );
    arr.push(firstRoot);
  } else {
    firstRoot = (-b + Math.sqrt(valueDiscriminant) )/(2*a);
    secondRoot = (-b - Math.sqrt(valueDiscriminant) )/(2*a);
    arr.push(firstRoot);
    arr.push(secondRoot);
  }


  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 let monthPercent = percent / 100 / 12;
 let bodyAmount = amount - contribution;
 let monthlyPayment = bodyAmount * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
 let totalAmount = monthlyPayment * countMonths;
 totalAmount = totalAmount.toFixed(2);
 return Number(totalAmount);
}