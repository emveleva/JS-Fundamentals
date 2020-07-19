function solve(numbers){
    let arrayNumbers = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        arrayNumbers[i] = Number(numbers[i]);
    }

    for (let num of arrayNumbers){
        if (num % 2 === 0){
            sum += num;
        }
    }
    console.log(sum)
}

solve([ '1', '2', '3', '4', '5', '6' ])