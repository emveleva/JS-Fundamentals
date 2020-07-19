function solve(n){
    let sum = 0;
    let isTrue = "False"
    for (let i = 1; i <= n; i++){
        sum = i;
        if (i > 9){
            sum = 0;
            let numText = i.toString();
            let lengthNum = numText.length;
            for (let j = 0; j < lengthNum; j++){
                let number = Number(numText[j]);
                    sum += number;
                                    
            }
        }
        if (sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
    }
}

solve(15)