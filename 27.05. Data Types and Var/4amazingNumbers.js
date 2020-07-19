function solve(num){
    let numText = num.toString();
    let sum = 0;
    for (let i = 0; i < numText.length; i++){
        let number = Number(numText[i]);
        sum += number;
    }
    let sumText = sum.toString();
    let result = '';
    for (let j = 0; j < sumText.length; j++){
        if (Number(sumText[j]) == 9){
            result = "True";
        } else {
            result = "False";
        }
    }
    console.log(`${num} Amazing? ${result}`)
}

solve(1233)