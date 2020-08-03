function solve(word, text){
    let textArray = text.split(' ');
    let found = false;
    textArray.forEach(element => {
        if ((element.toLowerCase()) === word.toLowerCase()){
            console.log(word)
            found = true;
        }
    });
    if (found === false){
        console.log(`${word} not found!`)
    }
}

solve('javascript',
'JavaScript is the best programming language'
)