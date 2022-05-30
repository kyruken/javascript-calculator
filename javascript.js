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

function displayNumbers() {
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
        if (totalValue === 0 && tempValue === 0) {
            totalValue += operate(operation, tempValue, inputValue);
        }
        else {
            totalValue = operate(operation, totalValue, inputValue);
        }
    }
    
    numberButtons.forEach(button => { button.addEventListener('click', () => {
        //Clears screen if an operator is pressed
        if (inputToggle === true) {
            clearScreen();
            inputToggle = false;
        }
        display.textContent += button.textContent;

    });
});

    operateButtons.forEach(button => { button.addEventListener('click', () => {
        inputValue = Number(display.textContent);
        calculate();

        inputToggle = true;
        let operator = button.textContent;
        operation = operator;
        tempValue = inputValue;

        if(totalValue > 0) {
            display.textContent = totalValue;
        }

    });

});

    equalButton.addEventListener('click', () => {
        inputValue = Number(display.textContent);
        calculate();
        display.textContent = totalValue;

    });

    clearButton.addEventListener('click', () => {
        totalValue = 0;
        tempValue = 0;
        inputValue = 0;
        operation = '+';
        inputToggle = false;

        clearScreen();
    });



}


displayNumbers();