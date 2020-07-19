function solve(numOne, numTwo, operator){
    let operation = null;
    switch (operator) {
        case 'multiply':
            operation = (a, b) => a * b;            
            break;
        case 'divide':
            operation = (a, b) => a / b;
            break;
        case 'add':
            operation = (a, b) => a + b;
            break;
        case 'subtract':
            operation = (a, b) => a - b;
    }
    let result = operation(numOne, numTwo)
    return result;
}

console.log(solve(5, 5, 'multiply'))