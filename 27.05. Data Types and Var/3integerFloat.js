function solve(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let result = '';
    if (sum % 1 != 0){
        result = "Float"
    } else {
        result = "Integer"
    }

    console.log(`${sum} - ${result}`)
}

solve(200, 100, 303)