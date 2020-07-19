function solve(num1, num2, num3){
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    let sum = num1 + num2 + num3;
    let first = Math.max(num1, num2, num3);
    let third = Math.min(num1, num2, num3);
    let second = sum - (first + third);
    console.log(first);
    console.log(second);
    console.log(third)
}
solve(2, 1, 3)