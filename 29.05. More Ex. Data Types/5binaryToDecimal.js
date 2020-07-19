function solve(number){
    let decimal = 0;
    let binaryText = number.toString();
    let num = 0;
    let count = 0;
    for (let i = binaryText.length-1; i >= 0; i--){
        num = Number(binaryText[i]);
        let pow2 = Math.pow(2, count)
        decimal = decimal + num * pow2;
        count++;    
}
console.log(decimal)
}

solve("11110000")