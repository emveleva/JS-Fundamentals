function solve(numbers){
    let sumOdd = 0;
    let sumEven = 0;
    for (let num of numbers){
        if (num % 2 === 0){
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    let result = sumEven - sumOdd;
    console.log(result)
    
}

solve([3,5,7,9])