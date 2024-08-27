const calculatorScreen = document.getElementById('screen');
let currentInput = '';
let operator = '';
let previousInput = '';

const updateScreen = (value) => {
    calculatorScreen.value = value;
}

const inputNumber = (number) => {
    if (currentInput.length < 15) { // Limita a entrada a 15 caracteres
        currentInput += number;
        updateScreen(currentInput);
    }
}

const inputOperator = (selectedOperator) => {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operator = selectedOperator;
    previousInput = currentInput;
    currentInput = '';
}

const calculate = () => {
    let result = 0;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateScreen(currentInput);
}

const clearAll = () => {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateScreen('0');
}

document.querySelector('.calculator-keys').addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) return;

    switch (target.value) {
        case '+':
        case '-':
        case '*':
        case '/':
            inputOperator(target.value);
            break;
        case '=':
            calculate();
            break;
        case 'all-clear':
            clearAll();
            break;
        case '.':
            if (!currentInput.includes('.')) inputNumber(target.value);
            break;
        default:
            inputNumber(target.value);
            break;
    }
});
