// step 1 - create function for all the basic math operators.

function add(a, b) {
    return a + b;
};

function subtrac(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return "NEVER do this again";
    } else {
    return a / b;
    };
};


// step 2 - create three variables, one for each part o the operation (number, operator, another number).

let firstNum = 0;
let secondNum = 0;
let operator = "";


// step 3 - create a new function operate that takes an operator an two numbers an then calls one of the above functions on the numbers.

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtrac(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
};

// step 4 - Create a basic HTML calculator with buttons for each digit and operator (including "=").

// let mainContainer = document.querySelector(".mainContainer");

let mainContainer = document.createElement("div")
document.body.appendChild(mainContainer)

let calcBody = document.createElement("div");
calcBody.classList.add("calcBody");
mainContainer.appendChild(calcBody);

let calcDisplay = document.createElement("div");
calcDisplay.classList.add("calcDisplay");
calcBody.appendChild(calcDisplay);

let caclKeyBoard = document.createElement("div");
caclKeyBoard.classList.add("calcKeyBoard");
calcBody.appendChild(caclKeyBoard);

let mainKeySection = document.createElement("div");
mainKeySection.classList.add("mainKeySection");
caclKeyBoard.appendChild(mainKeySection);

let clearKeySection = document.createElement("div");
clearKeySection.classList.add("clearKeySection");
mainKeySection.appendChild(clearKeySection);

let clearBtn = document.createElement("button");
clearBtn.classList.add("clearBtn");
clearKeySection.appendChild(clearBtn);
clearBtn.textContent = "AC";

let numberKeySection = document.createElement("div");
numberKeySection.classList.add("numberKeySection");
mainKeySection.appendChild(numberKeySection);

let numberKey = {};

let count = 1;

for (let i = 1; i <= 3; i++) {
    let numericRow = document.createElement("div");
    numericRow.classList.add("numericRow");
    numberKeySection.appendChild(numericRow);

    for (let j = 1; j <= 3; j++) {
        let numberBtn = document.createElement("button");
        numberBtn.classList.add("numberBtn");
        numericRow.appendChild(numberBtn);
        numberBtn.id = count;
        numberBtn.textContent = count;
        count++;
    };
};


let zeroKeySection = document.createElement("div");
zeroKeySection.classList.add("zeroKeySection");
mainKeySection.appendChild(zeroKeySection);

let secondaryKeySection = document.createElement("div");
secondaryKeySection.classList.add("secondaryKeySection");
caclKeyBoard.appendChild(secondaryKeySection);

let operatorSymbols = ["+", "-", "x", "÷", "="]

for (let j = 0; j < 5; j++) {
        let operatorBtn = document.createElement("button");
        operatorBtn.classList.add("operatorBtn");
        secondaryKeySection.appendChild(operatorBtn);
        operatorBtn.textContent = operatorSymbols[j];
    };


let zeroBtn = document.createElement("button");
zeroBtn.classList.add("zeroBtn");
zeroKeySection.appendChild(zeroBtn);
zeroBtn.textContent = 0;

let pointBtn = document.createElement("button");
pointBtn.classList.add("pointBtn");
zeroKeySection.appendChild(pointBtn);
pointBtn.textContent = ".";

let clearEntryBtn = document.createElement("button");
clearEntryBtn.classList.add("clearEntryBtn");
zeroKeySection.appendChild(clearEntryBtn);
clearEntryBtn.textContent = "CE";

