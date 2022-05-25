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

function display() {
    let numberButtons = document.querySelectorAll(".number-btn");
    let operateButtons = document.querySelectorAll(".operation-btn");
    let equalButton = document.querySelector(".equal-btn");

    let display = document.querySelector(".display");
    let inputValue = 0;
    let tempValue = 0;
    let totalValue = 0;
    let operation = '';
    
    numberButtons.forEach(button => { button.addEventListener('click', () => {
        display.textContent = button.textContent;
        inputValue = button.textContent;

    });
});

    operateButtons.forEach(button => { button.addEventListener('click', () => {
        if (tempValue > 0 && inputValue > 0) {
            totalValue += operate(operation, tempValue, inputValue);
            display.textContent = totalValue;
        }
        let operator = button.textContent;
        operation = operator;
        tempValue = inputValue;


    });

});

    equalButton.addEventListener('click', () => {
        display.textContent = operate(operation, tempValue, inputValue);
        

    });

}


display();