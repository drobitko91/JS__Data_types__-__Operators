'use strict'

// minimum
// task 1

const a = 0.1;
const b = 0.2;
const sumAAndB = a + b;
const sumResult = +sumAAndB.toFixed(2);

console.log(sumResult);

// task 2

const d = '1';
const c = 2;
const sumDAndB = +d + c;

console.log(sumDAndB);

// task 3

function calculateFileAmount() {

    const FILE_SIZE = 820;
    const sizeDrive = +prompt('Type size of your flesh drive');
    const convertGbToMb = sizeDrive * 1024;
    const resultAmount = convertGbToMb / FILE_SIZE;

    console.log(Math.floor(resultAmount));
}
// calculateFileAmount();


// normal
// task 1

function resultAndRestAmount() {

    const walletTotal = +prompt('How much money do you have?');
    const chocolatePrice = +prompt('Type the price of chocolate');
    const resultAmountChocolate = Math.floor(walletTotal / chocolatePrice);
    const restAmount = walletTotal % chocolatePrice;

    console.log(resultAmountChocolate, restAmount);
}
// resultAndRestAmount();

// task 2

function reverseNumber() {

    let number = +prompt('Type a three-digit number');
    let result = 0;

    while(number > 0) {        
        const rightDigit = number % 10;
        
        result = result * 10 + rightDigit;
        
        number = Math.floor(number / 10);
    }
    console.log("Reversed number is : " + result);
}
// reverseNumber(); 


// maximum
// task 1

function twoMonthDepositAmount() {
    const depositAmount = +prompt('Type your deposit amount for two month');
    const interestRatePerMonth = depositAmount * 0.05 / 12;
    const amountInterest = interestRatePerMonth *  2;

    console.log(amountInterest);
}

twoMonthDepositAmount();

// task 2

// 2 && 0 && 3  answer: 0;

//  2 || 0 || 3 answer: 3;

// 2 && 0 || 3 answer: 3;





