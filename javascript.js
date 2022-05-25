function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    return operand1 / operand2;
}

function operate(operator, operand1, operand2) {

}

function display() {
    let numberButtons = document.querySelectorAll(".number-btn");
    let operateButtons = document.querySelectorAll(".operation-btn");
    let display = document.querySelector(".display");
    let value = 0;
    let operation = '';
    
    numberButtons.forEach(button => { button.addEventListener('click', () => {
        display.textContent = button.textContent;
        value = button.textContent;
    });
});

    operateButtons.forEach(button => { button.addEventListener('click', () => {
        let operator = button.textContent;
        console.log(operator);


    });
});

}

display();