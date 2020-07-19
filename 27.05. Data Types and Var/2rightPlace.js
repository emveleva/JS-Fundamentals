function solve(firstWord, char, secondWord){
    let newWord = "";
    for (let i = 0; i < firstWord.length; i++){
        if (firstWord[i] != "_"){
            newWord += firstWord[i];
        } else {
            newWord += char;
        }
    }
    if (newWord === secondWord){
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

solve("Str_ng", "i", "String")