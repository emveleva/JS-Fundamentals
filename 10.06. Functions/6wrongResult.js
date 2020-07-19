function solve(numOne, numTwo, numThree){
    let result = '';
    if (numOne >= 0 && numTwo >= 0 && numThree >= 0){
        result = 'Positive';
    } else if (numOne == 0 || numTwo == 0 || numThree == 0){
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree < 0){
        result = 'Negative';
    }else if ((numOne < 0 && numTwo < 0) || (numTwo < 0 && numThree < 0) || (numOne < 0 && numThree < 0)){
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    return result;
}

console.log(solve(-6, -12, -14))