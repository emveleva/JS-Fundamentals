function solve(arr){
    let sentence = arr.shift().split(' ');

    while ((line = arr.shift()) !== 'Stop'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'Delete':
                let deleteIndex = Number(arg1);
                if (sentence[deleteIndex+1] !== undefined){
                    sentence.splice(deleteIndex+1, 1);
                }
                break;
        
            case 'Swap':
                let word1 = arg1;
                let word2 = arg2;
                if (sentence.includes(word1) && sentence.includes(word2)){
                    let secondIndex = sentence.indexOf(word2);
                    sentence.splice(sentence.indexOf(word1), 1, word2);
                    sentence.splice(secondIndex, 1, word1);
                }
                break;
            
            case 'Put':
                let putWord = arg1;
                let putIndex = Number(arg2) -1;
                if (putIndex >= 0 && putIndex <= sentence.length){
                    sentence.splice(putIndex, 0, putWord);
                }
                break;

            case 'Sort':
                sentence.sort((a, b) => b.localeCompare(a));

                break;

            case 'Replace':
                let replaceWord1 = arg1;
                let replaceWord2 = arg2;
                if (sentence.includes(replaceWord2)){
                    sentence.splice(sentence.indexOf(replaceWord2), 1, replaceWord1);
                }
                break;
        }
    }
    console.log(sentence.join(' '))
}

solve([
    'Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete -1',
    'Put it 4',
    
    'Stop',
    ''
  ]
  )