let display = document.querySelector(".display");

function add(operand1, operand2) {
    return Number(operand1) + Number(operand2);
}

function subtract(operand1, operand2) {
    return Number(operand1) - Number(operand2);
}

function multiply(operand1, operand2) {
    return Number(operand1) * Number(operand2);
}

function divide(operand1, operand2) {
    return Number(operand1) / Number(operand2);
}

function operate(operator, operand1, operand2) {
    if (operator === "+") {
        return add(operand1, operand2);
    }

    if (operator === "-") {
        return subtract(operand1, operand2);
    }

    if (operator === "*") {
        return multiply(operand1, operand2);
    }


    if (operator === "/") {
        return divide(operand1, operand2);
    }


}

function clearScreen() {
    display.textContent = '';

}

function calculatorDisplay() {
    let numberButtons = document.querySelectorAll(".number-btn");
    let operateButtons = document.querySelectorAll(".operation-btn");
    let equalButton = document.querySelector(".equal-btn");
    let clearButton = document.querySelector(".clear-btn");

    let inputValue = 0;
    let tempValue = 0;
    let totalValue = 0;
    let operation = '+';
    let inputToggle = false;

    function calculate() {
        //When we calculate, we want to use a new inputValue with a previously set tempValue
        //ex: 12 + 7 - ===> inputValue = 7, tempValue = 12, totalValue = 19; 
        inputValue = Number(display.textContent);
        if (totalValue === 0 && tempValue === 0) {
            totalValue += operate(operation, tempValue, inputValue);
        }
        else {
            totalValue = operate(operation, totalValue, inputValue);
        }
    }

    function createButtonEvents() {
        
        numberButtons.forEach(button => { button.addEventListener('click', () => {
            //Clears screen if an operator is pressed
            if (inputToggle === true) {
                clearScreen();
                inputToggle = false;
            }
            // += allows user input to be multiple digits
            if (display.textContent == '0') {
                clearScreen();
            }
            display.textContent += button.textContent;

        });
    });

        operateButtons.forEach(button => { button.addEventListener('click', () => {
            calculate();

            //After calculate runs, we set the next operation and also make tempValue into the recent inputValue
            inputToggle = true;
            let operator = button.textContent;
            operation = operator;
            tempValue = inputValue;

            //we use if statement to stop display in beginning, "12 + ===> display is 0"
            if(totalValue > 0) {
                display.textContent = totalValue;
            }

        });

    });

        equalButton.addEventListener('click', () => {
            calculate();
            display.textContent = totalValue;

        });

        clearButton.addEventListener('click', () => {
            inputValue = 0;
            tempValue = 0;
            totalValue = 0;
            operation = '+';
            inputToggle = false;

            clearScreen();
            display.textContent = '0';
        });

    }
    createButtonEvents();

}


calculatorDisplay();