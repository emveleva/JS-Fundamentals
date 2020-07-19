function solve(arr){
    let output = [];
    arr.sort((a, b) => a-b);
    let length = arr.length;
    for (let i = 0; i < length; i+= 2){
        let biggestNumber = arr.pop();
        let smallestNumber = arr.shift();
        output.push(biggestNumber, smallestNumber);
    }
    console.log(output.join(' '))
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])