function solve(arr){
    let textString = arr.shift();
    let pattern = /(@{1}[a-zA-Z]{3,}@{2}[a-zA-Z]{3,}@)|(#{1}[a-zA-Z]{3,}#{2}[a-zA-Z]{3,}#)/g;
    let matchingWords = textString.match(pattern);
    let firstWord = '';
    let secondWord = '';
    let mirrorWords = [];
    if (matchingWords !== null){
        console.log(`${matchingWords.length} word pairs found!`)
        for (let pair of matchingWords){
        if (pair.includes('@@')){
            pair = pair.split('@@')
            firstWord = pair[0].replace('@', '')
            secondWord = pair[1].replace('@', '')
        } else {
            pair = pair.split('##')
            firstWord = pair[0].replace('#', '')
            secondWord = pair[1].replace('#', '')

        }
        let secondWordReversed = '';
        for (let i = secondWord.length - 1; i >=0; i--){
            secondWordReversed += secondWord[i];
        }
        if (firstWord === secondWordReversed){
            mirrorWords.push([firstWord + ' <=> ' + secondWord])
        }
    }
    } else {
        console.log(`No word pairs found!`)
    }
    
    if (mirrorWords.length > 0){
        console.log('The mirror words are:')
        console.log(mirrorWords.join(', '))
    } else {
        console.log('No mirror words!')
    }
    
    
}

solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx#xxxx# @aba@ababa@' ]

  )