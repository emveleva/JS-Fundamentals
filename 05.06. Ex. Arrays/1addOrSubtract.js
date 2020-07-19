function solve(numbers){
    let newNumbers = [];
    let originalSum = 0;
    let newSum = 0;
    for (let i = 0; i < numbers.length; i++){
        originalSum += numbers[i];
        if (numbers[i] % 2 === 0){
            numbers[i] = numbers[i] + i;
        } else {
            numbers[i] = numbers[i] - i;
        }
        newNumbers[i] = numbers[i];
        newSum += numbers[i];
    }
    console.log(newNumbers)
    console.log(originalSum);
    console.log(newSum)
}

solve([5, 15, 23, 56, 35])