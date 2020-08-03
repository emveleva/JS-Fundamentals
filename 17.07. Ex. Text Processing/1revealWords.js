function solve(wordsInitial, text){
    let words = wordsInitial.split(', ')
    for(let i = 0; i < words.length; i++){
        let stars = '*'.repeat(words[i].length)
        text = text.replace(stars, words[i])
    }
    
    console.log(text)
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)