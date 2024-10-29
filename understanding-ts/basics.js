"use strict";
function add_basics(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResultFlag = true;
const phrase = "Result is: ";
add_basics(number1, number2, printResultFlag, phrase);
