function add(operand1, operand2) {
    let sum = operand1 + operand2;
    return sum;
}

function subtract(operand1, operand2) {
    let difference = operand1 - operand2;
    return difference;
}

function multiply(operand1, operand2) {
    let product = operand1 * operand2;
    return product;
}

function divide(operand1, operand2) {
    let quotient = operand1 / operand2;
    return quotient;
}

function operate(operator, operand1, operand2) {
    if (operator === "+") {
        add(operand1, operand2);
    }

    if (operator === "-") {
        subtract(operand1, operand2);
    }

    if (operator === "*") {
        multiply(operand1, operand2);
    }

    if (operator === "/") {
        divide(operand1, operand2);
    }
}

function display() {
    let buttons = document.querySelectorAll(".number-btn");
    let display = document.querySelector(".display");
    
    buttons.forEach(button => { button.addEventListener('click', () => {
        display.textContent = button.textContent;
    });
});

}

display();