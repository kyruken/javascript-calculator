
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

    let inputValue = 0;
    let tempValue = 0;
    let totalValue = 0;
    let operation = '';
    let inputToggle = true;
    
    numberButtons.forEach(button => { button.addEventListener('click', () => {
        display.textContent += button.textContent;

    });
});

    operateButtons.forEach(button => { button.addEventListener('click', () => {
        console.log(display.textContent);
        inputValue = Number(display.textContent);
        clearScreen();
        let operator = button.textContent;
        operation = operator;
        if (inputValue > 0) {
            tempValue = inputValue;
        }

    });

});

    equalButton.addEventListener('click', () => {
        inputValue = Number(display.textContent);
        if (totalValue === 0) {
            console.log("yolo");
            totalValue += operate(operation, tempValue, inputValue);
        }
        else {
            console.log("swag");
            totalValue = operate(operation, totalValue, inputValue);
        }
        display.textContent = totalValue;
        

    });

}


displayNumbers();