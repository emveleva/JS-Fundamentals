function solve(text){
    let map = new Map();
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++){
        let word = words[i];
        map.set(i, word);
    }
    for (let words of map.values){
        console.log(words)
    }
}

solve('Et cillum do voluptate cillum ut cupidatat aliqua.')