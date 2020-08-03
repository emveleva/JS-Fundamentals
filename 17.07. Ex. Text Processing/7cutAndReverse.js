function solve(text){
    let firstString = text.substring(0, text.length/2);
    let secondString = text.substring((text.length/2));
    let firstStringReversed = ''
    let secondReversed = '';
    for (let i = firstString.length-1; i >= 0; i--){
        firstStringReversed += firstString[i]
    }
    console.log(firstStringReversed)
    for (let i = secondString.length-1; i >= 0; i--){
        secondReversed += secondString[i]
    }
    console.log(secondReversed)
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')