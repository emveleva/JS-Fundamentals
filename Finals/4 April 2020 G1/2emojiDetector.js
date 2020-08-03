function solve(arr){
    let pattern = /(\:{2}[A-Z][a-z]{2,}\:{2})|(\*{2}[A-Z][a-z]{2,}\*{2})/g;
    let threshold = 1;
    let emojis = [];
    let input = arr[0];
    let emojiCounter = 0;
    for (let i = 0; i < arr[0].length; i++){
        let element = arr[0][i];
        if (!isNaN(element) && element !== ' '){
        threshold = threshold * Number(element)
        }
    };
    console.log(`Cool threshold: ${threshold}`)
    let match = input.match(pattern);
    match.forEach(element => {
        let emojiWord = element.substring(2, element.length - 2);
        let coolness = 0;
            for (let letter of emojiWord){
                let charCode = letter.charCodeAt(0);              
                coolness += charCode
            }
            emojiCounter++;
            let emoji = {name: element, coolness};
            emojis.push(emoji)
        });
        

    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`)
    emojis.forEach(element => {
        if (element.coolness >= threshold){
            console.log(element.name)
        }
    });
}

solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ]
  
  
  
  )