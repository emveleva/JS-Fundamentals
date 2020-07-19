function solve(num){
    let oddSum = 0;
    let evenSum = 0;
    let text = num.toString();
    let length = text.length;
    for (let i = 0; i < length; i++){
        let element = Number(text[i]);
        if (element % 2 === 0){
            evenSum += element;
        } else {
            oddSum += element;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve(1000435)