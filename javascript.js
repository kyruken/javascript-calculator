function add(...args) {
    return args.reduce(function(total, nextNumber) {
        return total + nextNumber;
    })
}

function subtract(...args) {
    return args.reduce(function(total, nextNumber) {
        return total - nextNumber;
    })
}

function multiply(...args) {
    return args.reduce(function(total, nextNumber) {
        return total * nextNumber;
    })
}

function divide(...args) {
    return args.reduce(function(total, nextNumber) {
        return total / nextNumber;
    })
}

function operate(operator, operand) {
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
    let value = 0;
    
    buttons.forEach(button => { button.addEventListener('click', () => {
        display.textContent = button.textContent;
        value = button.textContent;
    });
});

}

display();