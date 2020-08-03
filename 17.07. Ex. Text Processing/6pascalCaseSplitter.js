function solve(text){
    let print = [];
    let upperCaseIndexes = [];
    let textArray = text.split('');
    for (let i = 0; i < textArray.length; i++){
        if (textArray[i].charCodeAt(0) >= 65 && textArray[i].charCodeAt(0) <= 90){
            upperCaseIndexes.push(i)
        }
    }
    for (let i = 0; i < upperCaseIndexes.length; i++){
        let substring = text.substring(upperCaseIndexes[i], upperCaseIndexes[i+1] )
        print.push(substring)
    }
    console.log(print.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')