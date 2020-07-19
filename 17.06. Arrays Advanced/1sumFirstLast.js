function solve(arr){
    let firstNumber = Number(arr[0]);
    let lastNumber = Number(arr.pop());
    return firstNumber + lastNumber
}

console.log(solve(['20', '30', '40']))