function add_basics(
    n1: number,
    n2: number,
    showResult: boolean,
    phrase: string,
) {
    const result = n1 + n2;

    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResultFlag = true;
const phrase = "Result is: ";

console.log("test");

add_basics(number1, number2, printResultFlag, phrase);
