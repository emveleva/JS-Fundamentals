function solve(text){
    let specialWords = [];
    let textEdit = text.split(' ')
    let pattern = /#{1}[A-Za-z]+/g;

    for (let word of textEdit){
        if (word.match(pattern)){
            specialWords.push(word.substring(1))
        }
    };
    console.log(specialWords.join('\n'))
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')