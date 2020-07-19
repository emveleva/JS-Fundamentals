function solve(num, op, num2){
    let result = 0;
    if (op == '+'){
        result = num + num2;
    } else if (op == '-'){
        result = num - num2;
    } else if (op == '*'){
        result = num * num2;
    } else if (op == '/'){
        result = num / num2;
    } else if (op == '%'){
        result = num % num2;
    }
    console.log(result.toFixed(2));
}