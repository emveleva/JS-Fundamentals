function solve(arr){
    let k = arr.shift();
    let firstNumbers = arr.slice(0, k);
    let lastNumbers = arr.slice(arr.length-k, arr.length)
    let printFirst = '';
    let printLast = '';
    for (let i = 0; i < k; i++){
        printFirst += firstNumbers[i] + ' ';
        printLast += lastNumbers[i] + ' ';
    }
    console.log(printFirst);
    console.log(printLast);
}

solve([2, 7, 8, 9])