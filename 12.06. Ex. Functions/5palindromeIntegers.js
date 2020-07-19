function solve(arr){
    
    for (let i = 0; i < arr.length; i++){
        let reversedNumber = '';
        let numberText = arr[i].toString();
        for (let j = numberText.length - 1; j >= 0; j--){
            reversedNumber += numberText[j];
            
        }
        if (numberText === reversedNumber){
            console.log('true')
        } else {
            console.log('false')
        }
    }

}

solve([32, 2, 232, 1010])