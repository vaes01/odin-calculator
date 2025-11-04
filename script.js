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
let secondNum = 1; // 1 as default value to handle division by zero ahead
let operator = "";


// step 3 - create a new function operate that takes an operator an two numbers an then calls one of the above functions on the numbers.

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtrac(firstNumber, secondNumber);
    } else if (operator === "x") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "÷") {
        return divide(firstNumber, secondNumber);
    }
};

// step 4 - Create a basic HTML calculator with buttons for each digit and operator (including "=").

// evertyghing is inside the mainContainer
let mainContainer = document.createElement("div")
mainContainer.classList.add("mainContainer");
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

let count = 1;

// create rows for numeric keys and then create numberic keys of each row
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
zeroBtn.classList.add("numberBtn");
zeroKeySection.appendChild(zeroBtn);
zeroBtn.textContent = 0;

let pointBtn = document.createElement("button");
pointBtn.classList.add("numberBtn");
zeroKeySection.appendChild(pointBtn);
pointBtn.textContent = ".";

let clearEntryBtn = document.createElement("button");
clearEntryBtn.classList.add("clearEntryBtn");
zeroKeySection.appendChild(clearEntryBtn);
clearEntryBtn.textContent = "CE";


// step 5 - Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.

let digitBtn = document.querySelectorAll(".numberBtn");
let displayContent = "";

const numberFormat = new Intl.NumberFormat("en-US");

//input from mouse
digitBtn.forEach((element) => {
    element.addEventListener("click", function() {
        if (lastDigitClicked === 0) {
            calcDisplay.textContent = "";
            displayContent = "";
        };
        if (calcDisplay.textContent.includes(".") && element.textContent ===".") {
            calcDisplay.textContent = calcDisplay.textContent;
        } else {
            calcDisplay.textContent = calcDisplay.textContent.replaceAll(",", "") +  element.textContent;

            calcDisplay.textContent = (numberFormat.format(calcDisplay.textContent));

            console.log(calcDisplay.textContent);

            displayContent = calcDisplay.textContent;
            lastDigitClicked = 1;
        };
    });
});

// input from keyboard (digits)
document.addEventListener("keydown", (event) => {
    if ((event.key >= "0" && event.key <= "9") || (event.key === ".")) {
        if (lastDigitClicked === 0) {
            calcDisplay.textContent = "";
            displayContent = "";
        };
        if (calcDisplay.textContent.includes(".") && event.key ===".") {
            calcDisplay.textContent = calcDisplay.textContent;
        } else {
            calcDisplay.textContent = calcDisplay.textContent.replaceAll(",", "") +  event.key;

            calcDisplay.textContent = (numberFormat.format(calcDisplay.textContent));

            console.log(calcDisplay.textContent);

            displayContent = calcDisplay.textContent;
            lastDigitClicked = 1;
        };
    };
});


// step 6 - Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.


let operatorBtnGroup = document.querySelectorAll(".operatorBtn");
let operatorOnOff = 0;
let operatorSign = "";
let lastDigitClicked = 0;
let result = 0;


clearBtn.addEventListener("click", function() {
    
    firstNum = 0;
    secondNum = 1;
    operator = "";
    operatorOnOff = 0;
    operatorSign = "";
    lastDigitClicked = 0;
    result = 0;
    calcDisplay.textContent = "";
    displayContent = "";
});

// input from keyboard
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {

        firstNum = 0;
        secondNum = 1;
        operator = "";
        operatorOnOff = 0;
        operatorSign = "";
        lastDigitClicked = 0;
        result = 0;
        calcDisplay.textContent = "";
        displayContent = "";
    };
});


clearEntryBtn.addEventListener("click", function() {
    
    secondNum = 1;
    lastDigitClicked = 0;
    result = 0;
    calcDisplay.textContent = "";
    displayContent = "";
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        secondNum = 1;
        lastDigitClicked = 0;
        result = 0;
        calcDisplay.textContent = "";
        displayContent = "";
    };
});


// input from mouse (operators)
operatorBtnGroup.forEach((element) => {
    element.addEventListener("click", function() {       
        
        let divideByZero = 0;

        if (calcDisplay.textContent === "0" && operatorSign === "÷") {
            calcDisplay.textContent = "Never try to divide by zero again!";
            firstNum = 0;
            secondNum = 1;
            operator = "";
            operatorSign = "";
            lastDigitClicked = 0;
            result = 0;
            operatorOnOff = 0;
            divideByZero = 1;
            
        } else {

            if (displayContent !== "" && operatorOnOff === 0) {
                
                if (element.textContent !== "=") {
                    firstNum = parseFloat(calcDisplay.textContent.replaceAll(",", ""));            
                    operatorOnOff = 1;

                    console.log(firstNum);
                };

            } else if (displayContent !== "" && operatorOnOff === 1) {
                
                console.log(operatorSign);

                secondNum = parseFloat(calcDisplay.textContent.replaceAll(",", ""));

                let firstNumDecimals = (firstNum - Math.trunc(firstNum)).length - 1;
                let SecondNumDecimals = (secondNum - Math.trunc(secondNum)).length - 1;

                console.log(secondNum);

                // code to address calculation after the "=" sign
                if (operatorSign !== "=" && lastDigitClicked === 1) {
                    firstNum = operate(operatorSign, firstNum, secondNum);
                };

                // code to limit the number of decimal places
                let maxDecimals = 0;
                if (operatorSign !== "÷") {
                    maxDecimals = firstNumDecimals;
                    if (firstNumDecimals < SecondNumDecimals) {
                        maxDecimals = SecondNumDecimals;
                    };
                }; 


                for (let i = 8; i >= 1; i--) {
                    if (String(firstNum - Math.trunc(firstNum)).length >= i + 1) {
                        firstNum = Number(firstNum).toFixed(i - 1);
                        break;
                    };
                };



                if ((element.textContent !== "=" & operatorSign === "=") || (element.textContent !== "=" & lastDigitClicked === 1)) {
                    calcDisplay.textContent = numberFormat.format(firstNum);

                    result = calcDisplay.textContent;

                    console.log(result);

                } else if (element.textContent === "=" && operatorSign !== "=") {
                    calcDisplay.textContent = numberFormat.format(firstNum);
    
                    result = calcDisplay.textContent;
                    secondNum = firstNum;

                    operatorOnOff = 0;

                    console.log(element.textContent);
                    console.log(result);
                };
                
                
            };
        };

        if (divideByZero === 0) {
            lastDigitClicked = 0;
            operatorSign = element.textContent;
        }
    });
});


// input from keyboard (operators)
document.addEventListener("keydown", (event) => {
    
    let currentKey = event.key;

    if (currentKey === "Enter") {
        currentKey = "=";
    };

    if (currentKey === "/") {
        currentKey = "÷";
    };

    if (currentKey === "*") {
        currentKey = "x";
    };
    
    let Symbols = operatorSymbols.toString();
    
    let divideByZero = 0;
    
    if (Symbols.includes(currentKey)) {

        if (calcDisplay.textContent === "0" && operatorSign === "÷") {
            calcDisplay.textContent = "Never try to divide by zero again!";
            firstNum = 0;
            secondNum = 1;
            operator = "";
            operatorSign = "";
            lastDigitClicked = 0;
            result = 0;
            operatorOnOff = 0;
            divideByZero = 1;
            
        } else {

            if (displayContent !== "" && operatorOnOff === 0) {
                
                if (currentKey !== "=") {
                    firstNum = parseFloat(calcDisplay.textContent.replaceAll(",", ""));            
                    operatorOnOff = 1;

                    console.log(firstNum);
                };

            } else if (displayContent !== "" && operatorOnOff === 1) {
                
                console.log(operatorSign);

                secondNum = parseFloat(calcDisplay.textContent.replaceAll(",", ""));

                let firstNumDecimals = (firstNum - Math.trunc(firstNum)).length - 1;
                let SecondNumDecimals = (secondNum - Math.trunc(secondNum)).length - 1;

                console.log(secondNum);

                // code to address calculation after the "=" sign
                if (operatorSign !== "=" && lastDigitClicked === 1) {
                    firstNum = operate(operatorSign, firstNum, secondNum);
                };

                // code to limit the number of decimal places
                let maxDecimals = 0;
                if (operatorSign !== "÷") {
                    maxDecimals = firstNumDecimals;
                    if (firstNumDecimals < SecondNumDecimals) {
                        maxDecimals = SecondNumDecimals;
                    };
                }; 


                for (let i = 8; i >= 1; i--) {
                    if (String(firstNum - Math.trunc(firstNum)).length >= i + 1) {
                        firstNum = Number(firstNum).toFixed(i - 1);
                        break;
                    };
                };



                if ((currentKey !== "=" & operatorSign === "=") || (currentKey !== "=" & lastDigitClicked === 1)) {
                    calcDisplay.textContent = numberFormat.format(firstNum);

                    result = calcDisplay.textContent;

                    console.log(result);

                } else if (currentKey === "=" && operatorSign !== "=") {
                    calcDisplay.textContent = numberFormat.format(firstNum);
    
                    result = calcDisplay.textContent;
                    secondNum = firstNum;

                    operatorOnOff = 0;

                    console.log(currentKey);
                    console.log(result);
                };
                
                
            };
        };

        if (divideByZero === 0) {
            lastDigitClicked = 0;
            operatorSign = currentKey;
        }

    };
});